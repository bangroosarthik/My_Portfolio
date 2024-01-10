import { useRef } from "react"
import "./Portfolio.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion"
const items =[
    {id:1,title:"Foodish",img:"/Foodish.jpg", desc:"Foodish is a FullStack Food Ordering Website. At Foodish, we believe in the extraordinary power of food to bring people together, evoke cherished memories, and create joyous moments. Our culinary journey started with a simple yet profound vision - to be more than just a food website; we aspire to be your trusted companion in exploring the diverse world of flavors.",code:"https://github.com/bangroosarthik/Foodish"},
    {id:2,title:"Hireon",img:"/Hireon.png", desc:"HireOn is a FullStack Recruitment Website that helps both companies and employees. A recruitment website is an online platform dedicated to facilitating the process of hiring and job-seeking. It serves as a virtual space where employers and job seekers can connect, making the recruitment process more efficient and accessible. ",code:"https://github.com/Srujanmukund24/PBL_F4_Group_2/tree/frontend"},
    {id:3,title:"URL_Tracker",img:"/Url.png", desc:"A URL tracker with note-keeping functionality is a tool designed to assist users in organizing and managing their online research and browsing activities. As users navigate the web, the tracker allows them to save and store URLs of visited websites, enabling easy reference and retrieval later. In addition to capturing web addresses, the tool includes a note-taking feature, allowing users to jot down brief annotations, comments, or key information related to each saved URL.",code:"https://github.com/bangroosarthik/URL_Tracker"},

]

const Single=({item})=>{

    const ref= useRef();
    const {scrollYProgress}= useScroll({target:ref});

    const y=useTransform(scrollYProgress,[0,1],[-300,300]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button><a href={item.code}>Source code</a></button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


const Portfolio = () => {
    const ref=useRef();
    const {scrollYProgress}= useScroll({target:ref,offset:["end end","start start"]});

    const scaleX= useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })
    return (
      <div className="portfolio">
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar">

            </motion.div>
        </div>
            {items.map(item => (
            <Single item={item} key={item.id} />
            ))}
      </div>
    );
  };
  

export default Portfolio