import React from 'react'

const ShoppingForm = (props) => {
  const { newIngredient, onChange, onSubmit } = props

  return <section className="section shoppingForm">
    <div className="container">
      <form
        className="form shopping"
        onSubmit={onSubmit}
      >
        <input
          className="input item"
          name="task"
          value={newIngredient}
          placeholder="Add Item Here"
          onChange={onChange}
        /> <br />
        <button
          className="button addItem"
          type="submit">
            Add
        </button>
      </form>
    </div>
  </section>
}

export default ShoppingForm
