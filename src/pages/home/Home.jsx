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

// export default Home
// import React from 'react'
// // components
// import { Header, Blogs } from '../../components'
// // pages
// import { Contact, About, ProjectPage } from '../../pages'

// const Home = () => {
//   return (
//     <>
//       <Header />
//       <section className="section-about">
//         <About />
//       </section>
//       <ProjectPage />
//       <Blogs />
//       <Contact />
//     </>
//   )
// }

export default Home

