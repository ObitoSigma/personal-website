import React, { Component } from 'react'
import { Router } from '@reach/router'
//import NavBar from './components/NavBar.js'
import NotFound from './pages/NotFound.js'
import Home from './pages/Home.js'

import './App.css'
import './utilities.css'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div className='App-container'>
          <Router>
            <Home path='/' />
            <NotFound default />
          </Router>
        </div>
      </>
    )
  }
}

export default App
