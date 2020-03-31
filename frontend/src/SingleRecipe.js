import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import auth from './lib/auth'
// import Hero from './components/Hero'

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
    return <>
      {/* <Hero/> */}
      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <h1 className="recipe title">{recipe.recipeName}</h1>
          <div className="tile is-child box">
            <img src={recipe.image} />
            {/* {console.log(recipe)} */}
          </div>
          {this.isOwner() && <button
            onClick={() => this.handleDelete()}
            className="button is-danger"
          >
            {'Delete Recipe'}
          </button>}
          {this.isOwner() && <button
            className="button is-warning"
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
            <p>Servings: {recipe.servings}</p> <br />
            <p>Total Time: {recipe.totalTime}</p>
          </div>
          <div className="tile is-child box">
            <p className="recipeTitle title-cross">Categories
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
        <div className="tile is-parent">
          <div className="tile is-child box">
            <h1 className="title title-cross">Ingredients
            </h1>
            <ul>
              {this.state.recipes.ingredients.map((ingredient, key) => {
                return <li key={key}>
                  {ingredient}
                </li>
              })}
            </ul>
          </div>
          <div className="tile is-child box">
            <h1 className="title title-cross">Instructions
              <Link className="delete" to="/recipes"></Link>
            </h1>
            <ol>
              {this.state.recipes.instructions.map((step, key) => {
                return <li key={key}>
                  {step}
                </li>
              })}
            </ol>
          </div>

        </div>
      </div>
    </>
  }
}



export default DisplaySingleRecipe