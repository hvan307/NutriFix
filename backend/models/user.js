const mongoose = require('mongoose')
let mongooseHidden = require('mongoose-hidden')()
const bcrypt = require('bcrypt')

const schema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, minLength: 8, unique: true },
  password: { type: String, required: true, hide: true }
})

schema.plugin(require('mongoose-unique-validator'))
schema.plugin(mongooseHidden)

schema.
  virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

schema
  .pre('validate', function checkPassword(next) {
    console.log(this._passwordConfirmation)
    console.log(this.password)
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'should match')
    }
    next()
  })


schema
  .pre('save', function hashPassword(next) {
    if (this.isModified('password')) { 
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
    next()
  })

schema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password)
}


module.exports = mongoose.model('User', schema)