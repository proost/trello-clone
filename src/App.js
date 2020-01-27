import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './templates/Login'
import Signup from './templates/Signup'
import Profile from './templates/Profile'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/profile/:id' component={Profile}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App

