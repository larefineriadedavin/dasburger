// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Content from "./components/Content"
import ContentAd from './components/ContentAd'

function App() {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <Content />
      <ContentAd />
    </div>
  )
}

export default App
