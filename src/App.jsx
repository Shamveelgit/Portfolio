import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import { root } from 'postcss'
import { useInterSectionObserver } from './Hooks/observer.js'



function App() {

  const [navlink,setNavlink] = useState('home')

  
  return (
    <>
      <Header pageNav={navlink} setPageNav={setNavlink} />
      <Home pageNav={navlink} setPageNav={setNavlink} />
      <Skills pageNav={navlink} setPageNav={setNavlink} />
      <About  pageNav={navlink} setPageNav={setNavlink}/>
    </>
  )
}

export default App
