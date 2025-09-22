import {useState, useEffect} from 'react'

import './App.css'
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Hero from './component/Hero'
import Team from './component/Team'
import Nav from './component/headers/Nav'

import AOS from 'aos'
import IpadNav from './component/headers/IpadNav'

function App() {

 useEffect(() => {
  AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
  

    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'

  })
 
 }, []);

  return (
    <>
    <div>
    <div className="max-sm:hidden">
    <IpadNav />
    </div>
    <div className="sm:hidden">
    <Nav/>
    </div>
       
      <Hero />
      
       <Team />
      
      <About /> 
       <div/>
      
    
         <Contact />
       <Footer/> 
       </div>
    </>
  )
}


export default App
