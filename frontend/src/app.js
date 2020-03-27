import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DisplayRecipes from './DisplayRecipes'
import DisplaySingleRecipe from './SingleRecipe'
import Register from './components/Register'
import Login from './components/Login'
import './style.scss'
import MyRecipes from './MyRecipes'
import NewRecipe from './components/NewRecipe'
import Navbar from './components/NavBar'

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/recipe/:id" component={DisplaySingleRecipe} />
      <Route exact path="/myrecipes/new" component={NewRecipe} />
      <Route exact path="/register" component={Register}/>
      <Route exact path="/myrecipes" component={MyRecipes} />
      <Route exact path="/recipes" component={DisplayRecipes} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)