const Recipe = require('../models/recipe')

function allRecipes(req, res) {
  Recipe
    .find()
    .then(recipes => {
      res.send(recipes)
    })
    .catch(error => console.error(error))

}

module.exports = {
  allRecipes
}