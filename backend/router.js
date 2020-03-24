const router = require('express').Router()
const recipeController = require('./controllers/recipeController')

router.route('/recipes')
  .get(recipeController.allRecipes)


module.exports = router
