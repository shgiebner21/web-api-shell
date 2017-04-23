import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landing'
import Signup from './pages/signup'
import Login from './pages/login'


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <main>
            <Route exact path='/' component={LandingPage} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
          </main>
          {}
        </div>
      </BrowserRouter>
    )
  }
}

export default App
