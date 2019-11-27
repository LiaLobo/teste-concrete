import React, { Fragment }from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'

// import './App.css'

function App() {
  return (
    <Switch>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/result' component={Result} />
      </div>
    </Switch>
  )
}

export default App
