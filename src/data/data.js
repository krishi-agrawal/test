import React from 'react'
// import {HiCheckBadge} from 'react-icons/hi'
// import {SlBadge} from 'react-icons/si'
import {RiPriceTag2Fill} from 'react-icons/ri'
// react-icons
import { FiGrid, FiLinkedin, FiYoutube, FiFigma } from 'react-icons/fi'
// import { ImBlogger,ImFilm } from 'react-icons/im'
import { VscProject } from 'react-icons/vsc'
import {ImHome2} from 'react-icons/im'
import {
  BsBootstrapFill,
  BsPersonLinesFill,
  BsGithub,
} from 'react-icons/bs'


import { RiContactsLine, RiReactjsLine,RiBook2Line } from 'react-icons/ri'
import {
  SiSass,
  SiJquery,
  SiExpress,
  SiMysql,
  SiPython,
  SiPostman,
  SiCplusplus,
  SiTypescript,
} from 'react-icons/si'

import { GrGithub, GrTwitter, GrInstagram, GrDribbble } from 'react-icons/gr'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiMongodb } from 'react-icons/di'
import { IoLogoJavascript, IoLogoGameControllerB } from 'react-icons/io'
import { FaNodeJs, FaGit } from 'react-icons/fa'

// sidebar menu functionality
const sideBarMenu = [
  {
    text: 'Home',
    icon: <ImHome2 className="link-icon" />,
    url: '/',
  },
  {
    text: 'About',
    icon: <BsPersonLinesFill className="link-icon" />,
    url: '/about',
  },
  {
    text: 'Skills',
    icon: <RiPriceTag2Fill className="link-icon" />,
    url: '/skills',
  },
  {
    text: 'Projects',
    icon: <VscProject className="link-icon" />,
    url: '/project',
  },

  // {
  //   text: 'Blog',
  //   icon: (
  //     <ImBlogger
  //       className="link-icon"
  //       style={{ fill: 'current', stroke: 'current' }}
  //     />
  //   ),
  //   url: '/blog',
  // },
  {
    text: 'Contacts',
    icon: <RiContactsLine className="link-icon" />,
    url: '/contact',
  },
]
// social media icons
const socialIcons = [
  {
    icon: <GrGithub className="icon switch__color" />,
    url: 'https://github.com/krishi-agrawal',
  },
  {
    icon: <FiLinkedin className="icon switch__color" />,
    url: 'https://www.linkedin.com/in/krishiagrawal/',
  },
  {
    icon: <GrInstagram className="icon switch__color" />,
    url: 'https://www.instagram.com/krishiiagrawal/',
  }
 
]
// skills card
const skillSet = [
  {
    icon: <SiCplusplus className="skills-icon switch__color" />,
    spanText: 'C++',
    url: 'https://devdocs.io/cpp/',
  },
  {
    icon: <AiFillHtml5 className="skills-icon switch__color" />,
    spanText: 'HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    icon: <DiCss3 className="skills-icon switch__color" />,
    spanText: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    icon: <IoLogoJavascript className="skills-icon switch__color" />,
    spanText: 'JAVASCRIPT',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
  },
  {
    icon: <SiSass className="skills-icon switch__color" />,
    spanText: 'SASS',
    url: 'https://sass-lang.com/documentation/',
  },

  {
    icon: <BsBootstrapFill className="skills-icon switch__color" />,
    spanText: 'BOOTSTRAP',
    url: 'https://getbootstrap.com/',
  },

  {
    icon: <SiJquery className="skills-icon switch__color" />,
    spanText: 'JQUERY',
    url: 'https://www.w3schools.com/jquery/',
  },
  
  {
    icon: <RiReactjsLine className="skills-icon switch__color" />,
    spanText: 'REACT JS',
    url:
      'https://reactjs.org/',
  },

  {
    icon: <FaNodeJs className="skills-icon switch__color" />,
    spanText: 'NODE',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs',
  },

  {
    icon: <DiMongodb className="skills-icon switch__color" />,
    spanText: 'MONGO DB',
    url: 'https://www.mongodb.com/',
  },
  {
    icon: <SiMysql className="skills-icon switch__color" />,
    spanText: 'MySQL',
    url: 'https://www.mysql.com/',
  },
  {
    icon: <SiExpress className="skills-icon switch__color" />,
    spanText: 'EXPRESS JS',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Express',
  },
  {
    icon: <FaGit className="skills-icon switch__color" />,
    spanText: 'GIT',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
  },
  {
    icon: <BsGithub className="skills-icon switch__color" />,
    spanText: 'GITHUB',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
  },
  // {
  //   icon: <SiFedora className="skills-icon switch__color" />,
  //   spanText: 'Fedora',
  //   url:
  //     'https://getfedora.org/',
  // },
  
  {
    icon: <SiPython className="skills-icon switch__color" />,
    spanText: 'Python',
    url:
      'https://www.python.org/',
  },
  {
    icon: <SiPostman className="skills-icon switch__color" />,
    spanText: 'Postman',
    url: 'https://www.postman.com/',
  },
  // {
  //   icon: <SiPostgresql className="skills-icon switch__color" />,
  //   spanText: 'Postgresql',
  //   url: 'https://www.postgresql.org/',
  // },
  {
    icon: <SiTypescript className="skills-icon switch__color" />,
    spanText: 'Typescript',
    url: 'https://www.typescriptlang.org/',
  },

]

export { sideBarMenu, socialIcons, skillSet }