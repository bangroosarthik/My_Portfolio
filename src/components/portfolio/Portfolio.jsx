

import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    { id: 1, title: "Foodish", img: "/Foodish.png", desc: "Leveraged live SWIGGY APIs to fetch restaurant data dynamically. Implemented shimmer effect for seamless loading and utilized the Redux Toolkit for efficient state management. Utilized React features like lazy loading, custom hooks, and followed the Single Responsibility Principle to enhance scalability and maintainability.", code: "https://github.com/bangroosarthik/Foodish" },
    { id: 2, title: "StatusQuo", img: "/StatusQuo.png", desc: "An AI-driven tool designed to manage GitHub repositories efficiently by analyzing tasks and providing insightful analytics. Analyzes the GitHub repository and provides real-time task updates and analytics.", code: "https://github.com/bangroosarthik/status-quo", liveLink: "https://status-quo-frontend.vercel.app/" },
    { id: 3, title: "AR App", img: "/AR App.webp", desc: "Developed a fully-fledged AR App for navigation/path finding using Unity 3D game engine for our Computer Engineering Department as part of my Inhouse Internship. Achieved exact navigation using Vuforia for AR Tracking", code: "https://github.com/bangroosarthik/Internship" },
    { id: 4, title: "URL_Tracker", img: "/Url.jpg", desc: "A URL tracker with note-keeping functionality is a tool designed to assist users in organizing and managing their online research and browsing activities. As users navigate the web, the tracker allows them to save and store URLs of visited websites, enabling easy reference and retrieval later. In addition to capturing web addresses, the tool includes a note-taking feature, allowing users to jot down brief annotations, comments, or key information related to each saved URL.", code: "https://github.com/bangroosarthik/URL_Tracker" },
    { id: 5, title: "Other Projects", img: "/github.png", desc: "You can check out my Github for my other projects.", code: "https://github.com/bangroosarthik?tab=repositories" }
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <a href=""><h2>{item.title}</h2></a>
                        <p>{item.desc}</p>
                        <button><a href={item?.liveLink ? item?.liveLink : item?.code}>Source code</a></button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio">
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
