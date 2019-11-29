import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import Repositories from './pages/Result/components/Repositories/Repositories'

function App() {
  return (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/result' component={Result} />
        <Route path='/repositories' component={Repositories} />
    </Switch>
  )
}

export default App
