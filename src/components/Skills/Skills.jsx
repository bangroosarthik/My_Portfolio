import "./Skills.scss"
import {motion, useInView} from "framer-motion"
import { useRef } from "react"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Skills = () => {
    const ref = useRef()
    const isInView = useInView(ref, {margin: "-100px"})

    const skillSet = [
        {img: "/Html.png", name: "HTML"},
        {img: "/css.png", name: "CSS"},
        {img: "/js.png", name: "JS"},
        {img: "/Bootstrap.png", name: "BOOTSTRAP"},
        {img: "/react.png", name: "REACT"},
        {img: "/Sql.png", name: "SQL"},
        {img: "/mongo.png", name: "MONGODB"},
        {img: "/cpp.png", name: "CPP"},
        {img: "/mysql.png", name: "MYSQL"},
        {img: "/c.png", name: "C"},
        {img: "/git.png", name: "Git"},
        {img: "/Nodejs.png",name:"Node JS"},
        {img: "/github.png", name: "GitHub"},
        {img: "/pandas.jpg", name: "Pandas"},
        {img: "/numpy.png", name: "Numpy"},
        {img: "/vs.png", name: "VS Code"},
        {img: "/ec.png", name: "Eclipse"},
        {img: "/post.png", name: "Postman"},
        {img: "/fire.png", name: "Firebase"},
        {img: "/fig.png", name: "Figma"},
        {img: "/canva.png", name: "Canva"},
    ]

    return (
        <motion.div className="skills" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on Building Modern and Responsive<br />
                    Web Experiences
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{color: "orange"}}>Skill </motion.b> <span className="spantitle">Set</span></h1>
                </div>
                <div className="title">
                    <h2><motion.b whileHover={{color: "orange"}}>FOR Professional </motion.b>
                        <span className="spantitle"> Expertise. </span>
                    </h2>
                    <button>WHAT ARE MY STRENGTHS?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                {skillSet.map((skill, index) => (
                    <motion.div key={index} className="box" whileHover={{background: "lightgray", color: "black"}}>
                        <img src={skill.img} alt={`${skill.name} icon`} />
                        <h1>{skill.name}</h1>
                    </motion.div>
                ))}
            </motion.div>

        </motion.div>
    )
}

export default Skills;
