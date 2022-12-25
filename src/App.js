import React from 'react'
import './App.css'
import Intro from './components/Intro/Intro'
import { Navbar } from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Experience from './components/Experience/Experience'
import Works from './components/Works/Works'

const App = props => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
    </div>
  )
}

App.propTypes = {}

export default App
