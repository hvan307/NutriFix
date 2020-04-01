import React from 'react'

const ShoppingForm = (props) => {
  const { newIngredient, onChange, onSubmit } = props
  return <section className="section">
    <div className="container">
      <form
        className="form"
        onSubmit={onSubmit}
      >
        <input
          className="input"
          name="task"
          value={newIngredient}
          placeholder="Add Item Here"
          onChange={onChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  </section>
}

export default ShoppingForm
