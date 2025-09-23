import {useRef, useEffect} from 'react'

import './App.css'
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Hero from './component/Hero'
import Team from './component/Team'
import Nav from './component/headers/Nav'
import AnimateOnScroll from './component/animation/AnimateOnScroll'
import AOS from 'aos'
import IpadNav from './component/headers/IpadNav'
import { useInView } from 'react-intersection-observer'
function App() {
      

  return (
    <>
    <div>
    <div className="max-sm:hidden">
        <IpadNav />
      </div>
      <div className="sm:hidden">
        <Nav />
      </div>

      <AnimateOnScroll>
        <Hero />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <Team />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <About />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <Contact />
      </AnimateOnScroll>

      <Footer />
       </div>
    </>
  )
}


export default App
