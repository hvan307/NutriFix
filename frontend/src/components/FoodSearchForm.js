import React from 'react'

const FoodSearchForm = ({ query, handleChange, handleSubmit }) => {
  return (
    <div className="SearchForm">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                className="input is-medium search-input"
                type="search"
                placeholder="Search food"
                value={query}
                onChange={handleChange}
              />
            </div>
            <div className="control">
              <a
                className="button is-info is-medium"
                onClick={handleSubmit}
              >
                Search
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default FoodSearchForm