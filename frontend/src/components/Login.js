import React from 'react'
import auth from '../lib/auth'
import axios from 'axios'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        email: '',
        password: ''
      },
      error: ''
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    const data = { ...this.state.data, [name]: value }
    this.setState({ data: data })
  }

  handleSubmit(event) {
    event.preventDefault()

    axios.post('/api/login',
      this.state.data)
      .then(res => {
        console.log(res)
        const token = res.data.token
        auth.setToken(token)
        this.props.history.push('/recipes')
      })
      .catch(err => this.setState({ error: err.response.data.message }))
  }

  render() {
    const { error } = this.state
    return <section className="section login">
      <div className="container login">
        <h1 className="title login">User Login</h1>
        <form
          className="form"
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input
                onChange={(event) => this.handleChange(event)}
                type="text"
                name="email"
                className="input is-rounded"
                placeholder="Email"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
            {error && <small className="help is-danger">
              {error}
            </small>}
          </div>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input
                onChange={(event) => this.handleChange(event)}
                type="password"
                name="password"
                className="input is-rounded"
                placeholder="Password"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
            {error && <small className="help is-danger">
              {error}
            </small>}
          </div>
          <div className="control">
            <button className="button is-link">Login</button>
          </div>
        </form>
      </div>
    </section>
  }
}

export default Login
