import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home-page/home-page.component'

const HatsPage = (props) => {
  console.log(`HatsPage props: ${JSON.stringify(props)}`)
  return (
    <div>
      <h1>MY HATS PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  )
}

export default App
