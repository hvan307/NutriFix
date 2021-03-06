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
import FoodSearchBar from './components/FoodSearchBar'
import EditRecipe from './components/EditRecipe'
import WelcomePage from './components/WelcomePage'
import ShoppingList from './components/ShoppingList'

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/recipe/:id/edit" component={EditRecipe}/>
      <Route exact path="/recipe/:id" component={DisplaySingleRecipe} />
      <Route exact path="/myrecipe/new" component={NewRecipe} />
      <Route exact path="/register" component={Register}/>
      <Route exact path="/myrecipes" component={MyRecipes} />
      <Route exact path="/recipes" component={DisplayRecipes} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/foodsearch" component={FoodSearchBar} />
      <Route exact path="/shoppinglist" component={ShoppingList} />
      <Route exact path="/" component={WelcomePage} />
    </Switch>
  </BrowserRouter>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)