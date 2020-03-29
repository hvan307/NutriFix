import React from 'react'
import axios from 'axios'
import auth from '../lib/auth'
import RecipeForm from '../components/RecipeForm'

class NewRecipe extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {
        recipeName: '',
        image: '',
        ingredients: [],
        instructions: '',
        calories: '',
        macronutrients: {
          fat: '',
          carbohydrates: '',
          sugars: '',
          protein: ''
        },
        servings: '',
        totalTime: '',
        isPublic: false,
        tags: [
          'gluten-free',
          'dairy-free',
          'low-fat',
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
        ]
      },
      errors: {}
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    const data = { ...this.state.data, [name]: value }
    // console.log(data)
    this.setState({ data })
  }

  handleMacroChange(event) {
    const { name, value } = event.target
    const data = { ...this.state.data, macronutrients: { ...this.state.data.macronutrients, [name]: value } }
    // console.log(macronutrients)
    console.log(name)
    console.log(value)
    this.setState({ data })
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('/api/myrecipes',
      this.state.data,
      { headers: { Authorization: `Bearer ${auth.getToken()}` } })
      .then(res => this.props.history.push(`/myrecipes/${res.data._id}`))
      .catch(err => this.setState({ error: err.response.data.errors }))
  }

  render() {
    const { errors } = this.state
    console.log(this.state.data)
    return <section className="section">
      <div className="container">
        <h1 className="title">
          <RecipeForm
            handleSubmit={(event) => this.handleSubmit(event)}
            handleChange={(event) => this.handleChange(event)}
            handleMacroChange={(event) => this.handleMacroChange(event)}
            errors={errors}
            data={this.state.data}
            macronutrients={this.state.data.macronutrients}
          />
        </h1>
      </div>
    </section>
  }
}

export default NewRecipe