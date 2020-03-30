import React from 'react'
import axios from 'axios'
import 'bulma'
import { Link } from 'react-router-dom'
import Hero from './components/Hero'
class DisplayRecipes extends React.Component {
  constructor() {
    super()
    this.state = {
      recipeList: [],
      filteredRecipes: [],
      tags: [
        'gluten-free',
        'dairy-free',
        'quick and easy',
        'high protein',
        'low carbs',
        'low fat',
        'low sugar',
        'low calories',
        'breakfast',
        'lunch',
        'dinner',
        'meat',
        'vegetarian',
        'vegan',
        'sweet',
        'salty',
        'spicy',
        'seafood'
      ],
      clickedTags: []
    }
  }
  handleTags() {
    const clickedTags = [...this.state.clickedTags]
    console.log(event.target.value)
    if (clickedTags.includes(event.target.innerHTML)) {
      clickedTags.splice(clickedTags.indexOf(event.target.innerHTML), 1)
      event.target.style.backgroundColor = 'transparent'

    } else {
      clickedTags.push(event.target.innerHTML)
      event.target.style.backgroundColor = 'blue'
    }

    this.setState({ clickedTags })
    const filteredRecipes =
      this.state.recipeList.filter((recipe) => {
        return clickedTags.every((recipeTag) => {
          return recipe.tags.includes(recipeTag.toLowerCase())
          


        })
      })
    
    this.setState({ filteredRecipes })

    // clickedTags
    // clickedTags.map((clickedTag) => {
    //   this.state.recipeList.map((recipe) => {
    //     recipe.tags.map((recipeTag) => {
    //       if (recipeTag === clickedTag) {
    //         return recipe
    //       }
    //     })
    //   })
    // })
  }
  componentDidMount() {
    axios.get('/api/recipes')
      .then((res) => this.setState({ recipeList: res.data, filteredRecipes: res.data }))
    // console.log(this.state.recipeList)
  }
  render() {
    return <>
      <Hero />
      <section className="section">
        <div className="field is-grouped is-grouped-multiline">
          {this.state.tags.map((tag, key) => {
            return <div
              key={key}
              className="control"
            >
              <a className="button tag"
                value={'hello'}
                onClick={() => this.handleTags(event)}>
                {tag}
              </a>
            </div>
          })}
        </div>
        <div className="container">
          <div className="columns is-multiline">
            {this.state.filteredRecipes.map((recipe) => {
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


