const router = require('express').Router()
const recipeController = require('./controllers/recipeController')
const userController = require('./controllers/userController')
const secureRoute = require('./lib/secureRoute')

router.route('/recipes')
  .get(recipeController.allRecipes) // maybe add secureRoute

router.route('/recipe/:id')
  .get(secureRoute, recipeController.singleRecipe) // maybe add secureRoute
  .put(secureRoute, recipeController.editRecipe) // maybe add secureRoute
  .delete(secureRoute, recipeController.removeRecipe)  // maybe add secureRoute

router.route('/myrecipes')
  .get(secureRoute, recipeController.myRecipes)
  .post(secureRoute, recipeController.createRecipe) // maybe add secureRoute

router.route('/register')
  .post(userController.register)

router.route('/login')
  .post(userController.login)


module.exports = router
