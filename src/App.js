import React from 'react'
import './App.css'
import Intro from './components/Intro/Intro'
import { Navbar } from './components/Navbar/Navbar'
import Services from './components/Services/Services'

const App = props => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Services />
    </div>
  )
}

App.propTypes = {}

export default App
