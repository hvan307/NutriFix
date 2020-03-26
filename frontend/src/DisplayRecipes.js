import React from 'react'
import axios from 'axios'
import 'bulma'
import { Link } from 'react-router-dom'
import Hero from './components/Hero'


class DisplayRecipes extends React.Component {

  constructor() {
    super()
    this.state = {
      recipeList: []
    }
  }

  componentDidMount() {
    axios.get('/api/recipes')
      .then((res) => this.setState({ recipeList: res.data }))
    // console.log(this.state.recipeList)
  }
  render() {
    return <>
    <Hero />
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {this.state.recipeList.map((recipe) => {
            return <div className="column is-one-third" key={recipe._id}>
              <Link
                to={{
                  pathname: `recipe/${recipe._id}`
                }}
              >
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-3by3">
                      <img src={recipe.image}></img>
                    </figure>
                  </div>
                  <div className="card-content">
                    <h2 className="subtitle">{recipe.recipeName}</h2>
                  </div>
                </div>

              </Link>

            </div>
          })}
        </div>
      </div>
    </section>
    </>
  }


}

export default DisplayRecipes