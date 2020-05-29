import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'

import HomePage from './pages/home-page/home-page.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SigninAndSignupPage from './pages/sigin-and-signup/sigin-and-signup.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SigninAndSignupPage} />
      </Switch>
    </div>
  )
}

export default App
