import React from 'react'

import ShoppingForm from './ShoppingForm'
import Hero from './Hero'

class ShoppingList extends React.Component {

  constructor() {
    super()
    this.state = {
      newIngredient: '',
      todos: []
    }
  }

  handleChange(event) {
    this.setState({ newIngredient: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const ingredient = {
      id: this.state.todos.length + 1,
      task: this.state.newIngredient,
      completed: false
    }
    const updatedTodos = this.state.todos.concat(ingredient)
    this.setState({
      todos: updatedTodos,
      newIngredient: ''
    })
    console.log(updatedTodos)
  }

  toggleCompleted(id) {
    console.log('toggling', id)
    const updatedTodos = this.state.todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo
    })
    this.setState({
      todos: updatedTodos,
      newTask: ''
    })
  }

  countRemainingTodos() {
    const remainingTodos = this.state.todos.filter(todo => !todo.completed)
    return remainingTodos.length
  }

  render() {
    const { todos } = this.state
    return <>
      <Hero />
      <section className="section shopping">
        <div className="container shopping">
          <div className="title shopping">Shopping List</div>
          <ShoppingForm
            onChange={() => this.handleChange(event)}
            onSubmit={() => this.handleSubmit(event)}
            newIngredient={this.state.newIngredient} />
          <div className="container">
            <h2 className="remaining"
            >{this.countRemainingTodos()} thing(s) remaining to buy!</h2>
            <div className="shoppingList">
              <ul className="shoppingScroll">
                {todos.map(todo => (
                  <li
                    className="addedList"
                    key={todo.id}>
                    <label
                      className="checkbox"
                    >
                      <input
                        type="checkbox"
                        onChange={() => this.toggleCompleted(todo.id)}
                        checked={todo.completed ? true : false}
                      />
                    </label>
                    {todo.task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  }
}

export default ShoppingList