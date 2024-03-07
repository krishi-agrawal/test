import React from 'react'
import Header from '../../components/header/Header'
import About from '../about/About'
import Contact from '../contact/Contact'
import Skills from '../skills/Skills'
import ProjectPage from '../project/ProjectPage'
import "./home.scss"

const Home = () => {
  return (
    <>
    <Header/>
    <section className='section-about'>
      <About/>
    </section>
    
    <section className='section-skills'>
      <Skills/>
    </section>
    <ProjectPage/>
    <Contact/>
    </>
    
  )
}


export default Home

