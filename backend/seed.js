const mongoose = require('mongoose')
const Recipe = require('./models/recipe')
const User = require('./models/user')
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
      .then(() => {
        return User.create([
          {
            username: 'Admin',
            email: 'admin@admin.com',
            password: 'recipe',
            passwordConfirmation: 'recipe'
          }
        ])
      })
      .then(users => {
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
            totalTime: '40 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Vegan Shepherd’s Pie With Cauliflower',
            image: 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/vegan-shepherds-pie-4.jpg',
            ingredients: [
              '1 tablespoon olive oil (or avocado oil)',
              '1 tablespoon fresh garlic, minced',
              '2/3 cup diced onion',
              '1 cup chopped (portobello) mushrooms (OPTIONAL)',
              '1 celery stalk, diced',
              '12oz or ~330g (low-fat) meatless crumbles',
              '2 teaspoons smoked paprika',
              '1 tablespoon The Fit Cook Land seasoning (or dried herbs of your choice)',
              '1 can (15oz) black lentils, drained',
              '1 can (14.5oz) no salt-added diced tomatoes, drained',
              '1 cup frozen peas & carrots',
              '1/3 cup low sugar BBQ sauce',
              '3 tablespoons Dijon mustard',
              '5oz no salt vegetable broth',
              'sea salt & pepper to taste',
              '24oz (steamable) raw cauliflower florets',
              '3 tablespoons vegan butter, room temp',
              '1/4 cup nutritional yeast',
              '4oz unsweetened almond milk',
              '2 tablespoons finely diced chives',
              'sea salt & pepper to taste',
              'fresh parsley'
            ],
            instructions: '1. Set oven to 400F. 2. Place cauliflower in a microwave safe bowl and cook in the microwave – according to instructions given – for 6 to 8 minutes, or until the cauliflower is soft.  Set aside. 3. Set a large skillet on medium heat.  Once hot, add oil, garlic, onion, mushrooms and celery and sauté for 2 to 3 minutes, then sprinkle in seasoning and cook for an additional 1 minute. 4. Add the meatless crumbles and chop it up as it cooks in the skillet.  Continue folding the ingredients as they cook for 2 to 3 additional minutes. 5. Add lentils, tomatoes, frozen peas & carrots and fold everything together.  Then add BBQ sauce and dijon mustard, and finally the veggie broth.  Bring to a light simmer, then reduce the heat to low and cover and cook while you prepare the topping. 6. In a large bowl add the ingredients for the topping.  Use a potato masher OR an immersion blender to whip together the cauliflower mash. 7. Remove the cover from the skillet and remove from the heat.  Use a spatula to evenly spread the cauliflower mash on top, then use the back of a fork to spread it out to create a textured top. 8. Place the shepherd’s pie in the oven to bake for 20 minutes. 9. After baking let it cool  down for 15 to 20 minutes, then garnish and enjoy!',
            calories: 330,
            macronutrients: {
              protein: '24g',
              carbohydrates: '34g',
              Fat: '12g',
              sugars: '12g'
            },
            tags: [
              'vegetarian', 'vegan', 'meal prep'
            ],
            servings: 5,
            totalTime: '40 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Salmon Poke With Air-Fried Wonton Chips',
            image: 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/salmon-poke-wonton-chips-4.jpg',
            ingredients: [
              '20  wonton wrappers, sliced diagonally to create 40 chips',
              '1lb sushi-grade salmon, diced into 1/2-inch cubes',
              '1 ripe avocado, diced',
              '1/2 cup diced red onion',
              '1 toasted nori seaweed sheet, crumbled and finely diced',
              '1 1/2 tablespoons fresh ginger',
              '1 tablespoon sesame oil',
              '2 tablespoons low sodium soy sauce',
              '1 tablespoon black sesame seeds'
            ],
            instructions: '1. Set air-fryer to 350F (or set oven to 400F). 2. Fill the air fryer basket (or a baking tray lined with parchment) with the wonton wrapper slices.  Lightly spray the chips with avocado oil, then air fry (or bake) for 4 to 6 minutes, or until the edges are brown and crispy. 3. To a large bowl, add the remaining ingredients and gently fold everything together. 4. Add low sodium soy sauce and ginger to taste.',
            calories: 384,
            macronutrients: {
              protein: '28g',
              carbohydrates: '26g',
              Fat: '19g',
              sugars: '3g'
            },
            tags: [
              'seafood', 'sweets & snacks'
            ],
            servings: 4,
            totalTime: '15 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Gluten-Free Vegan Chocolate Brownie Waffles',
            image: 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/vegan-choocolate-brownie-waffle-1.jpg',
            ingredients: [
              '20  wonton wrappers, sliced diagonally to create 40 chips',
              '1lb sushi-grade salmon, diced into 1/2-inch cubes',
              '1 ripe avocado, diced',
              '1/2 cup diced red onion',
              '1 toasted nori seaweed sheet, crumbled and finely diced',
              '1 1/2 tablespoons fresh ginger',
              '1 tablespoon sesame oil',
              '2 tablespoons low sodium soy sauce',
              '1 tablespoon black sesame seeds'
            ],
            instructions: '1. Set air-fryer to 350F (or set oven to 400F). 2. Fill the air fryer basket (or a baking tray lined with parchment) with the wonton wrapper slices.  Lightly spray the chips with avocado oil, then air fry (or bake) for 4 to 6 minutes, or until the edges are brown and crispy. 3. To a large bowl, add the remaining ingredients and gently fold everything together. 4. Add low sodium soy sauce and ginger to taste.',
            calories: 384,
            macronutrients: {
              protein: '28g',
              carbohydrates: '26g',
              Fat: '19g',
              sugars: '3g'
            },
            tags: [
              'seafood', 'sweets & snacks'
            ],
            servings: 4,
            totalTime: '15 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Vegan pesto',
            image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2020/03/vegan-pesto.jpg?itok=OVymH417',
            ingredients: [
              '50g pine nuts',
              'large bunch of basil, roughly chopped',
              '2 tbsp nutritional yeast',
              '150ml olive oil, plus extra for the jar',
              '2 garlic cloves, roughly chopped',
              '½ lemon, juiced'
            ],
            instructions: ['Toast the pine nuts in a small pan over a low heat for 3-4 mins until golden brown. Set aside to cool.',

              'Blitz the pine nuts with the remaining ingredients in a food processor until smooth. Season to taste.',

              'Spoon the pesto into a jar and top with a thick drizzle of olive oil. Will keep stored in the fridge for up to a week',
            ],
            calories: 574,
            macronutrients: {
              protein: '43g',
              carbohydrates: '9g',
              fat: '37g',
              sugars: '3g'
            },
            tags: [
              'Dairy-free', 'Vegetarian', 'Vegan'
            ],
            servings: 1,
            totalTime: '7 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Vegan pesto',
            image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2020/03/vegan-pesto.jpg?itok=OVymH417',
            ingredients: [
              '50g pine nuts',
              'large bunch of basil, roughly chopped',
              '2 tbsp nutritional yeast',
              '150ml olive oil, plus extra for the jar',
              '2 garlic cloves, roughly chopped',
              '½ lemon, juiced'
            ],
            instructions: ['Toast the pine nuts in a small pan over a low heat for 3-4 mins until golden brown. Set aside to cool.',

              'Blitz the pine nuts with the remaining ingredients in a food processor until smooth. Season to taste.',

              'Spoon the pesto into a jar and top with a thick drizzle of olive oil. Will keep stored in the fridge for up to a week',
            ],
            calories: 574,
            macronutrients: {
              protein: '43g',
              carbohydrates: '9g',
              fat: '37g',
              sugars: '3g'
            },
            tags: [
              'Dairy-free', 'Vegetarian', 'Vegan'
            ],
            servings: 1,
            totalTime: '7 minutes',
            isPublic: true,
            user: users[0]
          }
        ])
      })
      .then(recipes => console.log(`${'🍏'.repeat(recipes.length)} created`))
      .then(() => console.log('Goodbye!'))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  })