import React, { useState } from 'react'
import {motion, useAnimationControls} from 'framer-motion'


const TextSpan = ({children}) => {

    const controls = useAnimationControls()
    const [isplaying,setIsplaying] = useState(false)

    const rubberBand = () => {
       controls.start({
           transform: [
               "scale3d(1, 1, 1)",
               "scale3d(1.4, .55,1)",
               "scale3d(.75, 1.25, 1)",
               "scale3d(1.25, .85, 1)",
               "scale3d(.9, 1.05, 1)",
               "scale3d(1, 1, 1)",
           ],
           times: [0, .4, .6, .7, .8, .9]
       })
       setIsplaying(true)
    }

  return (
      <motion.span
       animate={controls}
       onMouseOver={() => {if(!isplaying)rubberBand()}}
       onAnimationComplete={() => setIsplaying(false)}
      className=' lg:text-6xl bg-gradient-to-r from-[#FAC5EB] via-[#FFFFFF] to-indigo-400 inline-block text-transparent bg-clip-text'>
      {children}
    </motion.span>
  )
}

export default TextSpan
