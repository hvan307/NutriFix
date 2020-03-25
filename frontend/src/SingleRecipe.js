import React from 'react'
import axios from 'axios'

class DisplaySingleRecipe extends React.Component {

  constructor() {
    super()
    this.state = {
      recipes: {}
    }
  }

  componentDidMount() {
    axios.get('/api/recipe/:_id')
      .then(res => {
        this.setState({ recipes: res.data })
      })
  }

  render() {
    const recipe = this.state.recipes
    return <div className="tile is-ancestor">
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box">
          <p className="title">{recipe.recipeName}</p>
          <p></p>
          {console.log(recipe)}
        </div>
        <div className="tile is-child box">
          <p className="title">Two</p>
          <p></p>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child box">
          <p className="title">Three</p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  }
}


export default DisplaySingleRecipe