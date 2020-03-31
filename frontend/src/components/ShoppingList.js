import React from 'react'
import ShoppingForm from './ShoppingForm'

class ShoppingList extends React.Component {
  constructor() {
    super()
    this.state = {
      newIngredient: '',
      todos: [
        {
          id: 1,
          task: 'Make a todo app',
          completed: false
        },
        {
          id: 2,
          task: 'Display the todos',
          completed: false
        },
        {
          id: 3,
          task: 'Profit',
          completed: false
        }
      ]
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
    return <section className="section">
      <div className="container">
        <h1>You have {this.countRemainingTodos()} thing(s) to do!</h1>
        <ul>
          {todos.map(todo => (
            <li
              className={todo.completed ? 'completed' : ''}
              key={todo.id}>
              <label
                className="checkbox"
                onClick={() => this.toggleCompleted(todo.id)}
              >
                <input
                  type="checkbox"
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
          newTask={this.state.newTask} />
      </div>
    </section>
  }
}
export default ShoppingList