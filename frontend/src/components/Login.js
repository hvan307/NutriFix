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
    this.setState({ data })
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
    return <section className="section">
      <div className="container">
        <h1 className="title">Login</h1>
        <form
          className="form"
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <div className="field">
            <label className="label">
              Email
            </label>
            <div className="control has-icons-left has-icons-right">
              <input
                onChange={(event) => this.handleChange(event)}
                type="email"
                name="email"
                className="input is-medium"
                placeholder="youremail@email.com"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
            {error && <small className="help is-danger">
              {error}
            </small>}
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                onChange={(event) => this.handleChange(event)}
                type="password"
                name="password"
                className="input is medium"
                placeholder="**********"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
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
