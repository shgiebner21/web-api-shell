import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Pharmacies from './pages/pharmacies'
import Pharmacy from './pages/pharmacy'


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <main>
            <Route exact path='/pharmacies' component={Pharmacies} />
            <Route exact path='/' component={Login} />
            Route exact path='/pharmacy' component={Pharmacy} />

          </main>
          {}
        </div>
      </BrowserRouter>
    )
  }
}

export default App
