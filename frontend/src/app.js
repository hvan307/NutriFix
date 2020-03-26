import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DisplayRecipes from './DisplayRecipes'
import DisplaySingleRecipe from './SingleRecipe'
import Register from './components/Register'
import './style.scss'

const App = () => {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/recipes" component={DisplayRecipes} />
      <Route exact path="/recipe/:id" component={DisplaySingleRecipe} />
      <Route exact path="/register" component={Register}/>
    </Switch>
  </BrowserRouter>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)