import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DisplayRecipes from './DisplayRecipes'
import DisplaySingleRecipe from './SingleRecipe'
import Login from './components/Login'
import './style.scss'

const App = () => {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/recipes" component={DisplayRecipes} />
      <Route exact path="/recipe/:id" component={DisplaySingleRecipe} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)