const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  recipeName: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  ingredients: { type: Array, required: true },
  instructions: { type: Array, required: true },
  calories: { type: Number, required: true },
  macronutrients: { type: Object, required: true },
  tags: { type: Array },
  servings: { type: Number, required: true },
  totalTime: { type: String, required: true },
  isPublic: { type: Boolean, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

module.exports = mongoose.model('Recipe', schema)