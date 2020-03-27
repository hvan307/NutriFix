import React from 'react'

class Tags extends React.Component {

  constructor() {
    super()
    this.state = {
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
      ],
      emptyTags: []
    }
  }

  handleTag(event) {
    const emptyTags = this.state.emptyTags
    // console.log(tag.innerHTML)
    // console.log(event.target.innerHTML)
    // if (tag.innerHTML === event.target.innerHTML) {
  
    event.target.style.backgroundColor = 'blue'
    console.log('hello')
    emptyTags.push(event.target.innerHTML)
    this.setState({ emptyTags })

  }

  render() {
    console.log(this.state.emptyTags)
    return <div className="field is-grouped is-grouped-multiline">
      {this.state.tags.map((tag, key) => {
        return <p
          key={key}
          className="control"
        >
          <a className="button tag"
            onClick={() => this.handleTag(event)}>
            {tag}
          </a>
        </p>

      })}
    </div>
  }
}

export default Tags