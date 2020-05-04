import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import auth from './lib/auth'

class DisplaySingleRecipe extends React.Component {

  constructor() {
    super()
    this.state = {
      recipes: {
        macronutrients: {},
        instructions: [],
        ingredients: [],
        tags: []
      }
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`/api/recipe/${id}`)
      .then(res => {
        this.setState({ recipes: res.data })
      })
  }

  handleDelete() {
    const id = this.props.match.params.id
    axios.delete(`/api/recipe/${id}`,
      { headers: { Authorization: `Bearer ${auth.getToken()}` } })
      .then(() => this.props.history.push('/recipes'))
      .catch(err => console.error(err))
  }

  isOwner() {
    return auth.getUserId() === this.state.recipes.user
  }

  render() {
    const recipe = this.state.recipes
    return <div id="big-container">
      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">

          <div className="tile is-child box">
            <h2 className="recipe title">{recipe.recipeName}</h2>
            <img src={recipe.image} className="single-recipe-img" />
            <p>Servings: {recipe.servings}</p>
            <p>Total Time: {recipe.totalTime}</p>
          </div>
          {this.isOwner() && <button
            onClick={() => this.handleDelete()}
            className="button edit-button is-danger"
          >
            {'Delete Recipe'}
          </button>}
          {this.isOwner() && <button
            className="button edit-button is-warning"
          >
            <Link to={`/recipe/${recipe._id}/edit`}>
              Edit Recipe
            </Link>
          </button>}
          <div className="tile is-child box">
            <p className="recipeTitle">Macros</p>
            <p>Protein: {recipe.macronutrients.protein}</p>
            <p>Carbohydrates: {recipe.macronutrients.carbohydrates}</p>
            <p>Fat: {recipe.macronutrients.fat}</p>
            <p>Sugar: {recipe.macronutrients.sugars}</p> <br />
            <p>Calories: {recipe.calories}</p> <br />
          </div>

        </div>
        <div className="tile is-parent flex-parent">
          <div className="tile is-parent">
            <div className="tile is-child box ingredients-box">
              <p className="recipeTitle">Ingredients</p>
              <ul>
                {this.state.recipes.ingredients.map((ingredient, key) => {
                  return <li key={key}>
                    {ingredient}
                  </li>
                })}
              </ul>
            </div>
          </div>
          <div className="tile is-child box">
            <p className="recipeTitle categories-box">Categories
            </p>
            <ul>
              {this.state.recipes.tags.map((category, key) => {
                return <li key={key}>
                  {category}
                </li>
              })}
            </ul>
          </div>
        </div>
        <div className="tile is-child box instructions-box">
          <p className="recipeTitle">Instructions
          </p>
          <ol className="instructions-list">
            {this.state.recipes.instructions.map((step, key) => {
              return <li key={key}>
                {step}
              </li>
            })}
          </ol>
        </div>
        <div className="recipe-cross">
          <Link className="delete" to="/recipes"></Link>
        </div>
      </div>
    </div>
  }
}

export default DisplaySingleRecipe