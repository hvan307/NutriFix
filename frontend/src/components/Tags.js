import React from 'react'


<<<<<<< HEAD
  constructor() {
    super()
    this.state = {
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
=======
const Tags = ({ staticTags, handleTag }) => {
  return <>
    <div className="field is-grouped is-grouped-multiline">
      {staticTags.map((tag, key) => {
>>>>>>> b05ee64f69ad87c60a7a42833839094010b0c90d
        return <p
          key={key}
          className="control"
        >
          <a className="button tag"
            style={{ backgroundColor: 'white' }}
            onClick={handleTag}
          >
            {tag}
          </a>
        </p>

      })}
    </div>
  </>
}

export default Tags