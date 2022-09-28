import React from 'react'
import './App.css'
import Intro from './components/Intro/Intro'
import { Navbar } from './components/Navbar/Navbar'

const App = props => {
  return (
    <div>
      <Navbar />
      <Intro />
    </div>
  )
}

App.propTypes = {}

export default App
