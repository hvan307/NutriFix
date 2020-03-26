import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DisplayRecipes from './DisplayRecipes'
import DisplaySingleRecipe from './SingleRecipe'
import './style.scss'
import MyRecipes from './MyRecipes'

const App = () => {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/recipe/:id" component={DisplaySingleRecipe} />
      <Route exact path="/myrecipes" component={MyRecipes} />
      <Route exact path="/recipes" component={DisplayRecipes} />
    </Switch>
  </BrowserRouter>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)