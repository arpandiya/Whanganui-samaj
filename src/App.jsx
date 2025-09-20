

import './App.css'
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Hero from './component/Hero'
import Team from './component/Team'
import Nav from './component/headers/Nav'

function App() {
  

  return (
    <>
      <Nav/>
      <Hero />
      <Team />
     <About />
      <Contact />
      <Footer/>
    </>
  )
}

export default App
