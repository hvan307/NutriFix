const router = require('express').Router()
const recipeController = require('./controllers/recipeController')
const userController = require('./controllers/userController')
const secureRoute = require('./lib/secureRoute')

router.route('/recipes')
  .get(recipeController.allRecipes)

router.route('/recipe/:id')
  .get(recipeController.singleRecipe) 
  .put(secureRoute, recipeController.editRecipe) 
  .delete(secureRoute, recipeController.removeRecipe)  

router.route('/myrecipes')
  .get(secureRoute, recipeController.myRecipes)
  .post(secureRoute, recipeController.createRecipe) 

router.route('/register')
  .post(userController.register)

router.route('/login')
  .post(userController.login)


module.exports = router
