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

<<<<<<< HEAD
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
        const token = res.data.token
        auth.setToken(token)
        this.props.history.push('/recipes')
      })
      .catch(err => this.setState({ error: err.response.data.message }))
  }


=======
>>>>>>> development


  render() {
    const { error } = this.state
    return <section className="section">
      <div className="container">
<<<<<<< HEAD
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
                type="text"
                name="email"
                className="input"
                placeholder="youremail@email.com"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
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
                className="input"
                placeholder="**********"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
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
=======
        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-danger" type="email" placeholder="Email input" value="hello@" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p class="help is-danger">This email is invalid</p>
        </div>

        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" placeholder="Text input" value="bulma" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <p class="help is-success">This username is available</p>
        </div>


        <div class="control">
          <button class="button is-link">Login</button>
        </div>
>>>>>>> development
      </div>
      {/* </div> */}
    </section>
<<<<<<< HEAD
  }
}

export default Login
=======




  }

}
>>>>>>> development
