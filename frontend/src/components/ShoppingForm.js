import React from 'react'

const ShoppingForm = (props) => {
  const { newTask, onChange, onSubmit } = props
  return <section className="section">
    <div className="container">
      <form
        className="form"
        onSubmit={onSubmit}
      >
        <input
          className="input"
          name="task"
          value={newTask}
          placeholder="Task"
          onChange={onChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  </section>
}

export default ShoppingForm
