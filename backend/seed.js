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
            instructions: [
              '1. Set oven to 400F.',
              '2. Place cauliflower in a microwave safe bowl and cook in the microwave – according to instructions given – for 6 to 8 minutes, or until the cauliflower is soft.  Set aside.',
              '3. Set a large skillet on medium heat.  Once hot, add oil, garlic, onion, mushrooms and celery and sauté for 2 to 3 minutes, then sprinkle in seasoning and cook for an additional 1 minute.',
              '4. Add the meatless crumbles and chop it up as it cooks in the skillet.  Continue folding the ingredients as they cook for 2 to 3 additional minutes.',
              '5. Add lentils, tomatoes, frozen peas & carrots and fold everything together.  Then add BBQ sauce and dijon mustard, and finally the veggie broth.  Bring to a light simmer, then reduce the heat to low and cover and cook while you prepare the topping.',
              '6. In a large bowl add the ingredients for the topping.  Use a potato masher OR an immersion blender to whip together the cauliflower mash.',
              '7. Remove the cover from the skillet and remove from the heat.  Use a spatula to evenly spread the cauliflower mash on top, then use the back of a fork to spread it out to create a textured top.',
              '8. Place the shepherd’s pie in the oven to bake for 20 minutes. 9. After baking let it cool  down for 15 to 20 minutes, then garnish and enjoy!',
            ],
            calories: 330,
            macronutrients: {
              protein: '24g',
              carbohydrates: '34g',
              fat: '12g',
              sugars: '12g'
            },
            tags: [
              'vegetarian', 'vegan', 'dinner', 'dairy-free'
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
            instructions: [
              'Set air-fryer to 350F (or set oven to 400F)',
              'Fill the air fryer basket (or a baking tray lined with parchment) with the wonton wrapper slices.  Lightly spray the chips with avocado oil, then air fry (or bake) for 4 to 6 minutes, or until the edges are brown and crispy.',
              'To a large bowl, add the remaining ingredients and gently fold everything together.',
              'Add low sodium soy sauce and ginger to taste.'
            ],
            calories: 384,
            macronutrients: {
              protein: '28g',
              carbohydrates: '26g',
              fat: '19g',
              sugars: '3g'
            },
            tags: [
              'lunch', 'quick and easy', 'seafood'
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
              '1 1/4 cups (measured) fine almond flour',
              '3/4 cup arrowroot flour/powder (substitute: tapioca flour, cassava flour)',
              '1/3 cup dark chocolate (cacao) powder',
              '2 teaspoons baking powder',
              '1 can (13.5oz) full fat coconut milk',
              '3 tablespoons maple syrup',
              '1 tablespoon apple cider vinegar',
              '1/4 cup crushed walnut pieces (optional)',
              '1/4 cup (~14g) vegan dark chocolate chips (sweetened with Stevia – I used Lily’s brand)',
            ],
            instructions: [
              'Heat up your waffle iron.',
              'In a bowl, mix together all of the dry ingredients using a fork, making sure to “sift” out clumps of flour.',
              'Then add the wet ingredients to the dry ingredients and stir and fold everything together.  Once it is well mixed, let the batter rest for 5 – 10 minutes without stirring.  It should be slightly thicker than pancake batter but still be somewhat runny. NOTE: If your batter is too thick, simply add tablespoons of coconut milk (or almond milk) until you reach the desired consistency.  If your batter is too runny and thin, simply add tablespoons of almond flour until it thickens to desired consistency.',
              'Spray the waffle iron with cooking spray once it’s hot, then pour in the batter.  Cook for about 5  – 7 minutes.',
              'The outside will be slightly crispy and flaky like a brownie, but the inside will be moist, chocolatey and gooey.',
              'Honestly, you can enjoy these with syrup but it’s not needed.  I’d recommend eating these with fresh fruit.',
            ],
            calories: 354,
            macronutrients: {
              protein: '9g',
              carbohydrates: '45g',
              fat: '18g',
              sugars: '11g'
            },
            tags: [
              'sweet', 'vegan', 'quick and easy'
            ],
            servings: 4,
            totalTime: '12 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Easy Gluten-Free Almond Crust Pizza',
            image: 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/almond-crust-pizza-1.jpg',
            ingredients: [
              '1 1/2 cups almond flour (measured)',
              '3/4 cup grated parmesan',
              '1 teaspoon onion powder',
              '2 teaspoons dried oregano (or your favorite herb)',
              'pinch of salt',
              '1 tablespoon garlic, minced',
              '2 eggs',
              '3 tablespoon olive oil (or avocado oil)',
              '1/3 cup almond flour for dusting the counter',
              '1 cup shredded mozzarella',
              '1 tomato, sliced'
            ],
            instructions: [
              'Set oven to 400F (or 420F if you prefer higher temperatures).',
              'Mix together the dry ingredients in a large bowl.',
              'In a smaller bowl, beat together the wet ingredients.  Add the wet ingredients into the dry ingredients and stir and fold everything together. If the batter is too wet, simply add teaspoons of almond flour until it thickens.',
              'Pro-tip: Let the batter rest for a few minutes in the fridge.  Add a few tablespoons of almond flour to a clean countertop.  Kneed the dough, folding and re-folding, adding tablespoons of almond flour until the dough is no longer sticky.',
              'Add the dough to a baking tray lined with parchment paper.  Carefully spread out the dough in the form of a circle or rectangle (or your desired shape).',
              'Bake in the oven for 6 to 8 minutes until the edges of the pizza are lightly browned.  Be careful of over-baking – the longer you bake it, the crispier it will be upon cooling.  Remove the pizza from the oven.',
              'Add the cheese and the tomato slices.  Bake in the oven for 3 to 5 minutes, or until the cheese has melted and lightly browned.  Remove from the oven.',
              'Garnish and enjoy!'
            ],
            calories: 372,
            macronutrients: {
              protein: '19g',
              carbohydrates: '8g',
              fat: '32g',
              sugars: '2g'
            },
            tags: [
              'gluten-free', 'low carbs'
            ],
            servings: 6,
            totalTime: '20 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Mediterranean Greek Chopped Salad (Wrap)',
            image: 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/IMG_0574-3.jpg',
            ingredients: [
              '1 10-inch whole wheat wrap',
              '5oz chicken breast, cooked',
              '1/8 cup goat cheese crumble',
              '3 Romaine leaves',
              '2/3 cup Boston (or butter) lettuce',
              '1/3 cup fresh parsley',
              '1/4 cup fresh basil',
              '1/3 cup chopped red onion',
              '1/3 cup cucumber',
              '5 cherry tomatoes (cut in halves)',
              '5 (or 15g) Kalamata olives, pitted (optional)',
              'Lemon vinaigrette for 3 servings: Juice from 1 large lemon, 2 tablespoons extra virgin olive oil, 1/2 dried oregano, 1 teaspoon minced garlic, 1 1/2 teaspoon Bragg Apple Cider vinegar',
              'pinch of sea salt'
            ],
            instructions: [
              'In a bowl, mix together the ingredients for the lemon vinaigrette and season to taste with sea salt & pepper.',
              'Place all the salad ingredients on a large cutting sheet, and using the longest and sharpest knife you have, begin to chop up the salad to desired thickness.',
              'Once the salad is chopped, add it to a mixing bowl then add 1 serving of lemon vinaigrette. Mix the salad together with a spatula, then place some of the contents on whole wheat tortilla. Fold in the sides and tightly roll up the wrap.',
              'Enjoy any leftover chopped salad by itself.',
            ],
            calories: 445,
            macronutrients: {
              protein: '50g',
              carbohydrates: '18g',
              fat: '17g',
              sugars: '6g'
            },
            tags: [
              'salad', 'sandwiches'
            ],
            servings: 1,
            totalTime: ' 20 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Red Chicken Curry Tacos, Salad & Peanut Sauce',
            image: 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/red-curry-chicken-tacos-salad-7.jpg',
            ingredients: [
              '1 1/2 lb chicken thighs (with fat trimmed)',
              '4 tablespoons red curry paste',
              'spray olive oil',
              '2 Roma tomatoes, diced',
              '1 medium cucumber, diced',
              'juice from 1 lime',
              '1/3 cup fresh cilantro, finely chopped',
              'sea salt to taste',
              '8 low-carb wheat tortillas',
              '4 servings (8 tablespoons) peanut sauce: 4 tablespoons raw peanut butter, 2/3 cup lite coconut milk, 3 tablespoons low sodium soy sauce, 1 tablespoon fresh garlic, minced, juice from 1 lime',
              'fresh chopped cilantro',
              'fresh chopped mint'
            ],
            instructions: [
              'Trim visible large pieces of fat from the chicken thighs.  Place in a large bowl along with the red curry paste.  Mix together, ensuring each piece is covered.  Cover with plastic wrap and marinate in the fridge for at least 1 hour.',
              'While it marinates, prep the salad. Mix together the ingredients in a large bowl and season to taste.',
              'Place a nonstick skillet on medium high heat.  Once hot, spray with olive oil (or avocado oil), add the chicken.  Cook on each side for 5 to 7 minutes, cooking all the way through.',
              'Once finished, remove from heat and garnish with cilantro (and fresh mint if desired).',
              'Make the tacos.  Dice up the chicken and evenly divide 1 serving among 2 small tortillas.  Top each a tablespoon or 2 of the tomato-cucumber salad.  ',
              'For the peanut sauce - Place all  the ingredients in a bowl and whisk until smooth.  If you would like a thinner sauce, simply add tablespoons of water (and/or fresh lime) until you reach your desired consistency. Add this on top of the tacos'
            ],
            calories: 378,
            macronutrients: {
              protein: '43g',
              carbohydrates: '35g',
              fat: '14g',
              sugars: '3g'
            },
            tags: [
              'chicken', 'salad'
            ],
            servings: 10,
            totalTime: ' 1 hour 8 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Cauliflower Rice Paella with Shrimp',
            image: 'https://images.cookforyourlife.org/wp-content/uploads/2019/09/shutterstock_1254726028-Cauliflower-Rice-paella-with-Shrimp.jpg',
            ingredients: [
              '3 tablespoons olive oil, divided',
              '1 cup chopped onion',
              '2 cups chopped fresh tomatoes',
              '1 cup chopped red pepper',
              '2 cup finely chopped kale',
              '1 pinch saffron (See Ann’s Tips)',
              '1 tablespoon sweet smoked paprika',
              '4 cups cauliflower rice',
              '1 pound shrimp, peeled and deveined',
              '¼ cup chopped parsley',
              'Salt and pepper to taste',
            ],
            instructions: [
              'Preheat oven to 300 F degrees.',
              'In a large oven-proof sauté pan over medium heat add 2 tablespoons olive oil. Add onions, tomatoes, peppers and kale. Season with salt and pepper and sauté for about 15 minutes, until the vegetables are soft. Add saffron and smoked paprika and stir to combine.',
              'Add cauliflower rice and about ¼ cup water. Season with salt and pepper and cook for 15 minutes, until cauliflower is tender.',
              'Smooth the top of the cauliflower and vegetables into an even layer. Place the shrimp on top of the rice and drizzle with remaining olive oil.',
              'Transfer pan to oven and cook for about 10 minutes, or until the shrimp are pink and fully cooked. Garnish with the parsley and serve.',
            ],
            calories: 251,
            macronutrients: {
              protein: '20g',
              carbohydrates: '18g',
              fat: '12g',
              sugars: '8g'
            },
            tags: [
              'gluten-free', 'high protein', 'low calories'
            ],
            servings: 4,
            totalTime: '50 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Cauliflower, Corn and Zucchini Fritters',
            image: 'https://www.cookforyourlife.org/wp-content/uploads/2018/08/Cauliflower-Corn-and-Zucchini-Fritters-1068x787.jpg',
            ingredients: [
              '1 cup cauliflower rice',
              '1 cup shredded zucchini',
              '1 cup mashed chickpeas',
              '1 cup frozen corn, thawed',
              '2 eggs',
              '1 cup almond meal',
              '¼ cup chopped parsley',
              '1 teaspoon salt',
              '½ teaspoon pepper',
              '1 teaspoon ground turmeric',
              '1 teaspoon ground cumin',
              '2 tablespoons olive oil',
              '2 tablespoons sriracha sauce (pesto can be substituted)',
              '¾ cup plain Greek yogurt',
            ],
            instructions: [
              'In a large bowl, combine cauliflower rice, zucchini, chickpeas, corn, eggs, almond meal, parsley, salt, pepper, turmeric and cumin.',
              'Heat a non-stick sauté pan with olive oil. Using a 2-tablespoon scoop, portion fritters into pan, cooking on both sides for about 3 minutes, or until golden brown.',
              'Meanwhile, in a small bowl, whisk together sriracha and yogurt. Serve with fritters.',
            ],
            calories: 708,
            macronutrients: {
              protein: '28g',
              carbohydrates: '87g',
              fat: '30g',
              sugars: '10g'
            },
            tags: [
              'vegetarian', 'gluten-free', 'quick and easy'
            ],
            servings: 4,
            totalTime: '40 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Risotto with Vegetables',
            image: 'https://www.cookforyourlife.org/wp-content/uploads/2018/08/Risotto-with-Vegetables-1068x709.jpg',
            ingredients: [
              '2 ½ cups chicken or vegetable stock',
              '2 shallots divided',
              '2 teaspoons olive oil',
              '1 1/3 cups Arborio rice',
              '2 teaspoons olive oil',
              '1/3 cup dry white wine',
              '1 tbsp butter divided',
              '2 med carrots in a small dice',
              '4 small zucchini, seeds removed cut in a small dice',
              '1/4 cup frozen peas',
              '1/4 cup freshly grated Parmesan',
              '1 tsp grated lemon zest',
              'sea salt',
            ],
            instructions: [
              'In a small pot, bring the stock to a boil over a high flame. Cover and turn the heat off. Set aside.',
              'Meanwhile in a pressure cooker, over a medium high flame heat the olive oil. When it starts to ripple, add ½ the shallots and sprinkle with salt. Cook stirring until they turn transparent.',
              'Add the rice and cook stirring until it starts to get translucent round the edges. Add the white wine and cook stirring until it is absorbed. Add all the warm stock. Stir to mix. Place the lid on the pressure cooker and lock. Once the pressure comes up, lower the heat to medium and cook 6 minutes.',
              'Once the rice has cooked under pressure for 6 minutes, take it off the stove and immediately run under cold water over the lid to release the pressure. It will give a big sigh when it does this. Turn off the water and open the cooker. You will have a soupy looking risotto with rice that is chewy and barely al dente.',
              'While the rice is cooking, melt 1 teaspoon of the butter in a small sauté pan. When it foams, add the remaining shallots and cook stirring until they are transparent, about 1 minute. Add the carrots and zucchini and sprinkle with salt. Sauté until they start to soften and become tender, about 5 minutes. By this time the rice should be ready.',
              'Take the risotto back to the stove and quickly bring to a simmer over a medium-high flame.  Stir the sautéed carrots and zucchini, then the frozen peas and cook 1 minute. Turn off the heat and vigorously stir in the remaining butter, the Parmesan and the lemon zest. Cover. Let sit for 5 minutes. The risotto will now be creamy looking instead of soupy, and the rice al dente. Taste for salt. Serve with extra grated cheese if desired.',
            ],
            calories: 301,
            macronutrients: {
              protein: '9g',
              carbohydrates: '47g',
              fat: '8g',
              sugars: '6g'
            },
            tags: [
              'vegetarian', 'gluten-free', 'low fat'
            ],
            servings: 6,
            totalTime: '35 minutes',
            isPublic: true,
            user: users[0]
          },


        ])
      })
      .then(recipes => console.log(`${'🍏'.repeat(recipes.length)} created`))
      .then(() => console.log('Goodbye!'))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  })