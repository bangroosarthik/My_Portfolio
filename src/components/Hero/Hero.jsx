import "./Hero.scss"
import {motion} from "framer-motion"
const textVariants={
    initial:{
        x:-500,
        opacity: 0,
    },
    animate:{
        x:0,
        opacity:1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat: Infinity
        }
    }
}

const sliderVariants={
    initial:{
        x:0,
        
    },
    animate:{
        x:"-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    },
}
const Hero = () => {
  return (
    <div className="Hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">

                <motion.h1 variants={textVariants}>SARTHIK BANGROO</motion.h1>
                <motion.h2 variants={textVariants}>Web Developer and UI/UX designer</motion.h2>
                
                <div className="buttons">
                    <motion.button variants={textVariants}>Checkout my Latest Work Below</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
        </div>

        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            MERN STACK DEVELOPER
        </motion.div>
            <div className="imagecontainer">
                <motion.img src="/Sarthik.jpg"></motion.img>
            </div>
    
        
    </div>
  )
}

export default Hero
