const mongoose = require('mongoose')
const Recipe = require('./models/recipe')
const User = require('./models/user')
const { dbURI } = require('./config/environment')

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
              'Set oven to 400F.',
              'Place cauliflower in a microwave safe bowl and cook in the microwave – according to instructions given – for 6 to 8 minutes, or until the cauliflower is soft.  Set aside.',
              'Set a large skillet on medium heat.  Once hot, add oil, garlic, onion, mushrooms and celery and sauté for 2 to 3 minutes, then sprinkle in seasoning and cook for an additional 1 minute.',
              'Add the meatless crumbles and chop it up as it cooks in the skillet.  Continue folding the ingredients as they cook for 2 to 3 additional minutes.',
              'Add lentils, tomatoes, frozen peas & carrots and fold everything together.  Then add BBQ sauce and dijon mustard, and finally the veggie broth.  Bring to a light simmer, then reduce the heat to low and cover and cook while you prepare the topping.',
              'In a large bowl add the ingredients for the topping.  Use a potato masher OR an immersion blender to whip together the cauliflower mash.',
              'Remove the cover from the skillet and remove from the heat.  Use a spatula to evenly spread the cauliflower mash on top, then use the back of a fork to spread it out to create a textured top.',
              'Place the shepherd’s pie in the oven to bake for 20 minutes.',
              'After baking let it cool  down for 15 to 20 minutes, then garnish and enjoy!'
            ],
            calories: 330,
            macronutrients: {
              protein: '24g',
              carbohydrates: '34g',
              Fat: '12g',
              sugars: '12g'
            },
            tags: [
              'vegetarian', 'vegan'
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
            instructions: ['Set air-fryer to 350F (or set oven to 400F).', 'Fill the air fryer basket (or a baking tray lined with parchment) with the wonton wrapper slices.  Lightly spray the chips with avocado oil, then air fry (or bake) for 4 to 6 minutes, or until the edges are brown and crispy.',
              'To a large bowl, add the remaining ingredients and gently fold everything together.',
              'Add low sodium soy sauce and ginger to taste.'
            ],
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
              '1 1/4 cups (measured) fine almond flour',
              '3/4 cup arrowroot flour/powder (substitute: tapioca flour, cassava flour)',
              '1/3 cup dark chocolate (cacao) powder',
              '2 teaspoons baking powder',
              '1 can (13.5oz) full fat coconut milk',
              '3 tablespoons maple syrup',
              '1 tablespoon apple cider vinegar',
              '1/4 cup crushed walnut pieces (optional)',
              '1/4 cup (~14g) vegan dark chocolate chips (sweetened with Stevia – I used Lily’s brand)'
            ],
            instructions: [
              'Heat up your waffle iron.',
              'In a bowl, mix together all of the dry ingredients using a fork, making sure to “sift” out clumps of flour.',
              'Then add the wet ingredients to the dry ingredients and stir and fold everything together.  Once it is well mixed, let the batter rest for 5 – 10 minutes without stirring.  It should be slightly thicker than pancake batter but still be somewhat runny. NOTE: If your batter is too thick, simply add tablespoons of coconut milk (or almond milk) until you reach the desired consistency.  If your batter is too runny and thin, simply add tablespoons of almond flour until it thickens to desired consistency.',
              'Spray the waffle iron with cooking spray once it’s hot, then pour in the batter.  Cook for about 5  – 7 minutes.',
              'The outside will be slightly crispy and flaky like a brownie, but the inside will be moist, chocolatey and gooey.',
              'Honestly, you can enjoy these with syrup but it’s not needed.  I’d recommend eating these with fresh fruit.'
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
              'Enjoy any leftover chopped salad by itself.'
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
              'Salt and pepper to taste'
            ],
            instructions: [
              'Preheat oven to 300 F degrees.',
              'In a large oven-proof sauté pan over medium heat add 2 tablespoons olive oil. Add onions, tomatoes, peppers and kale. Season with salt and pepper and sauté for about 15 minutes, until the vegetables are soft. Add saffron and smoked paprika and stir to combine.',
              'Add cauliflower rice and about ¼ cup water. Season with salt and pepper and cook for 15 minutes, until cauliflower is tender.',
              'Smooth the top of the cauliflower and vegetables into an even layer. Place the shrimp on top of the rice and drizzle with remaining olive oil.',
              'Transfer pan to oven and cook for about 10 minutes, or until the shrimp are pink and fully cooked. Garnish with the parsley and serve.'
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
            recipeName: 'Zucchini Fritters',
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
              '¾ cup plain Greek yogurt'
            ],
            instructions: [
              'In a large bowl, combine cauliflower rice, zucchini, chickpeas, corn, eggs, almond meal, parsley, salt, pepper, turmeric and cumin.',
              'Heat a non-stick sauté pan with olive oil. Using a 2-tablespoon scoop, portion fritters into pan, cooking on both sides for about 3 minutes, or until golden brown.',
              'Meanwhile, in a small bowl, whisk together sriracha and yogurt. Serve with fritters.'
            ],
            calories: 384,
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
              'sea salt'
            ],
            instructions: [
              'In a small pot, bring the stock to a boil over a high flame. Cover and turn the heat off. Set aside.',
              'Meanwhile in a pressure cooker, over a medium high flame heat the olive oil. When it starts to ripple, add ½ the shallots and sprinkle with salt. Cook stirring until they turn transparent.',
              'Add the rice and cook stirring until it starts to get translucent round the edges. Add the white wine and cook stirring until it is absorbed. Add all the warm stock. Stir to mix. Place the lid on the pressure cooker and lock. Once the pressure comes up, lower the heat to medium and cook 6 minutes.',
              'Once the rice has cooked under pressure for 6 minutes, take it off the stove and immediately run under cold water over the lid to release the pressure. It will give a big sigh when it does this. Turn off the water and open the cooker. You will have a soupy looking risotto with rice that is chewy and barely al dente.',
              'While the rice is cooking, melt 1 teaspoon of the butter in a small sauté pan. When it foams, add the remaining shallots and cook stirring until they are transparent, about 1 minute. Add the carrots and zucchini and sprinkle with salt. Sauté until they start to soften and become tender, about 5 minutes. By this time the rice should be ready.',
              'Take the risotto back to the stove and quickly bring to a simmer over a medium-high flame.  Stir the sautéed carrots and zucchini, then the frozen peas and cook 1 minute. Turn off the heat and vigorously stir in the remaining butter, the Parmesan and the lemon zest. Cover. Let sit for 5 minutes. The risotto will now be creamy looking instead of soupy, and the rice al dente. Taste for salt. Serve with extra grated cheese if desired.'
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
          {
            recipeName: 'Quinoa Pudding',
            image: 'https://images.cookforyourlife.org/wp-content/uploads/2018/08/Quinoa-Pudding-min-1068x708.jpg',
            ingredients: [
              '1 cup quinoa',
              '1 cup water',
              '3 cups unsweetened almond milk, plus more',
              '2 (3-inch) cinnamon sticks',
              '½ cup golden raisins',
              '1/3 cup honey (vegans See Ann’s Tips)',
              '1 teaspoon vanilla extract',
              '½ tablespoon ground cinnamon',
              '½ cup sliced almonds'
            ],
            instructions: [
              'Place quinoa in a strainer and rinse with water, let it drain for a couple of minutes. Transfer quinoa to a large saucepan and add water, almond milk and cinnamon sticks. Bring to a boil over medium high heat; reduce to a simmer and cook for 30 minutes, stirring frequently to avoid sticking.',
              'Add raisins, honey, vanilla extract and ground cinnamon. Stir to combine and remove from the heat. Let it cool to room temperature or refrigerate. Add more almond milk as need it, if pudding gets too thick.  Serve with sliced almonds.'
            ],
            calories: 266,
            macronutrients: {
              protein: '7g',
              carbohydrates: '48g',
              fat: '7g',
              sugars: '23g'
            },
            tags: [
              'gluten-free', 'sweet', 'vegan', 'breakfast'
            ],
            servings: 6,
            totalTime: '15 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Tahini and Apple Oatmeal',
            image: 'https://images.cookforyourlife.org/wp-content/uploads/2018/08/shutterstock_277720400.jpg',
            ingredients: [
              '2 cups water',
              '1 cup rolled oats',
              'pinch of sea salt',
              '2 medium apples, Gala or Golden Delicious, peeled, cored, and cut into a small dice. (about 2 cups)',
              '½ cup tahini'
            ],
            instructions: [
              'Pour water into a medium pot and bring to a boil.',
              'Once boiling, add oats, salt, and apples and turn heat down to a simmer.',
              'Cook until the oats and apples are soft, about 10 minutes. The oatmeal should be thick and the water should be absorbed.',
              'Remove from the heat. Stir in the tahini and serve immediately.'
            ],
            calories: 301,
            macronutrients: {
              protein: '8g',
              carbohydrates: '32g',
              fat: '18g',
              sugars: '9g'
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
            recipeName: 'Pumpkin Oatmeal',
            image: 'https://images.cookforyourlife.org/wp-content/uploads/2018/08/shutterstock_326159303.jpg',
            ingredients: [
              '½ cup unsweetened pumpkin puree',
              '1½ cups regular, almond milk or soy milk',
              '2 tablespoons raisins',
              '¼ teaspoon pumpkin pie spice (See Ann’s Tips)',
              '¼ teaspoon salt',
              '1 cup rolled oats',
              '¼ cup roughly chopped roasted pecans or walnuts',
              'Maple syrup'
            ],
            instructions: [
              'In a medium saucepan, whisk together the pumpkin puree, milk, raisins, pumpkin pie spice and salt until smooth. Bring to a boil.',
              'Add the oatmeal, then turn down the heat to a simmer and cook, stirring occasionally, until the oats are tender, about 8 minutes.',
              'Serve topped with pecans and a drizzle of maple syrup.'
            ],
            calories: 318,
            macronutrients: {
              protein: '9g',
              carbohydrates: '44g',
              fat: '15g',
              sugars: '9g'
            },
            tags: [
              'breakfast', 'vegan', 'sweet'
            ],
            servings: 2,
            totalTime: '15 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Arugula & Avocado Breakfast Sandwich',
            image: 'https://www.cookforyourlife.org/wp-content/uploads/2018/08/Arugula-and-Avocado-Breakfast-Sandwich-CFYL-1.jpg',
            ingredients: [
              '¼ cup plain yogurt',
              '1 lemon, zested and juiced',
              '2 eggs',
              '4 slices multigrain bread, toasted (Looking for Low Fiber? See Ann’s Tips)',
              '1 cup arugula',
              '1 avocado, peeled, pitted and sliced',
              '1 tablespoon pepitas (optional)'
            ],
            instructions: [
              'In a small bowl, mix together yogurt, lemon juice, and lemon zest. Season with a pinch of salt and pepper.',
              'Heat a greased non-stick pan on medium low heat. Crack and pour eggs into the pan. Cook until whites are set, flip and cook for 1 minute for a runny yolk, 3 minutes for a fully cooked yolk. Turn off the heat and let sit while assembling sandwich.',
              'Place 2 slices of bread on 2 plates. Spread an even layer of the yogurt sauce over the toast. Top with a portion of arugula, avocado and egg, and pepitas if using. Top with other slice of bread. Cut the sandwich down the middle and serve.'
            ],
            calories: 408,
            macronutrients: {
              protein: '17g',
              carbohydrates: '39g',
              fat: '23g',
              sugars: '7g'
            },
            tags: [
              'quick and easy', 'high protein', 'vegetarian'
            ],
            servings: 2,
            totalTime: '15 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Watermelon Feta Salad',
            image: 'https://www.cookforyourlife.org/wp-content/uploads/2018/08/shutterstock_300760616-min.jpg',
            ingredients: [
              '1 medium shallot or ½ small red onion, sliced very thin',
              '½ cup cider vinegar',
              '1 small watermelon, chilled',
              '4 ounces fresh feta cheese or ricotta salata, cut or crumbled into small chunks',
              '1 handful torn mint leaves',
              'Juice of 1 to 2 limes, or to taste',
              '4 cups loosely packed arugula, rinsed'
            ],
            instructions: [
              'In a bowl combine the thinly sliced onion and vinegar. Let sit for at least 30 minutes. Drain.',
              'Meanwhile, cut the melon into 8-12 slices. Cut away the rind and cut the flesh into 1-inch chunks. Put into a large bowl.',
              'Mix the watermelon with half of the lime juice. Add more lime juice to taste. Let sit in the fridge to marinate and chill.',
              'Just before serving, quickly toss together with the cheese and the mint.  Lay arugula down on a serving platter and top with watermelon and cheese mixture, and dot the onions over the top. Serve immediately.'
            ],
            calories: 237,
            macronutrients: {
              protein: '7g',
              carbohydrates: '47g',
              fat: '5g',
              sugars: '37g'
            },
            tags: [
              'low fat', 'lunch', 'vegetarian'
            ],
            servings: 6,
            totalTime: '20 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Coconut Gluten-Free Pancakes with Berry Syrup',
            image: 'https://images.cookforyourlife.org/wp-content/uploads/2018/08/Gluten-Free-Coconut-Pancakes-Blueberry-Sauce-min-e1500923287837.jpg',
            ingredients: [
              '2 cups mixed berries',
              '⅓ cup brown sugar',
              '2 cups gluten free flour blend',
              '2 tablespoons sugar',
              '½ teaspoon baking soda',
              '1 teaspoon baking powder',
              '½ teaspoon salt',
              '2 tablespoons olive oil',
              '3 eggs',
              '1 cup coconut milk',
              '½ cup water',
              '1 cup shredded coconut',
              '2 tablespoons butter'
            ],
            instructions: [
              'In a small pot over medium low heat, combine berries, brown sugar and ¼ cup water. Stir and bring to a simmer. Cook for about 10 minutes or until berries begin to break down.',
              'In a large bowl, combine flour, sugar, baking soda, baking powder and salt.',
              'In a separate medium bowl, whisk together olive oil, eggs, coconut milk, water and shredded coconut. Add to dry ingredients and mix until just combined.',
              'Heat a griddle or non-stick sauté pan over medium heat and add butter. Working in batches, portion batter into pan for desired size pancakes. Cook until bubbles start to form along edge. Once this happens, flip pancakes.',
              'Serve topped with berry syrup.'
            ],
            calories: 739,
            macronutrients: {
              protein: '14g',
              carbohydrates: '84g',
              fat: '44g',
              sugars: '29g'
            },
            tags: [
              'breakfast', 'vegan', 'sweet'
            ],
            servings: 4,
            totalTime: '20 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Kale & Fennel Salad',
            image: 'https://www.cookforyourlife.org/wp-content/uploads/2018/08/Kale-Fennel-Salad-1.jpg',
            ingredients: [
              '1 navel orange',
              '2 tablespoons olive oil',
              '1 tablespoon balsamic',
              'Salt and pepper, to taste',
              '¼ cup slivered almonds, toasted',
              '3 tablespoons dried cherries',
              '4 cups shredded kale leaves',
              '2 cups thinly sliced fennel'
            ],
            instructions: [
              'Cut the top and bottom of the orange off. Set the orange on a cut side, so it does not wobble. Using a sharp knife, rotate and cut around the shape of the orange to remove the pith and peel.',
              'Over a large salad bowl, using a paring knife, cut along each side of the white piths so that each orange segment is cut out cleanly. Let them drop into the salad bowl along with any juice that results.',
              'Add the olive oil and balsamic vinegar to the orange segments and juice. Gently whisk until combined. Add in the almonds, and cherries, plus salt and pepper to taste.',
              'Top with the shredded kale and sliced fennel. Toss and serve.'
            ],
            calories: 111,
            macronutrients: {
              protein: '2g',
              carbohydrates: '12g',
              fat: '7g',
              sugars: '7g'
            },
            tags: [
              'gluten-free', 'lunch', 'vegan'
            ],
            servings: 6,
            totalTime: '20 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Spicy Sausage Pasta with Greens',
            image: 'https://www.cookforyourlife.org/wp-content/uploads/2018/08/Spicy-Sausage-Pasta-With-Greens-696x464.jpg',
            ingredients: [
              'Whole wheat pasta like penne, rigatoni or any other chunky pasta, 2 ounces per person',
              '1 bunch of either Swiss chard, kale, collards, beet greens, broccoli rabe or spinach',
              '3 tablespoons olive oil',
              '1 stalk of rosemary, leaves stripped and chopped or ½ teaspoon dried',
              '2 hot Italian style chicken sausages, squeezed out of their casings (see Ann’s Tips)',
              '1 small dried red chili pepper, deseeded and broken into small pieces',
              '1 small onion, halved and thinly sliced',
              '1 to 2 cloves of garlic, smashed peeled and slice lengthways',
              'Freshly grated Parmesan cheese, to taste (optional)',
              '1 tablespoon chopped fresh Italian parsley',
              'Salt and black pepper, to taste'
            ],
            instructions: [
              'Put water on for the pasta to boil.',
              'Strip the tender parts of leaves from the stalks of the greens. Wash in a sink full of cold water. (See Ann’s Tip)',
              'Heat the oil in a heavy frying pan at medium high heat. Add the rosemary and fry for a minute then add the sausage, breaking it up into small pieces as it cooks. Once browned, add the chili pepper, the onion, and the garlic, and fry until the onion is starting to caramelize.',
              'Once the water is boiling add in the pasta. After 5 minutes, add greens to the pasta water.  Cook for another 4 minutes.',
              'Meanwhile add ½ cup of pasta water to the sausage and onions. Cook until the sauce looks syrupy. Stir in Parmesan to taste and parsley.',
              'Pour pasta and greens into a colander.  Drain well and add to the pan with the sausage mixture.  Turn to mix well and cook for a few seconds over a medium high heat until the pasta and greens are coated in sauce, about 1 minute. Season with salt and pepper. Serve with more grated Parmesan cheese.'
            ],
            calories: 452,
            macronutrients: {
              protein: '17g',
              carbohydrates: '38g',
              fat: '29g',
              sugars: '5g'
            },
            tags: [
              'quick and easy', 'dinner', 'meat'
            ],
            servings: 2,
            totalTime: '20 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Thai-style Savory Coconut Quinoa',
            image: 'https://images.cookforyourlife.org/wp-content/uploads/2018/08/shutterstock_156632234-696x464.jpg',
            ingredients: [
              '2 cups quinoa',
              '1 (14 ounce) can coconut milk',
              '2 cups vegetable stock',
              '2 tablespoons minced scallion, divided',
              '2 tablespoons finely chopped cilantro, divided',
              '1 red bell pepper, finely diced',
              '1 medium carrot, finely diced',
              '¼ cup Sriracha',
              '1 lime, juiced and zested',
              '⅓ cup sesame oil',
              '1 tablespoon brown sugar',
              '1 tablespoon minced garlic',
              '1 tablespoon chopped toasted peanut (optional)',
              'Salt and pepper to taste'
            ],
            instructions: [
              'In a large pot, add quinoa, coconut milk, vegetable stock, 1 tablespoon scallions, 1 tablespoon cilantro, red peppers, and carrots. Season with salt and pepper. Bring to a boil then reduce to a simmer. Cook for about 20 minutes, or until liquid is absorbed and quinoa is soft.',
              'Meanwhile, in a small bowl, whisk together Sriracha, lime juice, sesame oil, brown sugar, and garlic.',
              'Serve quinoa topped with spicy sauce. Garnish with remaining scallions and cilantro, toasted peanuts, and lime zest.'
            ],
            calories: 706,
            macronutrients: {
              protein: '15g',
              carbohydrates: '67g',
              fat: '45g',
              sugars: '5g'
            },
            tags: [
              'gluten-free', 'lunch', 'vegan'
            ],
            servings: 4,
            totalTime: '40 minutes',
            isPublic: true,
            user: users[0]
          },

          {
            recipeName: 'Zucchini Pasta alla Nerano',
            image: 'https://images.cookforyourlife.org/wp-content/uploads/2018/08/zucchini-_pasta_alla_nerano_shutterstock_402629713-696x522.jpg',
            ingredients: [
              '3 to 4 medium zucchini, very thinly sliced',
              '4 tablespoons olive oil, divided',
              'sea salt',
              '3 cloves garlic, thinly sliced',
              '8 ounces organic paccheri, pappardelle, or penne pasta',
              '1/3 cup freshly grated pecorino or Parmesan cheese',
              '12 basil leaves roughly torn'
            ],
            instructions: [
              'Bring a large pan of salted water on to a boil.',
              'Heat 3 tablespoons of the oil in a wide sauté pan over a medium high flame. Add the zucchini slices and sauté until they shrink and get browned at the edges, about 8 minutes. As they caramelize, remove from the pan to drain on paper towels until the pan is empty. Set the pan aside off the flame.',
              'Move the zucchini to a sieve. Plunge the sieve into the boiling pasta water for 1 minute as if to rinse the zucchini. Set the sieve aside to drain on paper towel. Meanwhile tip the pasta into the boiling water and cook 1 minute less than the shortest time on the packet. The pasta should be just al dente and quite chewy. Drain, reserving 1 cup of the water.',
              'Meanwhile add the remaining oil to the zucchini pan over a medium high flame. When hot, add the garlic and cook until it just starts to color, about 1 minute. Add the rinsed zucchini from the sieve and sprinkle with a pinch of sea salt. Add the pecorino, stir to mix then add ¼ cup of the pasta water. Mix well. Cook until the cheese melts, about 3 minutes. Add more water if the zucchini sauce looks dry.',
              'Stir in the basil leaves, cook 1 minute then add the pasta, plus any remaining water if the sauce looks like it needs it. Cook stirring one minute more. Serve immediately with extra grated pecorino cheese.'
            ],
            calories: 371,
            macronutrients: {
              protein: '13g',
              carbohydrates: '42g',
              fat: '18g',
              sugars: '7g'
            },
            tags: [
              'vegetairan', 'dinner', 'high protein'
            ],
            servings: 4,
            totalTime: '30 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Grilled Cheese Caprese',
            image: 'https://images.cookforyourlife.org/wp-content/uploads/2018/08/Grilled-Cheese-Caprese-696x464.jpg',
            ingredients: [
              '4 thin slices of wholewheat sourdough bread',
              '1-2 Tablespoons extra virgin olive oil, divided',
              '4 thin slices of mozzarella cheese cut into strips, divided (see Ann’s Tips)',
              '1 small beefsteak tomato sliced, divided (for neutropenic diet, see Ann’s Tips)',
              '3 fresh basil leaves torn in to small pieces, divided',
              '1 Cup, packed, baby arugula (optional)',
              'sea salt to taste'
            ],
            instructions: [
              'Heat a griddle or non-stick skillet over a medium high flame.',
              'Lay the slices of bread on a board. Brush them on one side with half the olive oil. Transfer the bread, oiled sides down, onto the hot griddle. Lightly brown, about 3 minutes. Remove to the board browned sides up.',
              'Take ½ the mozzarella and evenly cover the toasted sides of 2 slices of the bread. Put half the sliced tomato on top of each and sprinkle with the torn basil leaves. Take the remaining cheese and lay over the tomato. Take the remaining slices of bread and lay them over the filling, toasted sides down and gently press together.',
              'Take half the remaining olive oil and brush the top of each sandwich with it. Carefully turn the assembled sandwiches over and transfer them to the griddle, oiled sides down. Cook, gently pressing down on the sandwich as the cheese melts, about 3-5 minutes. Brush the tops of the sandwiches, about 3-5 minutes more, again gently pressing down on the sandwiches as they cook.',
              'When both sides are golden and the cheese has melted, they’re ready. Serve piping hot. If using the arugula, toss with 1 teaspoon extra virgin olive oil and a pinch of salt and serve on the side.'
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
            recipeName: 'Goat Cheese, Onion, Spinach & Lemon Pizza',
            image: 'https://www.cookforyourlife.org/wp-content/uploads/2018/08/Goat-Cheese-Onion-Spinach-Lemon-Pizza-2-696x464.jpg',
            ingredients: [
              '1 teaspoon olive oil',
              '1 clove garlic, smashed',
              '2 cups packed baby spinach, washed',
              '1 tablespoon panko, or cornmeal',
              '1 whole wheat pizza dough, or refrigerated or frozen pizza crust',
              '½ cup Quick Tomato Sauce',
              '¾ cup goat cheese',
              '½ small onion, halved and thinly sliced',
              '½ cup cherry or grape tomatoes, halved',
              '1 tablespoon olive oil',
              'Salt and pepper, to taste',
              'Zest of half a lemon'

            ],
            instructions: [
              'Preheat the oven to 500 degrees. Put 2 baking trays into the oven, or pizza stone if you have one.',
              'In a medium sauté pan, over medium-high heat, add the 1 teaspoon of olive oil and clove of garlic. Cook until the garlic starts to brown and become fragrant. Remove the garlic and add the baby spinach along with 1 tablespoon of water. Let sit for 1 minute and then stir. Once the spinach has wilted, remove from pan and let drain. Once cool enough, squeeze out excess liquid.',
              'If making personal pizza split the dough into 4 equal balls. Sprinkle panko or cornmeal onto a large sheet of parchment paper. Roll out the dough onto the parchment paper; press out dough into a 12×8-inch rectangle or to fit your pizza stone. Split into two balls if necessary.',
              'Spread the Quick Tomato Sauce evenly onto the dough. Dot the pizza with the goat cheese and top it with the drained spinach, onions, and grape tomatoes, cut sides up. Drizzle with olive oil and sprinkle with a little salt and pepper.',
              'Using the parchment paper, slip the pizza onto the heated baking trays or pizza stone. Bake in the oven on the lowest rack for 10-15 minutes, or until the crust is golden and the cheese looks melted.',
              'Using the parchment paper, slip the pizza onto a cutting board. Sprinkle with the lemon zest and cut into slices.'
            ],
            calories: 307,
            macronutrients: {
              protein: '43g',
              carbohydrates: '9g',
              fat: '37g',
              sugars: '3g'
            },
            tags: [
              'lunch', 'vegetarian', 'quick and easy'
            ],
            servings: 4,
            totalTime: '20 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Chocolate Tahini Bars',
            image: 'https://images.cookforyourlife.org/wp-content/uploads/2018/08/Chocolate-Tahini-Bars-696x465.jpg',
            ingredients: [
              '1 ½ cups graham cracker crumbs',
              '¾ cup confectioners’ sugar',
              '1 cup tahini',
              '¼ cup coconut oil, melted',
              '1 cup dark chocolate chips',
              '1 cup heavy cream'
            ],
            instructions: [
              'Grease a 8”x8” glass baking dish.',
              'In a large bowl, mix together graham cracker crumbs, confectioners’ sugar, tahini, and coconut oil. Pour the mixture into dish and flatten into an even layer.',
              'Place chocolate chips into a large bowl. In a small pot, bring cream to a simmer. Pour the cream over the chocolate and stir the chocolate until melted and smooth. Pour the chocolate over the tahini mixture and spread into an even layer.',
              'Cover with plastic wrap and place in the refrigerator for about 45 minutes, until the chocolate is set.',
              'Cut into 12 squares and serve.'
            ],
            calories: 364,
            macronutrients: {
              protein: '5g',
              carbohydrates: '22g',
              fat: '30g',
              sugars: '12g'
            },
            tags: [
              'sweet', 'vegan', 'dessert'
            ],
            servings: 12,
            totalTime: '60 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Dark Chocolate Brownies',
            image: 'https://images.cookforyourlife.org/wp-content/uploads/2018/08/shutterstock_298491788-696x464.jpg',
            ingredients: [
              '½ cup (1 stick) butter, melted',
              '⅔ cup brown sugar',
              '⅓ cup sugar',
              '¾ cup unsweetened 100% cocoa powder',
              '¼ teaspoon salt',
              '1 teaspoon vanilla extract',
              '2 large eggs plus 1 egg yolk',
              '½ cup low-fat or whole plain Greek yogurt',
              '⅓ cup plus 2 tablespoons whole wheat pastry flour',
              '½ cup semisweet chocolate chips (optional)'
            ],
            instructions: [
              'Preheat the oven to 300 degrees. Line the bottom and sides of 8 x 8 baking pan with parchment paper. Do this by cutting 2 equal size pieces and overlapping them, allowing some overhang. Set aside.',
              'In a large bowl, mix together the melted butter, sugar, vanilla, and cocoa together with a wooden spoon or rubber spatula. Add the eggs and the yolk one at a time, stirring vigorously after each one. The batter should be thick and shiny. Stir in the yogurt, until well blended. Add the flour and mix well until completely absorbed. Stir in chocolate chips if using.',
              'Evenly spread the batter into the prepared baking pan, the batter will be very thick. Bake for 30-35 minutes or until a toothpick comes out with pieces of the batter on it, but not raw. Do not over cook, or your brownie will be dry. It should not cook longer than 35 minutes. Remove from the oven and immediately use the overhang to lift the brownie out of the baking pan and onto a cutting board. Allow to cool slightly, then cut into 16 square pieces. Enjoy!'
            ],
            calories: 131,
            macronutrients: {
              protein: '3g',
              carbohydrates: '15g',
              fat: '8g',
              sugars: '11g'
            },
            tags: [
              'low-calories', 'sweet', 'quick and easy'
            ],
            servings: 16,
            totalTime: '20 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Salad Nicoise with Grilled Tuna',
            image: 'https://www.cookforyourlife.org/wp-content/uploads/2018/08/Salad-Ni%C3%A7oise-with-Grilled-Tuna-696x464.jpg',
            ingredients: [
              '2 tablespoons extra virgin olive oil',
              '1 tablespoon chopped flat leaf parsley',
              '2 scallions, finely chopped, divided',
              '2 sushi grade yellow fin tuna steaks (See Ann’s Tips)',
              '6 Hard-Boiled Eggs, peeled and cut in half',
              '1½ pounds small Yukon Gold or Red Bliss potatoes',
              '¾ pound French green beans, topped and tailed',
              '½ cup oil cured olives',
              '1 pound cherry tomatoes, halved',
              '½ cup torn basil leaves',
              '1 medium large head of Romaine lettuce, washed and torn ( On a neutropenic diet?  See Ann’s Tips)',
              '1 tin anchovy fillets (optional)',
              'Sea salt, to taste'
            ],
            instructions: [
              'Put the olive oil into a shallow dish large enough to hold the tuna. Mix in the parsley and half of the scallions. Rub the herb oil mixture all over the tuna to coat. Cover with plastic wrap and leave in the fridge to marinate until ready to cook.',
              'Bring 1-inch of water and a generous pinch of salt to a boil in a large pot. Boil the potatoes just until tender, then throw in the green beans. Cook for 2 minutes or until they are just tender. Drain the green beans and the potatoes and cool under cold running water to stop the cooking. Set aside.',
              'Heat up a cast iron skillet. Cook the tuna for 5 minutes on the first side and 3 minutes on the other. The fish should be pink in the center but not rare.  Set the fish aside on a plate.',
              'Rub the skins off the potatoes and cut them into quarters. Place them in a large bowl along with the green beans, olives, tomatoes, basil, and remaining chopped scallion. Prepare the Mustard Vinaigrette, and pour the full recipe over them and toss together.',
              'Line large plate with the romaine lettuce, and in the center top with the potato mixture.',
              'Cut the tuna steaks into ¼-inch slices and arrange around the potato mixture on the plate. Arrange the hard-boiled eggs around the edge of the platter and curl an anchovy fillet, if using, on each egg. Serve.'
            ],
            calories: 366,
            macronutrients: {
              protein: '25g',
              carbohydrates: '34g',
              fat: '16g',
              sugars: '7g'
            },
            tags: [
              'gluten-free', 'seafood', 'high protein'
            ],
            servings: 6,
            totalTime: '30 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'One Pot Mediterranean Lamb Pasta',
            image: 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/one-pot-lamb-pasta-1.jpg',
            ingredients: [
              'spray olive oil',
              '2 bell peppers, chopped into chunks',
              '1 teaspoon olive oil',
              '1 cup diced onions',
              '1 1/2 tablespoon garlic, minced',
              '1lb lean ground lamb (OR turkey, chicken, lean beef, veggie ground)',
              '2 teaspoons dried oregano',
              '2 teaspoons dried thyme',
              '1/3 cup kalamata olives',
              '28oz crushed tomatoes (I used fire roasted)',
              '8oz uncooked wheat Regenetti',
              '2 1/2 cups low sodium chicken broth (or beef or veggie broth)',
              '3 bay leaves',
              '1 bundle (3 cups) fresh spinach',
              'sea salt & pepper to taste'
            ],
            instructions: [
              'Set skillet on HIGH heat.  Once hot, lightly spray with oil, then add bell pepper chunks.  Allow them to sear for 1 -2 minutes without stirring in order to blister, then begin to move them around in the skillet so they do not burn.  After about 3 minutes, place them in a bowl.',
              'Allow the skillet to cool down to medium-high heat.  Then add oil, garlic and onions.  Cook for 2 minutes to caramelize (brown) the onion.',
              'Add the ground lamb and continue chopping and cooking in the skillet, about 3 – 5 minutes.  As the lamb cooks, sprinkle in oregano and thyme, and continue chopping and stirring the ingredients together.',
              'Reduce the heat to low-medium and then, one by one, add the remaining ingredients EXCEPT the spinach.  Carefully fold everything together and bring the pot to a simmer.  Do NOT increase the heat too much, just be patient.  Once it’s simmering with everything in there, cover and cook for 10 to 12 minutes, or the majority of the liquid has been absorbed and the pasta is to your liking.',
              'Remove the skillet from the heat, then fold in the spinach and allow it to wilt.',
              'Season to taste with sea salt & pepper, garnish and enjoy!  You can also enjoy this meal with a small, fresh garden salad.'
            ],
            calories: 507,
            macronutrients: {
              protein: '26g',
              carbohydrates: '52g',
              fat: '23g',
              sugars: '11g'
            },
            tags: [
              'meat', 'dinner', 'high protein'
            ],
            servings: 5,
            totalTime: '25 minutes',
            isPublic: true,
            user: users[0]
          },

          {
            recipeName: 'Ratatouille Style Veggie Spaghetti',
            image: 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Ratatouille-veggie-Spaghetti-9.jpg',
            ingredients: [
              '1 tablespoon olive oil (avocado oil)',
              '1 tablespoon garlic, minced',
              '2/3 cup diced onion',
              '1 lb 90% lean ground beef (or your choice of protein or veggie ground)',
              '1 1/2 tablespoons The Fit Cook Land Seasoning (OR Italian Seasoning)',
              '2 teaspoons ground fennel (OR sage OR crushed rosemary OR your favorite Italian herb)',
              '1 can (15oz) no salt added diced tomatoes',
              '1 can (15oz) no salt added tomato sauce',
              '1 cup water',
              'spray olive oil',
              '1 tablespoon avocado oil',
              '1 large carrot (or 2 medium carrots)',
              '1 large red bell pepper',
              '2 yellow squash',
              '2 zucchini',
              '8 thick asparagus spears, cut into strips',
              '1 cup water'
            ],
            instructions: [
              'Set a pot on medium heat.  Once hot, add oil, garlic and onion.  Cook for 2 to 3 minutes until the onions are sauteed – brown and slightly translucent.',
              'Add the ground meat and chop it up as it cooks. Sprinkle in the seasoning as it cooks.',
              'Add diced tomatoes and tomato sauce from the cans.  Add water to the tomato sauce can, swish it around, then pour that into the pot as well.  Add a few pinches of sea salt and pepper and stir.  Reduce the heat to low, then cover and cook for 15 minutes.',
              'While the meat cooks, prep the veggies.  Use a Julienne peeler, or a sharp knife, to cut the veggies into thin noodles or strips.  Use a sharp knife to cut thick asparagus spears into thinner spears.',
              'Set a large skillet on medium high heat, once hot add spray with oil and add bell pepper and asparagus.  Stir, then add 1/2 cup of water to create steam.  Cover and cook for 2 to 3 minutes, until the bell peppers and asparagus is softer.  Remove the top and allow the steam and water to evaporate, careful to ensure nothing is burning.',
              'Add the olive oil to the skillet, then the remaining veggies.  Use tongs to continuously fold everything together.  Add the remaining water, pinch of sea salt & pepper,  and cover and cook for about 2 minutes, until wilted and soft (NOT slimy).  Remove from the heat.',
              'Serve the meat sauce over the noodles.  Garnish and enjoy!'
            ],
            calories: 392,
            macronutrients: {
              protein: '30g',
              carbohydrates: '27g',
              fat: '19g',
              sugars: '16g'
            },
            tags: [
              'high protein', 'meat', 'dinner'
            ],
            servings: 4,
            totalTime: '25 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Chopped Chicken Salad Wrap For Leftover Chicken',
            image: 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/thumbnail_Chopped-Chicken-Salad-Wrap-for-Leftover.jpg',
            ingredients: [
              '1 medium whole wheat tortilla',
              '5oz cooked chicken breast (chopped)',
              '1 cup raw spinach',
              '5 cherry tomatoes (cut in halves)',
              '2 tablespoons raw walnut pieces',
              '2 tablespoons dried cranberries',
              '1/8 cup goat cheese crumble',
              '2 tablespoons of your favorite vinaigrette dressing'
            ],
            instructions: [
              'Place all the ingredients (except for the dressing) onto a cutting board or sheet. Using the largest and sharpest knife you have, begin to chop up the ingredients.  As you chop, continuously mix the salad together using the knife, folding the ingredients into one another. This will help the pieces become smaller as you chop.',
              'When the salad is finely chopped, add the salad dressing and mix it into the salad.',
              'Place the salad on a whole-wheat tortilla. Fold in the sides of the tortilla and use your hands to “cup” the salad and pack it in tightly.  Roll it over.',
              'PRO-TIP: place the tortilla in the microwave for 10-15 seconds prior to adding the salad. This will help make it easier to roll.',
              'Slice it open and enjoy!'
            ],
            calories: 529,
            macronutrients: {
              protein: '55g',
              carbohydrates: '52g',
              fat: '14g',
              sugars: '22g'
            },
            tags: [
              'quick and easy', 'meat', 'high protein'
            ],
            servings: 1,
            totalTime: '15 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Spicy Asian Peanut Turkey Salad',
            image: 'https://lh4.googleusercontent.com/proxy/vnQ9h5UpM-0vMUsR6QQNLqFvEsAkIX7TFJAM3IkYko4jse6pNz2Q_BhUkV2VlpBPGsArSFpgbkjej-X89vBFHU1TWjpjlFUdC2QESmYgjA85jDYwy10VL8jH7ZZ6pZP9Z1JsUIEVilDB42uA0d9YrEKdHQ',
            ingredients: [
              '10 1/2 oz  (~310g) chopped turkey breast meat, no skin',
              '10z (~290g) broccoli slaw (mix of carrots, cabbage, Bok Choy)',
              '1/2 red bell pepper, chopped',
              '5 tablespoons natural peanut butter with oil',
              '4oz 2% Greek yogurt',
              '1 1/2 tablespoons rice vinegar OR apple cider vinegar',
              '1 tablespoon minced garlic',
              'juice from 1/2 lime (or more/less to taste)',
              '2 tablespoons sriracha (or more/less to taste)',
              '1 tablespoon soy sauce (or more/less to taste)',
              '1/3 cup chopped peanuts (optional)'
            ],
            instructions: [
              'Mix together the ingredients for the sauce in a small bowl.  I recommend adding the lite soy sauce last so you can season it “just right” for your tastebuds.  Remember, if you’re using leftover turkey from Thanksgiving, you may get some of the flavor from that too so be careful about over seasoning. Adjust the level of lime, sriracha and soy sauce to your liking.  Set aside.',
              'In a large bowl, toss the turkey, broccoli slaw and bell pepper together.  Add the creamy sauce and mix it up using a spatula.  Toss in chopped peanuts, and fold in freshly chopped cilantro and green onions if desired.',
              'Stuff in a whole wheat pita OR enjoy over a bed of chopped lettuce for a low-carbohydrate meal.'
            ],
            calories: 278,
            macronutrients: {
              protein: '29g',
              carbohydrates: '10g',
              fat: '14g',
              sugars: '5g'
            },
            tags: [
              'lunch', 'meat', 'low calories'
            ],
            servings: 5,
            totalTime: '10 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Healthy Chicken Pho',
            image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4609266.jpg',
            ingredients: [
              '6 cups no salt added chicken broth (or you can use 7 cups broth with 2 cups water for added flavor)',
              '3 cups water (or 2 cups water with 7 cups broth for added flavor)',
              '~1 lb skinless chicken breast',
              '4oz brown rice noodles',
              '2 tbsp garlic paste',
              '2/3 cup chopped onion',
              'sea salt to taste',
              '1 cinnamon stick',
              '4-5 green cardamom pods/seeds (for extra flavor, break these open)',
              '4 cloves',
              '1.5 tsp fennel seeds',
              '1/2 tbsp lemongrass',
              '1 star anise (recommended if you can find it)'
            ],
            instructions: [
              'Cut a cheesecloth into a square.  Add seasonings to the cheesecloth and then tie a knot around the cheesecloth to secure the seasonings.',
              'Slice yellow onion into thin pieces.',
              'Spray a pot with coconut oil and set on medium high heat. Toss in onion and garlic paste. Sauté until the onions brown and become translucent.',
              'Pour chicken broth and water into the pot and allow it to boil. Reduce heat so that it simmers and add the cheesecloth pouch with the seasonings.  Cover and cook for at least 30 minutes.  Add sea salt to taste.',
              'Boil water in a separate pot and toss in chicken breast.  Cook for about about 6 to 8 minutes until the chicken has completely cooked, be careful not to overcook.  Remove from the water and set aside.  Once the chicken has somewhat cooled, pull the chicken apart into pieces.',
              'In another pot, boil water and cook the brown rice noodles according to the instructions.  Careful not to overcook so they do not turn to mush. Drain the noodles and set aside.',
              'Add your portion of noodles and chicken to a bowl.  Pour in the chicken broth, then add the garnish and don’t forget the lime!',
              'Enjoy!'
            ],
            calories: 339,
            macronutrients: {
              protein: '47g',
              carbohydrates: '31g',
              fat: '2g',
              sugars: '0g'
            },
            tags: [
              'high protein', 'low sugar', 'quick and easy'
            ],
            servings: 3,
            totalTime: '20 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Vegan mac n cheese',
            image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/08/vegan-mac-n-cheese.jpg?itok=hwaTy-3H',
            ingredients: [
              '160g raw cashews',
              '200g carrots, peeled and cut into 1cm cubes',
              '700g potatoes, peeled and cut into 1cm cubes',
              '90ml olive oil',
              '40g nutritional yeast',
              '1 lemon, juice only',
              '4 garlic cloves, peeled and roughly chopped',
              '1 tbsp Dijon mustard',
              '1 tbsp white wine vinegar',
              '1 tsp cayenne pepper',
              '400g macaroni',
              '3 tbsp panko breadcrumbs'
            ],
            instructions: [
              'The night before, soak the cashew nuts in water and leave overnight.',
              'Heat the oven to 180C/160C fan/gas 4. Steam the carrots and potatoes together for 5 mins, until completely softened. Transfer to a food processor. Drain the cashews and add these with 60ml of the oil, then blitz to break down the nuts. Tip in the other ingredients – apart from the macaroni, breadcrumbs and the remaining oil – then blitz again until the mixture is smooth and season well. Add a splash of water and just a drizzle of olive oil if it looks too stiff, then set aside.',
              'Cook the macaroni in a large pan of salted water for 1 min less than packet instructions, drain then stir through the sauce. Transfer the mix to an ovenproof dish, stir the breadcrumbs with the remaining oil and some seasoning. Scatter over the top of the macaroni and bake for 20-25 mins until piping hot and crisp.'
            ],
            calories: 686,
            macronutrients: {
              protein: '20g',
              carbohydrates: '80g',
              fat: '30g',
              sugars: '6g'
            },
            tags: [
              'low sugar', 'vegan', 'dairy-free'
            ],
            servings: 6,
            totalTime: '35 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Vegan chilli',
            image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/07/vegan-chilli.jpg?itok=llhQ6gn2',
            ingredients: [
              '3 tbsp olive oil',
              '2 sweet potatoes, peeled and cut into medium chunks',
              '2 tsp smoked paprika',
              '2 tsp ground cumin',
              '1 onion, chopped',
              '2 carrots, peeled and chopped',
              '2 celery sticks, chopped',
              '2 garlic cloves, crushed',
              '1-2 tsp chilli powder (depending on how hot you like it)',
              '1 tsp dried oregano',
              '1 tbsp tomato purée',
              '1 red pepper, cut into chunks',
              '2 x 400g cans chopped tomatoes',
              '400g can black beans, drained',
              '400g can kidney beans, drained',
              'lime wedges, guacamole, coriander and rice to serve'
            ],
            instructions: [
              'Heat oven to 200C/180C fan/gas 6. Put the sweet potato chunks in a roasting tin and drizzle over 1½ tbsp oil, 1 tsp smoked paprika and 1 tsp ground cumin. Give everything a good mix so that all the chunks are coated in spices, season with salt and pepper then roast for 25 mins until cooked.',
              'Meanwhile, heat the remaining oil in a large saucepan over a medium heat. Add the onion, carrot and celery. Cook for 8-10 mins, stirring occasionally until soft then crush in the garlic and cook for 1 min more. Add the remaining dried spices and tomato puree. Give everything a good mix and cook for 1 min more.',
              'Add the red pepper, chopped tomatoes and 200ml of water. Bring the chilli to a boil then simmer for 20 mins. Tip in the beans and cook for another 10 mins before adding the sweet potato. Season to taste then serve with lime wedges, guac, rice and coriander. Make ahead and freeze for up to 3 months.'
            ],
            calories: 367,
            macronutrients: {
              protein: '12g',
              carbohydrates: '48g',
              fat: '10g',
              sugars: '22g'
            },
            tags: [
              'low fat', 'vegan', 'gluten-free', 'dairy-free'
            ],
            servings: 4,
            totalTime: '60  minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Chicken satay salad',
            image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/chicken-satay-salad.jpg?itok=AxyLnTOs',
            ingredients: [
              '1 tbsp tamari',
              '1 tsp medium curry powder',
              '¼ tsp ground cumin',
              '1 garlic clove, finely grated',
              '1 tsp clear honey',
              '2 skinless chicken breast fillets (or use turkey breast)',
              '1 tbsp crunchy peanut butter (choose a sugar-free version with no palm oil, if possible)',
              '1 tbsp sweet chilli sauce',
              '1 tbsp lime juice ',
              'a little sunflower oil',
              '2 Little Gem lettuces hearts, cut into wedges',
              '¼ cucumber, halved and sliced',
              '1 banana shallot, halved and thinly sliced',
              'generous handful coriander, chopped',
              'seeds from ½ pomegranate'
            ],
            instructions: [
              'Pour the tamari into a large dish and stir in the curry powder, cumin, garlic and honey. Mix well. Slice the chicken breasts in half horizontally to make 4 fillets in total, then add to the marinade and mix well to coat. Set aside in the fridge for at least 1 hr, or overnight, to allow the flavours to penetrate the chicken.',
              'Meanwhile, mix the peanut butter with the chilli sauce, lime juice, and 1 tbsp water to make a spoonable sauce. When ready to cook the chicken, wipe a large non-stick frying pan with a little oil. Add the chicken and cook, covered with a lid, for 5-6 mins on a medium heat, turning the fillets over for the last min, until cooked but still moist. Set aside, covered, to rest for a few mins.',
              'While the chicken rests, toss the lettuce wedges with the cucumber, shallot, coriander and pomegranate, and pile onto plates. Spoon over a little sauce. Slice the chicken, pile on top of the salad and spoon over the remaining sauce. Eat while the chicken is still warm.'
            ],
            calories: 353,
            macronutrients: {
              protein: '38g',
              carbohydrates: '24g',
              fat: '10g',
              sugars: '21g'
            },
            tags: [
              'high protein', 'low fat', 'meat', 'quick and easy'
            ],
            servings: 2,
            totalTime: '20 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Pork & aubergine noodle stir-fry',
            image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2020/03/pork-aubergine-noodle-stir-fry.jpg?itok=CmRLJqTD',
            ingredients: [
              '½ tbsp groundnut oil',
              '100g lean pork mince',
              '1 aubergine, cut into small cubes',
              '2 nests medium egg noodles (about 100g)',
              '1 tbsp low-salt soy sauce',
              '3 tbsp rice vinegar',
              '½ tbsp cornflour',
              'large piece of ginger, peeled and ½ grated, ½ cut into matchsticks',
              '3 garlic cloves, crushed',
              '½ -1 red chilli, finely chopped',
              'bunch of spring onions, finely sliced',
              '2 pak choi, leaves separated or sliced'
            ],
            instructions: [
              'Heat the oil in a wok or high-sided frying pan and fry the mince for 5-8 mins, until brown and starting to crisp at the edges. Add the aubergine and stir-fry for another 15 mins until soft and translucent.',
              'Meanwhile, cook the noodles following pack instructions, then drain. Mix the soy sauce, vinegar, cornflour and 2 tbsp water together in a small bowl and set aside.',
              'Add the grated ginger and ginger matchsticks, the garlic and chilli to the mince and stir-fry for a minute before adding the spring onion and pak choi. Stir-fry for another few minutes before adding the sauce. Bring to a bubble and cook until the sauce has thickened slightly and coats the aubergine. Scoop half the stir-fry into a bowl and leave to cool for your leftover pork & aubergine lettuce cups. (See tip, below.)  ',
              'Toss the drained noodles with the remaining stir-fry in the wok until the noodles are coated in the sauce. Divide between warmed bowls.'
            ],
            calories: 229,
            macronutrients: {
              protein: '12g',
              carbohydrates: '34g',
              fat: '4g',
              sugars: '8g'
            },
            tags: [
              'low-calories', 'low fat', 'meat', 'low sugar'
            ],
            servings: 4,
            totalTime: '45 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Artichoke & aubergine rice',
            image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/06/artichoke-aubergine-rice-recipe-image.jpg?itok=StPhbfud',
            ingredients: [
              '60ml olive oil',
              '2 aubergines, cut into chunks',
              '1 large onion, finely chopped',
              '2 garlic cloves, crushed',
              'small pack parsley, leaves picked, stalks finely chopped',
              '2 tsp smoked paprika',
              '2 tsp turmeric',
              '400g paella rice',
              '1½ l Kallo vegetable stock',
              '2 x 175g packs chargrilled artichokes',
              '2 lemons',
              '1 juiced, 1 cut into wedges to serve'
            ],
            instructions: [
              'Heat 2 tbsp of the oil in a large non-stick frying pan or paella pan. Fry the aubergines until nicely coloured on all sides (add another tbsp of oil if the aubergine begins catching too much), then remove and set aside. Add another tbsp of oil to the pan and lightly fry the onion for 2-3 mins or until softened. Add the garlic and parsley stalks, cook for a few mins more, then stir in the spices and rice until everything is well coated. Heat for 2 mins, add half the stock and cook, uncovered, over a medium heat for 20 mins, stirring occasionally to prevent it from sticking.',
              'Nestle the aubergine and artichokes into the mixture, pour over the rest of the stock and cook for 20 mins more or until the rice is cooked through. Chop the parsley leaves, stir through with the lemon juice and season well. Bring the whole pan to the table and spoon into bowls, with the lemon wedges on the side.'
            ],
            calories: 431,
            macronutrients: {
              protein: '8g',
              carbohydrates: '58g',
              fat: '16g',
              sugars: '9g'
            },
            tags: [
              'vegan', 'dinner', 'low sugar'
            ],
            servings: 6,
            totalTime: '60 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Courgetti bolognese',
            image: 'https://be35832fa5168a30acd6-5c7e0f2623ae37b4a933167fe83d71b5.ssl.cf3.rackcdn.com/5011/quorn-courgetti-bolognese__square.jpg',
            ingredients: [
              '2 tbsp olive oil',
              '500g turkey mince (thigh or breast)',
              '1 large onion, finely chopped',
              '1 garlic clove, crushed',
              '2 large carrots, peeled and diced',
              '150g pack button mushrooms, roughly chopped',
              '1 tbsp tomato purée',
              '2 x 400g cans chopped tomatoes',
              '2 chicken stock cubes',
              '1 tbsp soy sauce',
              '4 large courgettes',
              'grated pecorino or parmesan to serve',
              'handful basil leaves'
            ],
            instructions: [
              'Heat 1 tbsp of the olive oil in a large saucepan and add the turkey mince. Fry until browned, then scoop into a bowl and set aside.',
              'Add the onion to the pan and cook on a low heat for 8-10 mins until tender. Then add the garlic, stirring for 1 min or so, followed by the carrot and the mushrooms, stirring for about 3 mins, until softened. Tip the turkey mince back into the pan, add the tomato purée, give everything a quick stir and tip in the chopped tomatoes. Fill 1 can with water and pour into the pan. Crumble over the chicken stock cubes and bring to the boil. Once boiling, lower the heat and simmer for about 1 hr, until the sauce has thickened and the veg is tender.',
              'When the bolognese is nearly ready, stir through the soy sauce and some seasoning. Spiralize your courgettes on the large noodle attachment. Heat a large frying pan with the remaining 1 tbsp olive oil and add your courgetti. Cook until slightly softened, for 2-3 mins. Season with salt and serve topped with the turkey bolognese, grated pecorino and basil leaves.'
            ],
            calories: 326,
            macronutrients: {
              protein: '39g',
              carbohydrates: '20g',
              fat: '8g',
              sugars: '17g'
            },
            tags: [
              'low fat', 'dinner', 'meat'
            ],
            servings: 4,
            totalTime: '60 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Healthy porridge bowl',
            image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2020/01/healthy-porridge.jpg?itok=Ct8S7lFm',
            ingredients: [
              '100g frozen raspberries',
              '1 orange, ½ sliced and ½ juiced',
              '150g porridge oats',
              '100ml milk',
              '½ banana, sliced',
              '2 tbsp smooth almond butter',
              '1 tbsp goji berries',
              '1 tbsp chia seeds'
            ],
            instructions: [
              'Tip half the raspberries and all of the orange juice in a pan. Simmer until the raspberries soften, about 5 mins.',
              'Meanwhile stir the oats, milk and 450ml water in a pan over a low heat until creamy. Top with the raspberry compote, remaining raspberries, orange slices, banana, almond butter, goji berries and chia seeds.'
            ],
            calories: 533,
            macronutrients: {
              protein: '17g',
              carbohydrates: '66g',
              fat: '19g',
              sugars: '14g'
            },
            tags: [
              'breakfast', 'sweet', 'quick and easy', 'vegetarian'
            ],
            servings: 2,
            totalTime: '15 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Broccoli & Almond Soup',
            image: 'https://images.cookforyourlife.org/wp-content/uploads/2018/08/shutterstock_264108827-min1.jpg',
            ingredients: [
              '½ cup whole blanched almonds',
              '1 tablespoon olive oil',
              '½ of a medium leek, white and green parts only, halved lengthwise and sliced',
              '½ pound Yukon Gold potato (about 2 medium), peeled and cubed',
              '1 tablespoon chopped fresh thyme, plus more for garnish',
              '1 clove garlic, minced',
              '4 cups stock or water',
              '4 loose cups broccoli florets (about ½ a medium head), stems included – peeled and cubed',
              'Salt and fresh ground pepper, to taste',
              '½ cup freshly grated Parmesan, plus more garnish'
            ],
            instructions: [
              'Toast the almonds in a skillet until they make popping noises or their skin has darkened and fragrant.  Remove from heat immediately and pour into a bowl.  Set aside.',
              'Heat olive oil in a saucepan over medium heat. Add leeks, potatoes and thyme.  Cook until the leeks have softened. Add garlic and cook for 3 minutes.',
              'Add stock or water and bring to a boil. Turn the heat back down to medium. Simmer until the potatoes are tender. Remove 1 cup of stock and puree with almonds. Set aside.',
              'Add broccoli and salt and cook for 3 minutes or until the broccoli is bright green. In batches in a blender, or with a hand blender, puree the soup. Return to the saucepan, and stir in the almond puree, Parmesan, and black pepper. Heat through.',
              'Serve with fresh thyme, black pepper, and some Parmesan cheese.'
            ],
            calories: 298,
            macronutrients: {
              protein: '14g',
              carbohydrates: '28g',
              fat: '16g',
              sugars: '6g'
            },
            tags: [
              'low sugar', 'lunch', 'salty', 'quick and easy'
            ],
            servings: 4,
            totalTime: '20 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'French Onion Soup',
            image: 'https://www.cookforyourlife.org/wp-content/uploads/2018/08/French-Onion-Soup-CFYL.jpg',
            ingredients: [
              '3 tablespoons olive oil',
              '3 large onions, peeled and sliced',
              '2 garlic cloves, chopped',
              '2 tablespoons thyme, chopped',
              '1 teaspoon sugar',
              '1 tablespoon Worcestershire sauce',
              '2 quarts good quality low sodium chicken stock (see Ann’s Tips)',
              'Salt and pepper to taste',
              '2 slices whole wheat bread, toasted',
              '4 slices Swiss cheese'
            ],
            instructions: [
              'Heat olive oil in a 4quart pot over a medium high flame. Add onion, garlic, and thyme to the pot and season with sugar and salt. Stir to mix. Cook stirring from time to time until the onions are translucent, about 5 -7 minutes.',
              'Add the Worcestershire sauce and stock and bring to a simmer. Lower the flame to medium low. Cook for about 15 minutes or until the onions are soft and the stock has reduced somewhat. Season with salt and pepper',
              'Portion soup in four small ovenproof crock bowls. Top each with ½ a slice of toasted bread and one slice of cheese. Place the crocks on a baking tray and bake under a broiler or in a very hot oven for a few minutes or until the cheese is melted and golden brown. Serve immediately.'
            ],
            calories: 376,
            macronutrients: {
              protein: '21g',
              carbohydrates: '29g',
              fat: '22g',
              sugars: '8g'
            },
            tags: [
              'low sugar', 'salty', 'lunch', 'quick and easy'
            ],
            servings: 4,
            totalTime: '20 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Vegetable Quinoa Bake ',
            image: 'https://t.aimg.sk/magaziny/ZOub2QD4RCnBGn_kc0vIiw.1280~Zapekan-brokolica-s-vajcom-a-str-hankou.jpg?t=L2ZpdC1pbi84ODB4NDAwL2ZpbHRlcnM6d2F0ZXJtYXJrKG1hZ2F6aW55L21hcmtfcmVjZXB0eV8xLnBuZywtMTAsLTEwLDUwKQ%3D%3D&h=hSDQ1c8DylBEe-1_U9ea-A&e=2145916800&v=1',
            ingredients: [
              '2 cloves garlic',
              '2 tablespoons pumpkin seeds',
              '2 cups arugula, packed',
              '1/3 cup olive oil, plus 1 tablespoon olive oil, divided',
              '5 cups chopped assorted vegetables of your choosing (mushrooms, cauliflower, onion, broccoli etc.)',
              '3 cups quinoa, cooked according to package directions',
              '1 ½ cups shaved Parmesan cheese, divided'
            ],
            instructions: [
              'Preheat the oven to 375 degrees. Line a baking sheet with parchment paper.',
              'In a blender, combine garlic and pumpkin seeds. Blend until fully chopped. Add arugula and blend until fully chopped.  Slowly drizzle in oil until smooth and a thick paste forms.',
              'In a large bowl, mix vegetables with half of arugula mixture and 1 tablespoon oil. Arrange on parchment-lined baking sheet and roast until soft and lightly browned, about 25 minutes.',
              'In a large bowl, combine remaining pesto, vegetables, quinoa, and 1 cup of cheese.',
              'Pour mixture into a 9×9 baking dish. Top with remaining cheese.',
              'Bake until cheese is melted and lightly browned on top, about 20 minutes.'
            ],
            calories: 537,
            macronutrients: {
              protein: '22g',
              carbohydrates: '61g',
              fat: '24g',
              sugars: '2g'
            },
            tags: [
              'low sugar', 'vegan', 'dinner', 'gluten-free', 'dairy-free'
            ],
            servings: 8,
            totalTime: '50 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Ahi Tuna Tacos',
            image: 'https://fitfoodiefinds.com/wp-content/uploads/2020/03/tacos2sq.jpg',
            ingredients: [
              '4 medium avocados, ripe',
              '2 tablespoons fresh cilantro, diced',
              '2 tablespoons fresh lime juice(divided)',
              '1 / 2 teaspoon salt(or more, to taste)',
              '1 cup fresh mango, cubed',
              '680g ahi tuna steaks(2x 1.5inch steaks)',
              '1 / 3 cup soy sauce',
              '1 teaspoon red chili sauce',
              '1 teaspoon fresh grated ginger',
              '4 tablespoons sesame seeds',
              '4 tablespoons olive oil',
              '1/4 cup chopped cilantro',
              '1/4 cup minced red onion',
              '8–12 street taco flour tortillas'
            ],
            instructions: [
              'First, peel mango and then cut into small cubes. Set aside.',
              'Next, remove the flesh and pit from the avocados and place into the bowl. Using a fork, mash until they’ve reached desired consistency.',
              'Add in diced cilantro, lime juice, salt, and cubed mango to the avocado. Stir until mixed completely.',
              'Give the guacamole a taste and add more salt as needed. We actually used around 1/2 teaspoon of salt, but there is nothing worse than over-salting. So, start with 1/4 teaspoon and go from there.',
              'Serve mango guacamole with tortilla chips or as a side to accompany any of your favorite dishes.',
              'First, place tuna steaks in a large bowl or a plastic bag.',
              'Make ahi tuna marinade and add soy sauce, chili sauce, grated ginger, and lime juice to a small mason jar. Tighten cover and then shake the jar until all ingredients are combined. Pour mixture over the ahi tuna steaks.',
              'Seal the plastic bag and place the steaks in the fridge and let marinate for at least 30 minutes (the longer the better!).',
              'Remove ahi tuna steaks from the refrigerator and then remove from the marinade. Pour sesame seeds on a plate and coat every part of both tuna steak with sesame seeds.',
              'Heat a large skillet over medium/high heat and 2 tablespoons of olive oil. When the olive oil is fragrant, add one tuna steak to the pan and sear for 30 seconds to 2 minutes on each side.',
              'Repeat for the second tuna steak.',
              'Let seared tuna steaks rest for 2 minutes and then thinly slice.',
              'When ahi tuna steak is cooked, carefully cut the ahi tuna into thin strips.',
              'Prepare the tacos by equally distributing tuna, cilantro, and red onion into tortillas. Then, top with 1-2 tablespoons of mango guacamole.'
            ],
            calories: 396,
            macronutrients: {
              protein: '34g',
              carbohydrates: '29g',
              fat: '17g',
              sugars: '3g'
            },
            tags: [
              'seafood', 'low carbs', 'low fat', 'low sugar', 'lunch', 'dinner', 'dairy-free', 'low calories'
            ],
            servings: 4,
            totalTime: '55 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Healthy Sweet Potato Skins',
            image: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fpinchofyum.com%2Fwp-content%2Fuploads%2Fsweet-potato-skins-recipe-1.jpg',
            ingredients: [
              '2 medium or large sweet potatoes',
              '1 1/2 tablespoons butter',
              '1 shallot, minced',
              '1 bag fresh baby spinach',
              '1/4 cup light sour cream or Greek yogurt',
              '2 ounces light cream cheese',
              '1 cup chickpeas',
              '1/4 cup shredded Mozzarella cheese',
              'salt and pepper to taste'
            ],
            instructions: [
              'Bake sweet potatoes at 350 for 45-60 minutes, or until fork tender.',
              'Cut sweet potatoes in half and let cool for 5-10 minutes. While sweet potatoes are cooling, saute the shallots with the butter over medium heat until translucent. Add fresh spinach and heat for 2-3 minutes, until spinach has cooked down. Set aside.',
              'Scrape the sweet potato out of the peel, leaving a thin layer inside with the skin so that it can stand up on its own. Mash the sweet potato with the cream cheese and sour cream. Stir in chickpeas, spinach, and plenty of salt and pepper.',
              'Coat potato skins with a drizzle of oil and bake for about 5 minutes to get a crispier outside. Remove from oven and fill each skin with the sweet potato mixture and top with shredded mozzarella cheese. Bake again for 10-15 minutes, or until cheese is melted and filling is heated through.'
            ],
            calories: 282,
            macronutrients: {
              protein: '11.2g',
              carbohydrates: '37.2g',
              fat: '10.7g',
              sugars: '4.7g'
            },
            tags: [
              'gluten-free', 'low fat', 'low sugar', 'lunch', 'dinner', 'vegetarian', 'low calories', 'low carb', 'salty'
            ],
            servings: 2,
            totalTime: '60 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Lamb Chops & Spicy-Sweet Potato & Dried Cranberry Waffle',
            image: 'https://www.phoenixmag.com/wp-content/uploads/2014/01/PHM0114_BR3a.jpg',
            ingredients: [
              '5oz Lamb chops (fat trimmed) or your choice of protein',
              '175g sweet potato (grated)',
              '2 egg whites',
              '1-2 tbsp dried Cranberry',
              'Cinnamon',
              'Red pepper'
            ],
            instructions: [
              'In a bowl, grate about 150g-200g of a raw sweet potato. You do NOT have to peel.',
              'Add 2 egg whites to the grated sweet potato and mix using a fork.  Add cinnamon & red pepper to taste (optional). Mix.  Add cranberries.',
              'Spray coconut oil or olive oil on your waffle iron or skillet.  Set on medium or medium-high heat.',
              'Pour the potato mixture into the waffle iron and cook until the ends of the waffle are cooked (about 8-10 minutes).',
              'Lamb chops seasoned with turmeric, cumin, garlic, red pepper, and onion powder.  Cooked in a skillet.'
            ],
            calories: 475,
            macronutrients: {
              protein: '50g',
              carbohydrates: '40g',
              fat: '11g',
              sugars: '27g'
            },
            tags: [
              'gluten-free', 'dinner', 'quick and easy', 'high protein', 'dairy-free', 'low carbs', 'low fat', 'low calories', 'meat', 'salty'
            ],
            servings: 1,
            totalTime: '10 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Ratatouille Style Veggie Spaghetti',
            image: 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Ratatouille-veggie-Spaghetti-7-1024x683.jpg',
            ingredients: [
              '1 tablespoon olive oil (avocado oil)',
              '1 tablespoon garlic, minced',
              '2/3 cup diced onion',
              '1 lb 90% lean ground beef (or your choice of protein or veggie ground)',
              '1 1/2 tablespoons The Fit Cook Land Seasoning (OR Italian Seasoning)',
              '2 teaspoons ground fennel (OR sage OR crushed rosemary OR your favorite Italian herb)',
              '1 can (15oz) no salt added diced tomatoes',
              '1 can (15oz) no salt added tomato sauce',
              '1 cup water',
              'spray olive oil',
              '1 tablespoon avocado oil',
              '1 large carrot (or 2 medium carrots)',
              '1 large red bell pepper',
              '2 yellow squash',
              '2 zucchini',
              '8 thick asparagus spears, cut into strips',
              '1 cup water',
              'fresh parsley',
              'feta crumble (account for the macros and calories)'
            ],
            instructions: [
              'Set a pot on medium heat. Once hot, add oil, garlic and onion. Cook for 2 to 3 minutes until the onions are sauteed – brown and slightly translucent.',
              'Add the ground meat and chop it up as it cooks. Sprinkle in the seasoning as it cooks.',
              'Add diced tomatoes and tomato sauce from the cans. Add water to the tomato sauce can, swish it around, then pour that into the pot as well. Add a few pinches of sea salt and pepper and stir. Reduce the heat to low, then cover and cook for 15 minutes.',
              'While the meat cooks, prep the veggies. Use a Julienne peeler, or a sharp knife, to cut the veggies into thin noodles or strips. Use a sharp knife to cut thick asparagus spears into thinner spears.',
              'Set a large skillet on medium high heat, once hot add spray with oil and add bell pepper and asparagus. Stir, then add 1/2 cup of water to create steam. Cover and cook for 2 to 3 minutes, until the bell peppers and asparagus is softer. Remove the top and allow the steam and water to evaporate, careful to ensure nothing is burning.',
              'Add the olive oil to the skillet, then the remaining veggies. Use tongs to continuously fold everything together. Add the remaining water, pinch of sea salt & pepper, and cover and cook for about 2 minutes, until wilted and soft (NOT slimy). Remove from the heat.',
              'Serve the meat sauce over the noodles. Garnish and enjoy!'
            ],
            calories: 392,
            macronutrients: {
              protein: '30g',
              carbohydrates: '27g',
              fat: '19g',
              sugars: '16g'
            },
            tags: [
              'gluten-free', 'dairy-free', 'low carbs', 'dinner', 'quick and easy', 'high protein', 'meat'
            ],
            servings: 4,
            totalTime: '25 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Gaspari ISOFusion Peanut Butter Coffee & Chocolate Protein',
            image: 'https://realhousemoms.com/wp-content/uploads/Banana-Bread-Smoothie-Bowl-IG.jpg',
            ingredients: [
              '1 scoop Gaspari ISOFusion protein powder',
              '1 tbsp Nescafe instant coffee',
              '1 tbsp dark chocolate powder',
              '1 cup Fage 0% nonfat Greek yogurt',
              '2tbsp Just Great Stuff Powdered Peanut Butter',
              '1/3 cup Gluten-free Purely Elizabeth Blueberry Hemp Ancient Granola Cereal',
              'Fresh blueberries, chocolate chips'
            ],
            instructions: [
              'Add granola to a jar, glass cup or bowl.',
              'Add 1/3 cup yogurt on top of the granola.',
              'Mix 1/3 cup yogurt with peanut butter.  Add to the jar.',
              'Mix 1/3 cup yogurt with protein powder, coffee, dark chocolate powder.  Add to the jar.',
              'Top with granola, 1 tbsp chocolate chips and blueberries.'
            ],
            calories: 435,
            macronutrients: {
              protein: '55g',
              carbohydrates: '34g',
              fat: '9g',
              sugars: '13.5g'
            },
            tags: [
              'gluten-free', 'low fat', 'high protein', 'quick and easy', 'breakfast', 'vegetarian', 'sweet'
            ],
            servings: 1,
            totalTime: '5 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Healthy Breakfast Hash',
            image: 'https://73f0e1518e903443913e6712-triedandtastycom.netdna-ssl.com/wp-content/uploads/2016/03/sweet-potato-sausage-breakfast-hash-square-1.jpg',
            ingredients: [
              '1 tablespoon olive oil',
              '125g raw butternut squash, chunks',
              '6oz medium zucchini, chunks',
              '149g (red) bell pepper, diced',
              '1 smoked chicken sausage, chopped',
              '2 whole eggs',
              '1 small avocado (~146g)',
              'sea salt & pepper to taste',
              'cilantro',
              'green onion'
            ],
            instructions: [
              'Set a skillet on medium heat and add oil and butternut squash. Cook the squash for about 8 minutes or until the outside of the squash is brown and the chunks can easily be pierced with a fork.',
              'Add zucchini and cook for an additional 2 to 3 minutes. Then toss in bell pepper and chopped chicken sausage. Cook everything together for about 5 minutes.',
              'Make two holes in the skillet and crack 2 eggs into the holes. Cook until the clear part of the egg turns white, about 2 to 3 minutes.',
              'Either plate the food or eat it directly out of the skillet (like a boss). Enjoy the meal with fresh avocado to boost the fat content and make the meal creamy so it’s easier to eat.',
              'Season to taste with sea salt & pepper and garnish with cilantro and green onion.'
            ],
            calories: 802,
            macronutrients: {
              protein: '42g',
              carbohydrates: '43g',
              fat: '52g',
              sugars: '14g'
            },
            tags: [
              'gluten-free', 'dairy-free', 'quick and easy', 'low sugar', 'breakfast', 'meat', 'salty'
            ],
            servings: 1,
            totalTime: '10 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Mango, Coconut, Banana & Walnut Baked Protein Oatmeal',
            image: 'https://tastespace.files.wordpress.com/2012/02/dsc_5522.jpg',
            ingredients: [
              '3/4 scoop Dymatize Fusion7 Whey',
              '1/2 cup instant oatmeal',
              'half banana',
              '1/3 cup mango',
              '1 egg',
              '1tsp baking powder',
              '1/3 cup Almond Milk (unsweetened)',
              '1/3 cup Greek Yogurt',
              '1/8 cup walnuts',
              '1/8 cup shredded coconut',
              '1 packet Stevia'
            ],
            instructions: [
              'Set oven to 210 degrees Celsius.',
              'Mix ingredients into a large bowl.',
              'Pour into a small ramekin or muffin cups.',
              'Bake in oven for 15 to 18 minutes (until done).'
            ],
            calories: 130,
            macronutrients: {
              protein: '32g',
              carbohydrates: '70g',
              fat: '23g',
              sugars: '11g'
            },
            tags: [
              'quick and easy', 'low calories', 'low sugar', 'breakfast', 'lunch', 'vegetarian', 'sweet'
            ],
            servings: 1,
            totalTime: '20 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Instant Pot Vegan Nachos',
            image: 'https://sweetsimplevegan.com/wp-content/uploads/2018/04/Classic_Vegan_Nachos_Homemade_Queso_Sweet_Simple_Vegan7-copy.jpg',
            ingredients: [
              '1 large (~340g) russet potato, peeled and chopped into large chunks',
              '1 large carrot (~75g)',
              '1 garlic clove',
              '1 cup low sodium vegetable broth',
              '1 red bell pepper',
              '5oz unsweetened almond milk (OR coconut milk, oat milk or hemp milk)',
              '1 teaspoon onion powder',
              '1 teaspoon turmeric',
              '1/2 cup nutritional yeast',
              '1 tablespoon arrowroot starch + 1 tablespoon water',
              '1 can (10oz/283g) Rotel tomatoes (OR diced tomatoes with green chiles)'
            ],
            instructions: [
              'Set oven to 210 degrees Celcius.',
              'Place a bell pepper on a baking sheet lined with parchment paper.  Roast for 12-15 minutes, or until the outside begins to blister.  Once finished, remove the skin and inside seeds, then chop into pieces and set aside.',
              'In a pressure cooker or Instant Pot, add the potato, carrot, garlic and veggie broth.  Cook for 7 minutes on HIGH, then release the pressure.',
              'Add in the remaining ingredients – EXCEPT the canned tomatoes – and the chopped bell pepper flesh.  Use an immersion blender, OR transfer everything to a high powered blender or food processor.  Blend until super smooth and silky like melted cheese.  Add tablespoons of plant milk if needed to thin it out.',
              'Once you reach your desired consistency, stir in the canned tomatoes.',
              'You can eat the queso with corn chips or your favorite fresh, raw veggies like celery, bell peppers and broccoli.  Alternatively, you load up a baking tray with chips, then add the toppings like beans, onion, jalapeno and guacamole!',
              'Bonus: Garnish IDEAS over chips (not included in macro count): 1/3 cup black beans (drained), 1/2 cup chopped green onion, 1/4 cup red onion, sliced, 2/3 cup guacamole, jalapeno (red or green)'
            ],
            calories: 150,
            macronutrients: {
              protein: '9g',
              carbohydrates: '27g',
              fat: '1g',
              sugars: '7g'
            },
            tags: [
              'dairy-free', 'quick and easy', 'low fat', 'low carbs', 'low sugar', 'low calories', 'vegetarian', 'vegan', 'salty'
            ],
            servings: 5,
            totalTime: '15 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Bacon, Jalapeño & Garlic Green Beans',
            image: 'https://thewanderlustkitchen.com/wp-content/uploads/2019/08/Bacon-and-Brown-Sugar-Arkansas-Green-Beans-4.jpg',
            ingredients: [
              '3 cups raw green beans',
              '3 slices bacon',
              '1 jalapeno',
              '2 tablespoons minced garlic',
              'fresh lemon juice (to taste)'
            ],
            instructions: [
              'Slice open a jalapeno, remove the seeds then chop it into pieces.',
              'Set a nonstick skillet on medium high heat and add bacon.',
              'Cook bacon in the skillet until it is nice and crispy. Reduce the heat in the skillet, then add garlic and jalapeno.  Cook for about 1 minute, but be careful not to let the garlic burn.',
              'Then add green beans and cook for about 3 to 5 minutes, or until the green beans are soft, yet still have some crunch.',
              'Season with a little sea salt, pepper and lemon. Stir it up, then finally, toss in the cooked bacon.'
            ],
            calories: 66,
            macronutrients: {
              protein: '5g',
              carbohydrates: '8g',
              fat: '2g',
              sugars: '2g'
            },
            tags: [
              'gluten-free', 'dairy-free', 'quick and easy', 'low carbs', 'low fat', 'low sugar', 'low calories', 'lunch', 'dinner', 'meat', 'salty', 'spicy'
            ],
            servings: 2,
            totalTime: '20 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Eggs, Turkey, Spinach & Roasted Potatoes',
            image: 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/breakfast101.jpeg',
            ingredients: [
              '2 eggs',
              '2 slices turkey bacon (nitrite free, natural, uncured)',
              '75g chopped sweet potato',
              '75g chopped (red or purple) fingerling potato',
              '1 cup spinach',
              '8oz glass skim milk',
              'Spice Cave Wind seasoning (recommended)',
              'sea salt',
              'pepper'
            ],
            instructions: [
              'Set oven to 210 degrees Celcius.',
              'Chop sweet potato and red potato into pieces, then place them on a nonstick baking sheet or parchment paper. Spray the potatoes with olive oil and then add a few pinches of sea salt & pepper. If desired, add in freshly chopped herbs such as rosemary and sage, or you can use Spice Cave Wind seasoning. Rub the potatoes in the seasonings and bake in the oven for about 20 minutes.',
              'Spray a skillet with olive oil and set it on medium high heat.',
              'Toss in turkey bacon and cook for about 3 to 4 minutes on each side, until the edges become crispy. For crispier bacon, spray the turkey with olive oil while it cooks in the skillet.',
              'Once the bacon is nearly finished cooking, add eggs and then add spinach.  Cook eggs sunny-side up or according to your preferences.  Cook the spinach until it begins to wilt and soften which should take about 2 minutes.',
              'Add the eggs, bacon and spinach to a plate and measure out your serving of roasted potatoes.',
              'Season to taste with sea salt and pepper.'
            ],
            calories: 458,
            macronutrients: {
              protein: '38g',
              carbohydrates: '43g',
              fat: '13g',
              sugars: '8g'
            },
            tags: [
              'gluten-free','low fat', 'low sugar', 'breakfast', 'lunch', 'meat', 'salty'
            ],
            servings: 1,
            totalTime: '35 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Low Carb Zucchini Latke Waffles',
            image: 'https://mylifecookbook.com/wp-content/uploads/2015/06/zucchini-waffles-last.jpg',
            ingredients: [
              '4 raw medium (745g) zucchini',
              '2 eggs (lightly beaten)',
              '1 egg white  (lightly beaten with eggs)',
              '1/2 cup (63g) + 1 tablespoon (22g) fine almond flour',
              '3/4 cup (60g) grated parmesan',
              '1 teaspoon garlic powder',
              '1 teaspoon red pepper (or to taste)'
            ],
            instructions: [
              'Warm up the waffle iron.',
              'Grate zucchini into a large bowl, then wrap the grated zucchini in cheesecloth or a strong, thin (paper) towel.  Squeeze out all the water and moisture.  This is important – this helps them cakes stay together when cooked in the waffle iron.',
              'Add the zucchini to a bowl along with the remaining ingredients.  Fold everything together and ensure it is well mixed.  If the batter is “too watery) simply add single tablespoons of almond flour and parmesan until it thickens more, and keep in mind that the macronutrients and calories will change.',
              'Spray the waffle iron with olive oil, then evenly divide the batter on the waffle maker.  Cook for 7 to 9 minutes or until the outside edges are crispy, the outside is golden brown and the inside is no longer mushy.',
              'Allow the waffles to slightly cool ON the waffle iron – make sure it is off – before removing so be careful it does not burn.',
              'Enjoy with your favorite foods in place of bread or with toppings such as Greek yogurt and pico de gallo.'
            ],
            calories: 262,
            macronutrients: {
              protein: '17g',
              carbohydrates: '6g',
              fat: '19g',
              sugars: '2g'
            },
            tags: [
              'vegetarian', 'low carbs'
            ],
            servings: 2,
            totalTime: '18 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Air Fried Chicken Avocado Egg Rolls',
            image: 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/avocado-chicken-egg-rolls-air-fried-2.jpg',
            ingredients: [
              '12oz cooked white, skinless chicken meat (from Rotisserie chicken or leftover chicken breasts), chopped',
              '2 ripe medium avocados',
              '2 teaspoons cumin',
              '1/2 cup diced red onion',
              '1/3 cup cilantro, finely chopped and packed',
              'pinch of sea salt & pepper',
              'juice from 1 lime',
              '1 egg, beaten',
              '10 egg roll wrappers (TIP: these are usually found in produce section of the grocery store, or with plant-based products like tofu)'
            ],
            instructions: [
              'Set air fryer (or oven) to 420F.',
              'Add  all the ingredients to a bowl and mix well together.',
              'In a small bowl, beat an egg.',
              'Add 2 – 2.5 tablespoons of the stuffing to the edge/corner of an egg roll wrapper.   Use your finger or a paintbrush to draw a line around the inside edges of the wrapper.  Then roll it over to seal the side with  the stuffing, then fold in the sides and continue rolling up like an egg roll.  Place it in the air fryer basket or a baking sheet lined with parchment.  Repeat 9 more times, or until all the stuffing is used up.',
              'Brush the outside of the egg rolls with the remaining egg mix, then gently spray the outside of them with avocado oil (or another high smoke point oil).',
              'Air fry for 10 – 12 minutes at 420F, flipping halfway through.',
              'Enjoy fresh out of the air-fryer or oven – these are DEF best served hot!'
            ],
            calories: 336,
            macronutrients: {
              protein: '25g',
              carbohydrates: '35g',
              fat: '12g',
              sugars: '3g'
            },
            tags: [
              'meat'
            ],
            servings: 5,
            totalTime: '25 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Quick Refried Black Bean Quesadillas',
            image: 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/refried-black-bean-quesadillas-7.jpg',
            ingredients: [
              'spray avocado oil',
              '1 green bell pepper, sliced',
              '1 red bell pepper, sliced',
              'juice from 1 lime',
              'Beans',
              '1 tablespoon avocado oil (or olive oil)',
              '1 tablespoon garlic, minced',
              '1/2 cup diced onion',
              '1 teaspoon smoked paprika',
              '2 teaspoons cumin',
              '1 1/2 cans (638g) no salt added black beans, drained (1 can = 425g, 1/2 can = 213g)',
              '1 cup water (or more as needed)',
              'sea salt to taste',
              '4 low carbohydrate wheat tortillas',
              '1 1/2 cups Mexican cheese blend'
            ],
            instructions: [
              'Set a nonstick skillet on HIGH heat.  Once hot, spray with a little avocado oil then add the sliced peppers.  Allow them to rest in the skillet without stirring for about 2 minutes , or until you smell and see the peppers begin to sear.  Then immediately begin stirring the bell peppers in the skillet.  Squeeze in fresh lime as they sear to help with the softening.  Remove from the skillet.',
              'Place the skillet back on the heat and reduce it to a medium.  Once the skillet has cooled down, add the oil, garlic and onions.  Caramelize the onions with the garlic for about 2 -3  minutes, or until the onions have turned brown and translucent.',
              'Then add just 1 can of black beans – SAVE the remaining portion – and stir it up.  Add in the seasonings and  then begin to MASH the black beans using  the spatula.  Continue stirring and mashing until all of the black beans have been mashed up to create a fragrant black bean  paste.  Reduce the heat in the skillet if needed.',
              'Then SLOWLY  pour in a few tablespoons of the water, then continue stirring.  Continue this as needed until you create a smooth black bean paste.',
              'Add the remaining black beans and fold them into the paste.  Season to taste with sea salt & pepper, and garnish with fresh cilantro.',
              'Build the quesadilla.  To one side of a whole wheat tortilla, add a small amount of cheese, then the refried black beans, then some peppers, then a bit for cheese.  Fold it close.  Repeat.',
              'Set a nonstick skillet on medium-high heat, and once hot, spray it with avocado oil.Add the quesadilla and cook for about 3 minutes on each side, or until one side becomes golden brown with crispy edges.  Flip and cook on the other side.',
              'Enjoy with fresh guacamole!'
            ],
            calories: 386,
            macronutrients: {
              protein: '24g',
              carbohydrates: '45g',
              fat: '17g',
              sugars: '4g'
            },
            tags: [
              'vegetarian'
            ],
            servings: 4,
            totalTime: '35 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Creamy Keto Mediterranean Chicken & Tomato',
            image: 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/creamy-med-chicken-tomato-3.jpg',
            ingredients: [
              '1 tablespoon olive oil',
              '1 1/2 lb chicken thighs, fat trimmed',
              'pinch of sea salt & pepper',
              '1/2 tablespoon olive oil',
              '1 tablespoon garlic, minced',
              '2 teaspoons dried thyme',
              '1 teaspoon rosemary',
              '1/2 cup chicken broth',
              '1/3 cup sun-dried tomatoes in oil, chopped into pieces',
              '1 cup heavy cream (OR full fat coconut milk OR skim milk)',
              '1/2 cup grated parmesan',
              'sea salt & pepper to taste',
              'Garnish',
              'chopped parsley'
            ],
            instructions: [
              'Set oven to 350F.',
              'Set a skillet on high heat.  Season chicken thighs with sea salt & pepper.',
              'Once the skillet is hot, add 1 tablespoon oil and chicken thighs.  Cook for 3 to 4 minutes, or until the edges are seared.  Remove from the skillet EVEN IF the chicken has not finished cooking.',
              'Place the skillet back on the heat and reduce the heat to medium.  Add the remaining oil, then add garlic and the dried herbs.  Bloom the spices together for 1 minute.  Pour in chicken broth, then add chopped sun-dried tomatoes, and finally the heavy cream.',
              'Stir, then fold in the parmesan.',
              'Bring to a light simmer.  Add the chicken back to the skillet, then bake in the oven for 15 minutes uncovered.',
              'Allow to slightly cool and let the sauce thicken before enjoying.  Garnish, and season to taste with sea salt & pepper.  Enjoy!'
            ],
            calories: 431,
            macronutrients: {
              protein: '32g',
              carbohydrates: '5g',
              fat: '32g',
              sugars: '3g'
            },
            tags: [
              'low carbs', 'meat'
            ],
            servings: 5,
            totalTime: '30 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Smoky Budget Bootstrap Paella',
            image: 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/boostrap-paella-weber-grills-7.jpg',
            ingredients: [
              '1 1/2 cups uncooked brown rice',
              'Kebabs',
              '2 lb shrimp,  peeled and deveined',
              '1 green bell pepper',
              '1 red bell pepper',
              '2 tablespoons olive oil (or avocado oil)',
              '2/3 cup white onion, diced',
              '1 1/2 tablespoon garlic',
              '1 tablespoon smoked paprika',
              '1 1/2 teaspoons turmeric',
              '2  teaspoons dried thyme',
              '2 cups low sodium chicken stock',
              '2 cups water (OR you can use an additional 2 cups stock)',
              '1 can (28oz) fire roasted tomatoes',
              '1 tablespoon sea salt',
              '1 tablespoon pepper',
              '1 cup frozen peas',
              'Garnish',
              'fresh parsley'
            ],
            instructions: [
              'Cook rice according to the instructions given and set aside to cool.  for best results, make the rice the night before or a few hours before you plan to make this.',
              'Fire up your grill – I’m using the Weber Summit Charcoal Grill! Once the charcoal has burned through and the charcoal is white and fiery red, add your choice of flavored wood chips for smoking.  Adjust the top vent on the lid to control  heat – you  want it between 350F-400F initially.',
              'Assemble kabobs with shrimp and bell pepper.  Repeat. (Note: if using wooden kebabs, remember to soak them for at least 30 minutes in water prior to putting on the grill.  Place on the grill and cook 6 to 8 minutes, until the bell pepper edges are charred and the shrimp is cooked through.  Remove from the grill after cooking so the shrimp doesn’t dry out.',
              'While the kebabs are cooking, set a pot on medium heat. Once hot, add oil, onion and garlic.  Caramelize the onions in the oil and garlic, about 3 minutes.  Then add paprika, turmeric and thyme.  Cook (bloom) the spices in the skillet for about 1 minutes, making sure the spices are not burning.',
              'Add COOKED rice and mix together for 1 minute, ensuring all the grains of rice are covered – the rice should be a vibrant yellow-ish color.',
              'Pour in chicken stock, water and roasted tomatoes.  Add sea salt & pepper.  Stir.',
              'Add the kebabs, sliding the ingredients off the skewer into the pot.',
              'Fold in frozen peas and mix everything together.  Note: the mixture should appear a bit more like soup but it WILL thicken up as it cools and some of the liquid will evaporate.  If you need more liquid, simply add tablespoons of chicken broth until you reach desired level.',
              'Bring to a light simmer, then place the pot on the smoky grill.  Cook UN-covered on the grill for 30 – 40 minutes at 300F (adjust the vents to control temperature – smaller vents to lower temp).',
              'Remove from the heat, stir, garnish and enjoy!'
            ],
            calories: 383,
            macronutrients: {
              protein: '32g',
              carbohydrates: '43g',
              fat: '8g',
              sugars: '8g'
            },
            tags: [
              'seafood', 'lunch', 'dinner'
            ],
            servings: 5,
            totalTime: '40 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Mediterranean Salmon In Tomato Sauce',
            image: 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/mediterranean-salmon-tomato-1.jpg',
            ingredients: [
              '4 Roma tomatoes',
              'Salmon',
              '10oz raw (wild caught) salmon',
              '1 tablespoon The Fit Cook Sea Blend',
              'Substitute: 1/2 teaspoon turmeric + pinch of sea salt + 1 teaspoon cracked pepper + 1 tablespoon of lemon zest',
              '1 teaspoon olive oil',
              '3 tablespoons olive oil, divided into 2 portions',
              '1/2 cup diced white onion',
              '1 tablespoon garlic, minced',
              '2 tablespoons capers',
              '1 1/2 cups chicken broth',
              '1 tablespoon tomato paste',
              '2 teaspoons lemon zest',
              '2 teaspoons oregano',
              '1 teaspoon dried thyme',
              'sea salt &  pepper to taste',
              'Garnish',
              'fresh parsley',
              'zaatar'
            ],
            instructions: [
              'Set oven to broil.',
              'Spray whole tomatoes with avocado oil and season them with a pinch of sea salt & pepper.  Roast the tomatoes in the oven for 10- 12 minutes, or until  soft and blistered.  Remove and set aside.',
              'Reduce the heat of the oven to 400F.',
              'Season salmon filet with a bit of olive oil and Sea blend.',
              'Set a skillet on high heat.  Once hot, add 1 1/2 tablespoons olive oil, then add the salmon fillet skin-side UP.  Sear the salmon for 1 – 2 minutes, then remove from the skillet.',
              'Reduce the heat of the skillet to medium.  Once the skillet has cooled down, add remaining olive oil,  onion, garlic and capers.  Caramelize for 2 to 3 minutes, until the onions have turned slightly brown and translucent.',
              'Add the roasted tomatoes to the skillet.  Use the spatula to gently press on the tomatoes so they explode to create a natural tomato sauce.',
              'Once all the tomatoes have exploded to create a sauce, add chicken broth and tomato paste, then stir to create a tomato sauce.  Bring the sauce to a light simmer and add the remaining ingredients, frequently stirring.   If you desire a thicker sauce, add another tablespoon of tomato paste.  If you prefer a thinner sauce, add tablespoons of vegetable or chicken broth until you reach your desired consistency.  Season to taste with sea salt & pepper.',
              'Nestle the salmon in the skillet with the tomatoes, then bake for 8 – 10 minutes at 400F.',
              'Garnish and enjoy!'
            ],
            calories: 483,
            macronutrients: {
              protein: '35g',
              carbohydrates: '22g',
              fat: '25g',
              sugars: '15g'
            },
            tags: [
              'seafood'
            ],
            servings: 2,
            totalTime: '20 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Salmon Sweet Potato Cakes With Avocado Salsa',
            image: 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/salmon-sweet-potato-cakes-8.jpg',
            ingredients: [
              '10oz raw, fresh center-cut salmon filet with skin',
              '2 medium baked sweet potato or yam (about 1 1/2 cups flesh), chilled or completely cooled to room temperature',
              '1 green onion, finely chopped',
              '1 tablespoon chili powder (OR 1 teaspoon cumin + 2 teaspoons smoked paprika + 1/4 teaspoon cayenne)',
              '1 teaspoon turmeric',
              '1/2 teaspoon cinnamon (OPTIONAL)',
              'pinch of sea salt & pepper',
              '1/4 cup chickpea panko (or almond flour to keep this gluten-free; otherwise just use regular panko or breadcrumbs)',
              '2 tablespoons avocado oil',
              '8 cups mixed greens'
            ],
            instructions: [
              'Set oven to  400F.',
              'Poke a few holes in sweet potatoes, then wrap in foil.  Bake for 45 minutes to 1 hour until soft.  Once complete, unwrap them and place in the fridge/freezer to quickly cool down to at least room temperature.',
              'Carefully remove the skin from the salmon with a sharp knife.  Slice it into 2 pieces – 25% and 75%.  For the 75% portion, finely chop and MINCE the salmon using the sharp knife. Chop until it’s sticky.  For the remaining 25%, chop it into small chunks about 1/4-inch in size.  See this example.',
              'Add the salmon to a bowl along with the remaining ingredients (except the oil).  Mix well. If the mixture is too wet and not firm enough to stick together, add tablespoons of almond flour or panko until it gets firm.',
              'Scoop out oversized golf ball size balls of the mixture, roll into balls and then gently flatten to create patties.  Repeat.',
              'For best results, let the patties rest in the fridge for about 20 minutes to firm up.',
              'Set a nonstick skillet on medium heat.  Once hot, add avocado oil – add the individual patties and cook on each side for 2 -3 minutes each, then place on a cooling rack once finished.  Note: If you are making large patties for burgers, then cook them on each side for 3 – 5 minutes, then place the burgers on a baking tray lined with parchment to bake in the oven for 6 to 8 minutes to ensure they are adequately cooked through.',
              'Enjoy the mini patties with a chopped mixed greens and avocado salsa.'
            ],
            calories: 201,
            macronutrients: {
              protein: '17g',
              carbohydrates: '21g',
              fat: '6g',
              sugars: '6g'
            },
            tags: [
              'seafood', 'lunch'
            ],
            servings: 4,
            totalTime: '55 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Eritrean Inspired Chili & Salad With Injera',
            image: 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/eritrean-chili-injera-7.jpg',
            ingredients: [
              '2 tablespoons olive oil',
              '1 tablespoon garlic',
              '1 medium carrot, finely grated',
              '2/3 cup diced (white) onion',
              '4 tablespoons Berbere seasoning, divided',
              'Substitute mix',
              '2 tablespoons (sweet or smoked) paprika',
              '1 1/2 tablespoons ground dried red chilies',
              '1/2 teaspoon turmeric',
              '1 teaspoon ground coriander seeds',
              '1 teaspoon ground cumin seeds',
              '½ teaspoon ground fenugreek seeds',
              '1 teaspoon ground black peppercorns',
              '¼ teaspoon nutmeg',
              '½ teaspoon ginger',
              '¼ teaspoon cinnamon',
              '1 teaspoon ground cardamom',
              '1/2 teaspoon (or more) garlic powder',
              'pinch of salt',
              '5oz tomato paste (NOT sauce)',
              '1 1/2 lb 95% lean ground beef',
              '1 can (15oz) diced tomatoes, drained',
              '1 can (15oz) no salt added garbanzo beans, drained',
              '3 cups no salt added beef broth',
              'sea salt & pepper to taste',
              'Garnish - fresh parsley, chopped'
            ],
            instructions: [
              'Set a pot on medium high heat.  Once hot, add oil, onions, garlic and carrot.  Cook for 2 to 3 minutes until the onions are sautéed and slightly brown.',
              'Add 3 tablespoons of berbere to the pot along with the tomato paste.  Cook for 1 to 2 minutes, until very fragrant.   Then add lean ground beef to the pot and chop it up while it cooks.  As it the meat begins to cook, sprinkle in the remaining tablespoon of berbere.  Continue cooking for 3 to 5 minutes, until the meat is nearly finished but there are a few pink pieces left.',
              'Add the diced tomatoes and garbanzo and fold everything together.',
              'Reduce the heat to low, then pour in the beef broth.  Bring to a light simmer, add a few pinches of sea salt & pepper, then cover and cook for at least 20 minutes and ensure it is not burning in the pot.',
              'Season to taste with sea salt & pepper, then garnish.  Enjoy with injera OR with brown rice or cauliflower rice.'
            ],
            calories: 330,
            macronutrients: {
              protein: '29g',
              carbohydrates: '23g',
              fat: '10g',
              sugars: '6g'
            },
            tags: [
              'meat'
            ],
            servings: 6,
            totalTime: '30 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Harissa Meatballs & Stuffed Pita',
            image: 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/harissa-meatball-pita-7.jpg',
            ingredients: [
              '1lb 90% lean ground lamb (OR you can use a leaner choice of ground meat to reduce calories)',
              '1/2lb 95% lean ground beef (OR you can use the same ground meat)',
              '1 teaspoon garlic powder',
              '1 teaspoon cumin',
              '1 teaspoon dried oregano',
              '1 1/2 tablespoons Harissa paste/sauce',
              'spray avocado or olive oil',
              '1 cup plain 2% (Greek) yogurt',
              '3 tablespoons Harissa paste',
              'juice from 1 lemon',
              'fresh parsley or cilantro'
            ],
            instructions: [
              'Set oven to 400F.',
              'In a bowl, thoroughly mix together the ingredients for the meatballs using your hands or a spatula.  Form 15 – 16 small golfball sized (or smaller) meatballs.',
              'Set a skillet on high heat, once hot spray with oil, then add the meatballs.  Sear the meatballs on the outside for 1 – 2 minutes.  Note: if your skillet is too small to hold all the meatballs, sear them in batches and add them to a baking tray lined with parchment.',
              'Once the meatballs have been seared, place them in the oven to cook through for 8 to 10 minutes.  Then set aside and garnish.',
              'While the meatballs are baking, mix together the ingredients for the sauce.',
              'Enjoy the meatballs with the dipping sauce, or make a loaded Harissa meatball pita!'
            ],
            calories: 303,
            macronutrients: {
              protein: '30g',
              carbohydrates: '6g',
              fat: '26g',
              sugars: '3g'
            },
            tags: [
              'meat'
            ],
            servings: 5,
            totalTime: '20 minutes',
            isPublic: true,
            user: users[0]
          },
          {
            recipeName: 'Broccoli & Cheese Tuna Casserole Budget Meal',
            image: 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/tuna-broccoli-casserole-2.jpg',
            ingredients: [
              '1 cup uncooked brown rice (I used short-grain)',
              '2 tablespoons olive oil (or avocado oil)',
              '1 tablespoon fresh garlic',
              '2/3 cup diced (white) onion',
              '1 1/2 tablespoons The Fit Cook Land Seasoning (OR Italian seasoning)',
              '2 teaspoons cumin',
              '1 can (13.5oz) lite coconut milk',
              '1 1/3 cups reduced fat cheddar cheese',
              '11oz (306g) canned (albacore) tuna, drained',
              '2 teaspoons smoked paprika',
              '1 red bell pepper, diced',
              '1 1/2 cups raw or frozen broccoli florets (TIP: if raw, lightly steam and soften in the microwave for 4 – 5 minutes)',
              'add water or chicken broth if needed for added moisture',
              'sea salt & pepper to taste'
            ],
            instructions: [
              'Cook brown rice according to instructions provided on the package.  Set aside.',
              'Set oven to 400F.',
              'Set a large skillet on medium high heat.  Once hot add oil, garlic and onions.  Add a pinch of sea salt as the onions cook.  Continue cooking for 2 – 3 minutes, until brown and translucent.',
              'Sprinkle in Land seasoning (or Italian seasoning) and cumin and bloom the spices and oil for 2 minutes.',
              'Reduce the heat to medium and add coconut milk. Bring to a light simmer and add HALF of the cheese (save the rest for the topping). Quickly stir so the cheese does not clump and is evenly distributed to create a cheesy sauce.',
              'Add the tuna and continue stirring for 1 minute.',
              'Fold in the rice, bell pepper and paprika.  Continue stirring and folding everything together.',
              'Add the broccoli and stir.  Reduce the heat to low or OFF.  TIP: if you’re adding raw broccoli, I recommend adding it to glass  bowl with a few tablespoons of water and steaming it in the microwave for 4 – 5 minutes as a timesaving hack. Note: if you find the mixture is too thick and dry, add tablespoons of water or chicken stock to help.',
              'Add the mix to a casserole dish, then top it off with the remaining cheddar along with black pepper.  Cover with foil, then bake for 15 – 20 minutes at 400F.  Remove the foil the final 3 – 4 minutes to help brown the cheese on top.',
              'Let it cool for about 15 minutes before enjoying!  Season to taste with sea salt & pepper.'
            ],
            calories: 408,
            macronutrients: {
              protein: '27g',
              carbohydrates: '34g',
              fat: '18g',
              sugars: '3g'
            },
            tags: [
              'seafood'
            ],
            servings: 5,
            totalTime: '35 minutes',
            isPublic: true,
            user: users[0]
          }
        ])
      })
      .then(recipes => console.log(`${'🍏'.repeat(recipes.length)} created`))
      .then(() => console.log('Goodbye!'))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)