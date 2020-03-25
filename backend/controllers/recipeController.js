const Recipe = require('../models/recipe')

function allRecipes(req, res) {
  Recipe
    .find()
    .then(recipes => {
      res.send(recipes)
    })
}

function createRecipe(req, res) {
  req.body.user = req.currentUser
  Recipe
    .create(req.body)
    .then(recipe => {
      res.status(201).send(recipe)
    })
}

function singleRecipe(req, res) {
  const id = req.params.id
  Recipe
    .findById(id)
    .then(recipe => {
      res.send(recipe)
    })
}

function removeRecipe(req, res) {
  const currentUser = req.currentUser
  const id = req.params.id
  Recipe 
    .findById(id)
    .then(recipe => {
      if (!recipe.user.equals(currentUser._id)) return res.status(401).send({ message: 'Unauthorized' })
      return recipe.remove()
    })
    .then(() => {
      res.sendStatus(204)
    })
}

function editRecipe(req, res) {
  const currentUser = req.currentUser
  const id = req.params.id
  Recipe
    .findById(id)
    .then(recipe => {
      if (!recipe.user.equals(currentUser._id)) return res.status(401).send({ message: 'Unauthorized' })
      return recipe.set(req.body)
    })
    .then(recipe => {
      return recipe.save()
    })
    .then(recipe => {
      res.status(202).send(recipe)
    })
}


module.exports = {
  allRecipes,
  createRecipe,
  singleRecipe,
  removeRecipe,
  editRecipe
}