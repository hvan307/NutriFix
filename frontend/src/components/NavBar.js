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
    console.log(this.props)
  }

  render() {
    const isLoggedIn = auth.isLoggedIn()

    return <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
          onClick={() => this.setState({ navMobileOpen: !this.state.navMobileOpen })}>

          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu ${this.state.navMobileOpen ? 'is-active' : ''}`}>
        <div className="navbar-item">
          {/* <p>hello</p> */}
          {!isLoggedIn &&
            <Link to="/register" className="navbar-item is-active">
              Register
            </Link>
          }
        </div>
        <div className="navbar-item">
          {!isLoggedIn &&
            <Link to="/login" className="navbar-item is-active">
              Login
            </Link>
          }
        </div>
        <div className="navbar-item">
          {isLoggedIn &&
            <Link to="/recipes" onClick={() => this.HandleLogout()} className="navbar-item is-active">
              Log out
            </Link>
          }
        </div>
      </div>
    </nav>
  }
}
export default NavBar