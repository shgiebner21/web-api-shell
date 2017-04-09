import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landing'
import Footer from './components/footer'
import Signup from './pages/signup'
import Login from './pages/login'
import Children from './pages/children'
import Family from './pages/family'
import Child from './pages/child'
import Park from './pages/park'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <main>
            <Route exact path='/' component={LandingPage} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/children' component={Children} />
            <Route path='/family' component={Family} />
            <Route path='/child' component={Child} />
            <Route path='/park' component={Park} />
          </main>
          {}
        </div>
      </BrowserRouter>
    )
  }
}

export default App
