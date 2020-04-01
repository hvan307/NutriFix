import React from 'react'
import ShoppingForm from './ShoppingForm'

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
    return <section className="section" scroll="no" height="100%">
      <div className="container">
        <h1>You have {this.countRemainingTodos()} thing(s) to get!</h1>
        <ul>
          {todos.map(todo => (
            <li
              className={todo.completed ? 'completed' : ''}
              key={todo.id}>
              <label
                className="checkbox"
                
              >
                <input
                  type="checkbox"
                  onChange={() => this.toggleCompleted(todo.id)}
                  checked={todo.completed ? true : false}
                  
                  // value='completed'
                />

              </label>

              {todo.task}
            </li>
          ))}
        </ul>

        <ShoppingForm
          onChange={() => this.handleChange(event)}
          onSubmit={() => this.handleSubmit(event)}
          newIngredient={this.state.newIngredient} />
      </div>
    </section>
  }
}
export default ShoppingList