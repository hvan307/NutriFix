import React from 'react'
import axios from 'axios'
import auth from '../lib/auth'
import RecipeForm from '../components/RecipeForm'

class NewRecipe extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {
        name: '',
        image: '',
        ingredients: [],
        instructions: '',
        calories: null,
        macronutrients: {
          fat: '',
          carbohydrates: '',
          sugars: '',
          protein: ''
        },
        servings: null,
        totalTime: '',
        isPublic: false,
        tags: []
      },
      errors: {}
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('/api/myrecipe',
      this.state.data,
      { headers: { Authorization: `Bearer ${auth.getToken()}` } })
      .then(res => this.props.history.push(`/myrecipes/${res.data._id}`))
      .catch(err => this.setState({ error: err.response.data.errors }))
  }

  render() {
    const { errors } = this.state
    return <section className="section">
      <div className="container">
        <h1 className="title">
          <RecipeForm
            handleSubmit={(event) => this.handleSubmit(event)}
            handleChange={(event) => this.handleChange(event)}
            errors={errors}
          />
        </h1>
      </div>
    </section>
  }
}

export default NewRecipe