import React from 'react'
import { Link } from 'react-router-dom'
// import NavBar from './NavBar'
import auth from '../lib/auth'

const Hero = () => {
  const isLoggedIn = auth.isLoggedIn()
  return <section className="hero is-info is-medium">
    {/* <div className="hero-head"> */}
    {/* <NavBar /> */}
    {/* </div> */}

    <div className="hero-body">
      <div className="container has-text-centered">
        <p className="title">
          title
        </p>
        <p className="subtitle">
          Subtitle
        </p>
      </div>
    </div>

    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <div className="container">
          <ul>
            <li className="">
              <Link to="/recipes">All Recipes</Link>
            </li>
            {isLoggedIn &&
              <li>
                <Link to="/myrecipes">My Recipes</Link>
              </li>
            }
            {isLoggedIn &&
              <li>
                <Link to="/myrecipe/new">New Recipe</Link>
              </li>
            }

            {/* <li>
              <a>Grid</a>
            </li>
            <li>
              <a>Elements</a>
            </li>
            <li>
              <a>Components</a>
            </li>
            <li>
              <a>Layout</a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  </section>

}

export default Hero