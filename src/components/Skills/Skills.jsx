import "./Skills.scss"
import {motion,useInView} from "framer-motion"
import { useRef } from "react"
const variants= {
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}
const Skills = () => {

    const ref=useRef()

    const isInView = useInView(ref,{margin:"-100px"})



  return (
    <motion.div className="skills" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
        <motion.div className="textContainer" variants={variants} >
            <p>I focus on Building Modern and Responsive<br />
             Web Experiences</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><motion.b whileHover={{color:"orange"}}>Skill </motion.b> <span className="spantitle">Set</span></h1>
            </div>
            <div className="title">
                <h2><motion.b whileHover={{color:"orange"}}>FOR Professional </motion.b>
                <span className="spantitle"> Expertise. </span></h2>
                <button>WHAT ARE MY STRENGHTS?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box"  whileHover={{background:"lightgray", color:"black"}}>
                <img src="/Html.png" alt="Html image" />                
                <h1>HTML</h1>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <img src="/Css.png" alt=" image" />
                <h1>CSS</h1>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <img src="/JS.png" alt="Html image" />
                <h1>JS</h1>
                
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <img src="/Bootstrap.png" alt="Html image" />
                <h1>BOOTSTRAP</h1>
            </motion.div>
            
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <img src="/React.png" alt="Html image" />
                <h1>REACT</h1>
            </motion.div>

            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <img src="/Sql.png" alt="Html image" />
                <h1>SQL</h1>
            </motion.div>

            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}> 
                <img src="/mongo.png" alt="Html image" />
                <h1>MONGODB</h1>
            </motion.div>
            
            
            
        </motion.div>
    </motion.div>
  )
}

export default Skills;