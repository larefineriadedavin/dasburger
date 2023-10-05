// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ContentMenu from "./components/ContentMenu"
import ContentAd from './components/ContentAd'

function App() {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <ContentMenu />
      <ContentAd />
    </div>
  )
}

export default App
