import { useRef, useState } from "react";
import "./Contact.scss";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_a6e3qwq', 'template_8q7u326', formRef.current, 'HprfSSGxRpEdMQZ8y')
            .then((result) => {
                setError(false);
                setSuccess(true);
                formRef.current.reset(); // Clear input fields on success
                setTimeout(() => {
                    setSuccess(false);
                }, 3000); // Clear success message after 3 seconds
            }, (error) => {
                setError(true);
            });
    };

    return (
        <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Connect <br />With Me</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>sarthikbangroo@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Contact</h2>
                    <span>+918715063565</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>LinkedIn</h2>
                    <span><a href="https://www.linkedin.com/in/sarthik-bangroo-b877a4250/">SarthikBangroo</a></span>
                </motion.div>
            </motion.div>
            <motion.div className="formContainer">
                <motion.form ref={formRef} onSubmit={sendEmail}>
                    <input type="text" placeholder="Name" name="name" />
                    <input type="email" required placeholder="Email" name="email"/>
                    <textarea rows={8} placeholder="Enter text" name="message"/>
                    <p>{success && "Email sent Successfully!! 🚀"}</p>
                    <p>{error && "Error"}</p>
                    <button>Submit</button>
                </motion.form>
            </motion.div>
        </motion.div>
    );
};

export default Contact;
