import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import auth from './lib/auth'
import Hero from './components/Hero'

class MyRecipes extends React.Component {

  constructor() {
    super()
    this.state = {
      myRecipes: []
    }
  }

  componentDidMount() {
    axios.get('/api/myrecipes',
      { headers: { Authorization: `Bearer ${auth.getToken()}` } })
      .then(res => this.setState({ myRecipes: res.data }))
      .catch(err => console.error(err))
  }

  render() {
    return <>
      <Hero />
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.myRecipes.map((recipe) => {
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

export default MyRecipes

