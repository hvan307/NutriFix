# project3

# Backend

## Approach 

We took a MVC approach to create a functional backend. 

The components we used consisted of:

- Models (both a recipe.js and user.js), 
- View (router.js),
- Controllers (recipeController.js and userController.js).

Our api seed consisted of a User Database:

```js
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
```
and a Recipe Database:

```js
.then(users => {
        return Recipe.create([
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
        ])
      })

```
## Models

It was crucial to create our schemas at stage 1 to ensure that we had a solid backend and that our databases would run smoothly, without having to amend it at a later stage.

Majority of our fields were 'required: true' to make sure the user fills out the input fields in the frontend. 

For example in our user schema the user would have to fill out:

- username
- email
- password

### 1. User

We created a user schema to enable the user to register and login in the frontend. 

In order to stop the user registering mulptiple times, with the same credentials, we utilised **mongoose-unique-validator**.

```js
const schema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, minLength: 8, unique: true },
  password: { type: String, required: true, hide: true }
})
```

### 2. Recipe

All our properties had a type and were required true, except Tags, to guarantee a user-friendly experience.

A user property was included in our schema to associate a recipe with a user, so that they can only utilise a secure route (as explained below).

One of the challenges with designing our recipe schema was ensuring the 'type' field was accessible in the frontend. Initially the instructions had a 'type: String' but we soon realised that this wasn't practical and therefore 'type: Array' was more desired.

```js
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
```

## Controllers

All our functions within the controllers, take a req and res, which refer to an API request and its corresponding response.

### 1. User

There were 2 functions within the user controller:

- function register(req, res)
- function login(req, res)

These functions are used to aid the post request as seen in our router.js. 

### 2. Recipe

There were 6 functions within the user controller:

- function allRecipes(req, res)
- function singleRecipe(req, res)
- function removeRecipe(req, res)
- function editRecipe(req, res)
- function myRecipes(req, res)
- function createRecipe(req, res)

Each of these functions extend the API requests, as seen in the router.js.

Our initial idea was to create a myRecipes endpoint, whereby the user could post a single recipe to an endpoint, which would be stored in a separate database. However this proved to be infeasible, therefore we decided to create the below function which extends a secure route in router.js.

```js
function myRecipes(req, res) {
  Recipe
    .find()
    .then(recipes => {
      const myRecipes = recipes.filter(recipe => {
        return req.currentUser._id.equals(recipe.user)
      })
      res.send(myRecipes)
    })
}
```
Having a secure route on this endpoint, ensured the recipes the user created, are only visible, by the creator, once logged in. The created recipes will be both visible on the 'All Recipes' and 'My Recipes' page,

## Security

### Secure Routes

Secure Route was added to all our endpoints, which were only accessible to the logged in user.

The user's privileges were to:

- post a recipe
- delete their own recipe
- edit their own recipe

```js
router.route('/recipe/:id')
  .put(secureRoute, recipeController.editRecipe) 
  .delete(secureRoute, recipeController.removeRecipe)  

router.route('/myrecipes')
  .get(secureRoute, recipeController.myRecipes)
  .post(secureRoute, recipeController.createRecipe) 
```

### Bcrypt

Bcrypt is a encryption library that helps you hash passwords. This ensures that the actual password is never stored in our database, instead it asigns the hash password to the users password. Using this library in conjunction with **mongoose-hidden** (which hides the users password), improves the security of the website and privacy of the user.

### Token

A token is assigned to the user which has an expiry of 12 hours.

JWT (json web token) allows the user to access routes, services, and resources that are permitted with that token. In this case, the user is able to post, edit and delete their recipe. 

```js
  const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '12h' } )
```
Additionally, a secret was implemented, to further elevate security for the user. We stored this secret in an environment.js file, which is only accessible by the developers.


## Potential Future Features

- Create a shopping list schema and controller, to store our frontend data.
- Enable our frontend external API to talk to our backend database. For example when you search chicken, we can display all the recipes containing chicken.


## Lessons Learned

- A big lesson learnt was the importance of how well you design your schema. This will have a great impact on developing the frontend, to ensure the best user experience.