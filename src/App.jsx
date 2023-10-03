// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Content from "./components/Content"
import ContentAdd from './components/ContentAdd'

function App() {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <Content />
      <ContentAdd />
    </div>
  )
}

export default App
