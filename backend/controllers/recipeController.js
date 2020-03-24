const Recipe = require('../models/recipe')

function allRecipes(req, res) {
  Recipe
    .find()
    .then(recipes => {
      res.send(recipes)
    })

}

module.exports = {
  allRecipes
}