import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Hero from './components/Hero'

class DisplaySingleRecipe extends React.Component {

  constructor() {
    super()
    this.state = {
      recipes: {
        macronutrients: {},
        instructions: []
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
    console.log(this.state.instructions)

    return <>
      {/* <Hero/> */}
      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child box">

            <img src={recipe.image} />

            {/* {console.log(recipe)} */}
          </div>
          <div className="tile is-child box">
            <p className="title">Macros</p>
            <p>Protein: {recipe.macronutrients.protein}</p>
            <p>Carbohydrates: {recipe.macronutrients.carbohydrates}</p>
            <p>Fat: {recipe.macronutrients.fat}</p>
            <p>Sugar: {recipe.macronutrients.sugars}</p>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            <p className="title title-cross">Instructions
              <Link className="delete" to="/recipes"></Link>
            </p>
            <ol>
              {this.state.instructions.map((instruction, key) => {
                return <li key={key}>
                  {instruction.instructions}
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