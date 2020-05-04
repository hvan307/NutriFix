import React from 'react'
import axios from 'axios'

class Register extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {
        email: '',
        username: '',
        password: '',
        passwordConfirmation: ''
      },
      errors: {}
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
    console.log(this.state.data)
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('/api/register',
      this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }


  render() {
    const { errors } = this.state
    return <section className="section register">
      <div className="container register">
        <h1 className="title register">Register</h1>
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
            {errors.email && <small className="help is-danger">
              {errors.email}
            </small>}
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input
                onChange={(event) => this.handleChange(event)}
                type="text"
                name="username"
                className="input is-rounded"
                placeholder="Username"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
            {errors.username && <small className="help is-danger">
              {errors.username}
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
            {errors.password && <small className="help is-danger">
              {errors.password}
            </small>}
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input
                onChange={(event) => this.handleChange(event)}
                type="password"
                name="passwordConfirmation"
                className="input is-rounded"
                placeholder="Confirm Password"

              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
            {errors.passwordConfirmation && <small className="help is-danger">
              {errors.passwordConfirmation}
            </small>}
          </div>
          <button className="button is-success"
          >Register
          </button>
        </form>
      </div>
    </section>
  }
}

export default Register