import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../lib/auth'
import { withRouter } from 'react-router-dom'

class NavBar extends React.Component {

  constructor() {
    super()
    this.state = {
      navMobileOpen: false
    }
  }

  HandleLogout() {
    auth.logOut()
    this.props.history.push('/recipes')
  }

  render() {
    const isLoggedIn = auth.isLoggedIn()

    return <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/recipes">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
        </Link>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
          onClick={() => this.setState({ navMobileOpen: !this.state.navMobileOpen })}>

          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu ${this.state.navMobileOpen ? 'is-active' : ''}`}>
        <div className="navbar-item">
          <Link to="/recipes" className="navbar-item is-active"
            onClick={() => this.setState({ navMobileOpen: !this.state.navMobileOpen })}>
            Home
          </Link>
        </div>
        {!isLoggedIn && <div className="navbar-item">
          <Link to="/register">Register</Link>
        </div>}
        {!isLoggedIn && <div className="navbar-item">
          <Link to="/login">Login</Link>
        </div>}
        {isLoggedIn && <div
          className="navbar-item"
          onClick={() => this.HandleLogout()}
        >
          Log out
        </div>}
      </div>
    </nav>
  }
}
export default withRouter(NavBar)