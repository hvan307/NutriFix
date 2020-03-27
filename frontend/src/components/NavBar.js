import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../lib/auth'

class NavBar extends React.Component {

  HandleLogout() {
    auth.logOut()
<<<<<<< HEAD
=======
    // this.props.history.push('/recipes')
>>>>>>> development
  }

  render() {
    const isLoggedIn = auth.isLoggedIn()

    return <nav className="navbar">
      <div className="container">
        <div id="navbarMenuHeroB" className="navbar-menu">
          <div className="navbar-end">
            {!isLoggedIn &&
              <Link to="/register" className="navbar-item is-active">
                Register
              </Link>
            }
            {!isLoggedIn &&
              <Link to="/login" className="navbar-item is-active">
                Login
              </Link>
            }
            {isLoggedIn &&
              <Link to="/recipes" onClick={() => this.HandleLogout()} className="navbar-item is-active">
                Log out
              </Link>
            }
            <span className="navbar-item">

            </span>
          </div>
        </div>
      </div>
    </nav>
  }
}
export default NavBar