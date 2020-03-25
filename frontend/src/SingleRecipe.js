import React from 'react'
import axios from 'axios'

class DisplaySingleRecipe extends React.Component {

  constructor() {
    super()
    this.state = {
      recipes: {
        macronutrients: {}
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

  render() {
    const recipe = this.state.recipes
    return <div className="tile is-ancestor">
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box">
          
          <img src={recipe.image} />

          {console.log(recipe)}
        </div>
        <div className="tile is-child box">
          <p className="title">Macros</p>
          <p>Protein: {recipe.macronutrients.protein}</p>
          <p>Carbohydrates: {recipe.macronutrients.carbohydrates}</p>
          <p>Sugar: {recipe.macronutrients.sugars}</p>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child box">
          <p className="title">Instructions</p>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
  }
}


export default DisplaySingleRecipe