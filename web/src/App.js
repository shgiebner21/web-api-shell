import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './landing'


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <main>
            <Route exact path='/' component={LandingPage} />

          </main>
          {}
        </div>
      </BrowserRouter>
    )
  }
}

export default App
