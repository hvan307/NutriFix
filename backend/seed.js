const mongoose = require('mongoose')
const Recipe = require('./models/recipe')
// const User = require('./models/user')
const dbURI = 'mongodb://localhost/recipe-db'

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (error, db) => {
    if (error) {
      return console.log(error)
    }
    console.log('Successfully connected to mongo!')
    db.dropDatabase()
      // .then(() => {
      //   return User.create([
      //     {
      //     }
      //   ])
      // })
      .then(()=> {
        return Recipe.create([
          {
            recipeName: 'pesto pasta',
            image: 'https://4fbiobvvqqs19u27y3vblno6-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/DSC_0150-1-1030x1030-1.jpg',
            ingredients: [ 
              'pesto',
              'pasta'
            ],
            instructions: 'cook pasta, add pesto',
            calories: 342,
            macronutrients: {
              protein: '20g',
              carbohydrates: '10g',
              sugars: '2g'
            },
            tags: [
              'vegetarian'
            ],
            servings: 2,
            totalTime: '40 minutes'
          }
        ])
      })
      .then(recipes => console.log(`${'🍏'.repeat(recipes.length)} created`))
      .then(() => console.log('Goodbye!'))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  })