import React, {useState, useEffect} from "react"
import Sakshi from "../../assets/images/Resume_Muskan_Debnath.pdf"
import Reveal from "react-reveal/Reveal"
import Fade from "react-reveal/Fade"
import Blast from "../../components/BlastAnimation/Blast"
import Cards from "../../components/skillsCards/Cards"
import "./skills.scss";

const skillsArray = ["S", "k", "i", "l", "l","s","e","t"];
const Skills = ()=>{
    const [letterClass, setLetterClass] = useState("text-animate");

     React.useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  });

    return (
      <>
          <div className="fake-big">Skills</div>
          <div className="section-skills-wrapper " style={{paddingTop:'0.5rem'}}>

            <article className="section-skills-description">
              <div>
                <h2 aria-label="About & Skills">
                  <Blast
                    letterClass={letterClass}
                    arrayStr={skillsArray}
                    indexLetter={15}
                  />
                </h2>
                <div style={{maxWidth:"700px"}}>
                <Fade bottom>
                  <p>
                  I love to keep a variety of tools in my tech stack. I also make sure to be pro at using one tool before moving on to the next. I keep myself up to date with the latest technologies around.

Looking for a role in a company with the opportunity to work with the latest technologies on challenging and diverse projects.  
                  </p>
                </Fade>
                {/* <Fade bottom>
                  <p >
                    I’m from Ivory Coast but currently living in Nigeria. I’m a
                    freelancer who loves building cool UI effects, dynamic
                    webpages with amazing animations and creating intuitive,
                    dynamic user experiences. I also love to reach out to new
                    opportunities accross the globe that will enhance my skills
                    and get the opporutinity to work with other programmers as
                    well
                  </p>
                </Fade> */}
                
                </div>
                
                
              </div>
            </article>
            <div >
            <Cards />
          </div>
          </div>
          
          
        
      </>
    );
}

export default Skills