// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ContentMenu from "./components/ContentMenu"
import ContentAd from './components/ContentAd'
import ContentSlider from './components/ContentSlider'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <ContentMenu />
      <ContentAd />
      <ContentSlider />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
