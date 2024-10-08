import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"
const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar />
        <div className="wrapper">
          <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>sarthikbang03@gmail.com</motion.span>
          <div className="social">
            <a href="https://www.linkedin.com/in/sarthik-bangroo-b877a4250/"><img src="/linkedin.jpeg" alt="" /></a>
            <a href="https://www.instagram.com/sarthik._bangroo/"><img src="/instagram.png" alt="" /></a>
        </div>
        </div>
    </div>
  )
}

export default Navbar