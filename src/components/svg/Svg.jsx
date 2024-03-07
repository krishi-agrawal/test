import React from 'react'
import {motion} from "framer-motion"
const Svg = ({vb, d}) => {
    const pathVariants = {
        hidden : {
          opacity : 0,
          pathLength: 0,
        },
        visible : {
          opacity: 1,
          pathLength: 1,
          transition: {
            duration: 4,
            ease: "easeInOut",
            delay: .2,
          }
        }
      }
  return (
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" height="170px" width="170px" viewBox={vb}>
            <motion.path 
            // fill="none"
            variants={pathVariants}
            initial = "hidden"
            animate = "visible"
            strokeWidth={15}
            stroke="white"
            fill="grey"
            d={d} /></svg>
    </div>
  )
}

export default Svg