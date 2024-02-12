import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Fade from "react-reveal/Fade"
import Muskan from "../../assets/images/MuskanDebnath__Resume.pdf"
import Blast from '../BlastAnimation/Blast'
import './header.scss'
import useScript from "./useScript";
import Sidebar from '../sidebar/Sidebar'





const nameArray=["K","r","i","s","h","i",","]
const jobArray=["A"," ","s",'t','u','d','e','n','t',' ','o','f',' ','I','I','I','T','M',' ','G','w','a','l','i','o','r']

const Header = ({url}) => {
  useScript(url)
  const [letterClass, setLetterClass]=useState("text-animate")

  useEffect(()=>{
    setTimeout(()=>{
      setLetterClass("text-animate-hover")
    },4000)
  })
  return (
    <>
    {/* <Sidebar /> */}
    <canvas id="canvas" />
    <div className="container">
    <section className='section-1 header__container'>
        <main className="intro-page">
            <h1>
                <Blast letterClass={letterClass} arrayStr={["H","e","l","l","o","!"]} indexLetter={5}/><br/>
                <Blast letterClass={letterClass} arrayStr={["I","'","m"]} indexLetter={5}/>{" "}
                {/* <span className='sidebar__logo1'>
                        <img src={logo} alt="About image" />
                </span> */}
                <span>
                <Blast letterClass={letterClass} arrayStr={nameArray} indexLetter={15} />
                </span>
                <br/>
                <div className="student">
                <Blast letterClass={letterClass} arrayStr={jobArray} indexLetter={10}/>
                </div>
                <div className="student">
                <Blast letterClass={letterClass} arrayStr={['A','n','d']} indexLetter={33}/>
                </div>
            </h1>
            <ul className='text-desc'>
              <li><span>WEB DEVELOPER</span></li>
              <li><span>UI/UX DESIGNER</span></li>
              <li><span>GRAPHIC DESIGNER</span></li>
              <li><span>PROGRAMMER</span></li>
            </ul>
            
            {/* <Link to={"/contact"} className="contact-button">
              <div>
                <span className='bg switch__bg'></span>
                <span className='base switch__border-color'></span>
                <span className='text'>Contact Me</span>
              </div>
              
            </Link> */}
            {/* <Fade left>
                  <a
                    style={{ marginTop: "2rem" }}
                    href={}
                    download
                    className="contact-button submit-button"
                  >
                    <div>
                      <span className="bg switch__bg"></span>
                      <span className="base switch__border-color"></span>
                      <span className="text">Download CV</span>
                    </div>
                  </a>
                </Fade> */}
              
            
        </main>
    </section>
    </div>
    <div className='buttonContact'>
    <Fade left>
        <a
          href={Muskan}
          download
          className="contact-button submit-button"
        >
          <div>
            <span className="bg switch__bg"></span>
            <span className="base switch__border-color"></span>
            <span className="text">Download CV</span>
            
          </div>
        </a>
      </Fade>
    </div>
    
    </>
  )
}

export default Header
