import * as React from "react"
// import {motion} from 'framer-motion'

import { motion } from "framer-motion"

const SvgComponent = (props) => (
  <svg
    // width={275}
    // height={368}
    viewBox="0 0 275 368"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      id="Ellipse 1"
      animate={{y:[-40,0,-40]}}
      transition={{
        times:[0,1],
        duraation:5,
        repeat:Infinity,
        type:"keyframes",
        ease:"easeInOut"
      }}
      d="M218 187C337 228.5 251 349 112.5 368C2.31911 368 0 269.629 0 160C6.10352e-05 109 2.31911 -1.52588e-05 112.5 -1.52588e-05C222.681 -1.52588e-05 154 109.5 218 187Z"
      fill="#546a79"
    />

  

  </svg>
)
export { SvgComponent as ReactComponent }
