import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

// images from the asset folder in the image file

import jointwrite_1 from "../../assets/images/jointwrite_1.png"
import VCFORM from "../../assets/images/vc_form.png"
import portfolio_pic from "../../assets/images/portfolio-pic.png"
import hnm_pic from "../../assets/images/hnm-pic.png"

// projects' id, name, stacks, icon and url data
export const projects = [
  {
    id: 1,
    name: 'Video-Call Application',
    desc:
      'A command line interface that\'s published on NPM, using it, one can authenticate herself as an existing user or new user and store data in the form of a key-value store directly from their terminal',
    stack: 'WEBRTC | SOCKET.IO | REACT.JS | NODE.JS | EXPRESS.JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/krishi-agrawal/video-call-WEBRTC',
    },
    imgUrl: VCFORM,
  },

  {
    id: 4,
    name: 'JointWrite',
    desc: 'Designed and developed an application for the user specially to keep track of errands or tasks that need to be done',
    stack: 'SOCKET.IO | REACT.JS | NODE.JS | EXPRESS.JS | MONGODB ',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/krishi-agrawal/JointWrite',
    },
    imgUrl:jointwrite_1
  },
  {
    id: 3,
    name: 'Ecommerce React Website ',
    desc: 'Developed the frontend of H&M website using React.js',
    stack: 'REACT.JS | CSS | JAVASCRIPT ',
    imgUrl: hnm_pic,

    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/krishi-agrawal/shopping-website',
    },
    // website: {
    //   icon: <TbWorld />,
    //   url: 'https://gpt3-openai-project.netlify.app/',
    // },
  },
  {
    id: 2,
    name: 'Portfolio Website',
    desc: 'A portfolio website with a good UI showcasing my projects.',
    stack: 'REACT.JS | CONTEXT API | SASS | JAVASCRIPT',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/krishi-agrawal/krishay-portfolio',
    },
    // website: {
    //   icon: <TbWorld />,
    //   url: 'https://gericht-restaurant-website.netlify.app/',
    // },
    imgUrl:portfolio_pic,
  },

  // {
  //   id: 5,
  //   name: 'SimonGame',
  //   desc: 'A project that displays all information about a country',
  //   stack: 'React JS',
  //   gitHubUrl: {
  //     icon: <GrGithub />,
  //     url: 'https://github.com/Almarex-Web-Dev/rest-countries-api-project',
  //   },
  //   website: {
  //     icon: <TbWorld />,
  //     url: 'https://rest-countries-web-app-project.netlify.app/',
  //   },
  //   imgUrl: SimonGame,
  // },


]
