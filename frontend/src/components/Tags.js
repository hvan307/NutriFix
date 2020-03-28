import React from 'react'
import update from 'react-addons-update'

let selectedTags = []
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
      submissionTags: []
    }
  }

  handleTag(event) {
    const { submissionTags } = this.state
    if (submissionTags.includes(event.target.innerHTML)) {
      console.log('submission tags', submissionTags)
      event.target.style.backgroundColor = 'transparent'
      const filteredTags = selectedTags.filter((selectedTag) => {
        return selectedTag !== event.target.innerHTML
      })
      selectedTags = filteredTags
      this.setState({ submissionTags: selectedTags })
    } else {
      event.target.style.backgroundColor = 'blue'
      selectedTags.push(event.target.innerHTML)
      this.setState({ submissionTags: selectedTags })
    }
  }

  render() {
    // console.log('state', this.state.submissionTags)
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