import React, { useRef} from "react";
import Fade from "react-reveal/Fade"
import Reveal from "react-reveal/Reveal"
import { socialIcons } from "../../data/data";
import Blast from "../../components/BlastAnimation/Blast";
import Map from "../../components/map/Map"
import emailjs from '@emailjs/browser'

import "./contact.scss"
import { BsExclamationLg,BsPatchCheckFill } from "react-icons/bs";
const Contact=()=>{

  const [letterClass, setLetterClass] = React.useState('text-animate')

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dbsfmsu','template_jdekn68', form.current,'aLI4UJWY4JZDKUfCd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return(
    <>
    
    <section className="contact-section " >
      
    <div className="fake-big">Contact</div>
        <div className="totalPage">

        <div>
        <div>
          <h2 aria-label="contact me" className="contact__heading">
            <Blast letterClass={letterClass} 
            arrayStr={["G","e","t"," ","i","n"," ","T","o","u","c","h"]} 
            indexLetter={22}/>
            
          </h2>
          
          <Fade bottom>
            <p style={{maxWidth:"700px"}}>
            I’m interested in freelance opportunities and I am always ready
                to build projects at anytime, if you have any job offer for me,
                you could use the form below to react out to me or if you've got a project in mind, why not get in touch.
                Let's work together.
            </p>
          </Fade>
        </div>
        <Fade bottom>
        <div className="social-icon-contact">
                {socialIcons.map((icons,index)=>{
                    return(
                        <a href={icons.url} key={index}>
                            {icons.icon}
                        </a>
                    )
                })}
          </div>
        </Fade>
        
        <form ref={form} onSubmit={sendEmail}>
        <Fade bottom>
          <div className="input-wrapper">
            <div className="form-input-group">
              <input 
              type="text"
              name='customer_name'
              placeholder="Your Full Name"
              required
              />
              <span className="switch__bg"></span>
            </div>
            <div className="form-input-group">
              <input 
              type="text"
              name='customer_phone'
              placeholder="Your Phone No"
              />
              <span className="switch__bg"></span>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="form-input-group">
              <input 
              type="text"
              name='customer_email'
              placeholder="Your Email Id"
              required 
              />
              <span className="switch__bg"></span>
            </div>
        </Fade>
        <Fade bottom>
          <div className="form-input-group">
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            />     
            <span className="switch__bg"></span>   
          </div>
        </Fade>
        <Fade left>
          <button className="contact-button submit-button" type="submit">
            <div>
              <span className="bg switch__bg"></span>
              <span className="base switch__border-color"></span>
              <span className="text">Send Message</span>
            </div>
          </button>
        </Fade>
        </form>
        
        </div>
        <div className="google-map">
          <Map />
        </div>

       
        </div>
    </section>

    </>
  )
}

export default Contact
