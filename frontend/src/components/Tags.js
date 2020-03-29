import React from 'react'
const Tags = ({ staticTags, handleTag }) => {
  return <>
    <div className="field is-grouped is-grouped-multiline">
      {staticTags.map((tag, key) => {
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