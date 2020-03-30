import React from 'react'
import axios from 'axios'
import auth from '../lib/auth'
import RecipeForm from '../components/RecipeForm'
import Tags from './Tags'
let selectedTags = []

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
        tags: []
      },
      errors: {},
      staticTags: [
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
      ]
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleMacroChange(event) {
    const { name, value } = event.target
    const data = { ...this.state.data, macronutrients: { ...this.state.data.macronutrients, [name]: value } }
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

  handleTag(event) {
    const test = this.state.data.tags
    if (test.includes(event.target.innerHTML)) {
      event.target.classList.remove('tag-selected')
      const filteredTags = selectedTags.filter((selectedTag) => {
        return selectedTag !== event.target.innerHTML
      })
      selectedTags = filteredTags
      const data = { ...this.state.data, tags: selectedTags }
      this.setState({ data })
    } else {
      event.target.classList.add('tag-selected')
      selectedTags.push(event.target.innerHTML)
      const data = { ...this.state.data, tags: selectedTags }
      this.setState({ data })
    }
  }

  render() {
    const { errors } = this.state
    return <section className="section">
      <div className="container">
        <h1 className="title">
          <RecipeForm
            handleSubmit={(event) => this.handleSubmit(event)}
            handleChange={(event) => this.handleChange(event)}
            handleMacroChange={(event) => this.handleMacroChange(event)}
            errors={errors}
            data={this.state.data}
            staticTags={this.state.staticTags}
            handleTag={() => this.handleTag(event)}
          />
        </h1>
      </div>
    </section>
  }
}

export default NewRecipe