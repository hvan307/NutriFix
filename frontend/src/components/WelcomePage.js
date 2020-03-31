import React from 'react'
// import Hero from './Hero'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
  return <>
  <section className="hero is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title has-text-centered homepage-text">
          NutriFix<small>™</small>
        </h1>
        <button className="button is-normal">
          <Link to={'/recipes'}>
            {'Recipes'}
          </Link>
        </button>
      </div>
    </div>
  </section>

  </>
}

export default WelcomePage