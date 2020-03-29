import React from 'react'
import axios from 'axios'
import FoodSearchForm from './FoodSearchForm'

class FoodSearchBar extends React.Component {
  constructor() {
    super()
    this.state = {
      query: '',
      parsed: [
        {
          food: {
            nutrients: {}
          }
        }
      ]
    }
  }

  handleChange(event) {
    const query = event.target.value
    this.setState({ query })
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${this.state.query}&app_id=456922e8&app_key=ab36bb266c8b99d0bfedb91299cf6bf3`)
      .then(res => {
        console.log(res.data.parsed)
        this.setState({ parsed: res.data.parsed })
      })
      .catch(err => console.error(err))
  }


  render() {
    return <section className="section">
      <div className="container">
        <FoodSearchForm
          handleChange={(event) => this.handleChange(event)}
          handleSubmit={(event) => this.handleSubmit(event)}
          query={this.state.query}
        />
        <div className="food-card">
          {!this.state.query ? null : this.state.parsed.map((parse, key) => {
            return <div key={key}>
              <h4>{parse.food.label}</h4>
              <img src={parse.food.image} alt={parse.food.label} />
              <p>Calories: {parse.food.nutrients.ENERC_KCAL}kcal</p>
              <p>Protein: {parse.food.nutrients.PROCNT}g</p>
              <p>Carbohydrates: {parse.food.nutrients.CHOCDF}g</p>
              <p>Fat: {parse.food.nutrients.FAT}g</p>
              <p>Fiber: {parse.food.nutrients.FIBTG}g</p>

            </div>


          })
          }
        </div>
      </div>
    </section>
    //   }
  }
}

export default FoodSearchBar