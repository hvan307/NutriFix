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
        <p className="title nutrifix">
          NutriFix<small>™</small>
        </p>
        <p className="subtitle">
          Making Nutrition Quick And Easy
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
            <li>
              <Link to="/foodsearch">Search Ingredients</Link>
            </li>
            {isLoggedIn &&
              <li>
                <Link to ="/shoppinglist">Shopping List</Link>
              </li>
            }
          </ul>
        </div>
      </nav>
    </div>
  </section>

}

export default Hero