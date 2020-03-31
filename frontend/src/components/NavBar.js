import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../lib/auth'

class NavBar extends React.Component {

  constructor() {
    super()
    this.state = {
      navMobileOpen: false
    }
  }

  HandleLogout() {
    auth.logOut()
    // console.log(this.props)
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
        <div className="navbar-item">
          {!isLoggedIn &&
            <Link to="/register" className="navbar-item is-active" onClick={() => this.setState({ navMobileOpen: !this.state.navMobileOpen })}>
              Register
            </Link>
          }
        </div>
        <div className="navbar-item">
          {!isLoggedIn &&
            <Link to="/login" className="navbar-item is-active" onClick={() => this.setState({ navMobileOpen: !this.state.navMobileOpen })}>
              Login
            </Link>
          }
        </div>
        <div className="navbar-item">
          {isLoggedIn &&
            <Link to="/recipes" className="navbar-item is-active"
              onClick={() =>
                this.HandleLogout() && this.setState({ navMobileOpen: !this.state.navMobileOpen })}>
              Log out
            </Link>
          }
        </div>
      </div>
    </nav>
  }
}
export default NavBar