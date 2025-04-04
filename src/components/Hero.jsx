import React, { useState, useEffect } from 'react'
import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/asutoshprofile.jpg"
import { motion } from "framer-motion"

const container =(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1 ,
        transition:{duration:0.5,delay:delay},
    },
});
const roles = ["Full Stack Developer",  "Designer","Coder", "Freelancer", "Photographer"];


function Hero() {
    // const [currentRole, setCurrentRole] = useState(0);
    // useEffect(() => {
    //     const roleInterval = setInterval(() => {
    //         setCurrentRole(prevRole => (prevRole + 1) % roles.length);
    //     }, 2000); // Change role every 2 seconds

    //     return () => clearInterval(roleInterval);
    // }, []);
    const [currentRole, setCurrentRole] = useState(roles[0]);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const fullText = roles[loopNum % roles.length];
            setDisplayedText(isDeleting ? fullText.substring(0, displayedText.length - 1) : fullText.substring(0, displayedText.length + 1));

            if (!isDeleting && displayedText === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }

            setTypingSpeed(isDeleting ? 30 : 150);
        };

        const typingTimer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(typingTimer);
    }, [displayedText, isDeleting, loopNum, typingSpeed]);
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                               variants={container(0)}
                               initial="hidden"
                               animate="visible"

                            className='pb-16 text-6xl md:text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Ashutosh Sahu</motion.h1>
                        <motion.span   variants={container(0.5)}
                               initial="hidden"
                               animate="visible" 
                               className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                            {/* Full Stack Developer */}
                            A {displayedText}
                        </motion.span>
                         <motion.p   variants={container(1)}
                               initial="hidden"
                               animate="visible" className='my-2 max-w-xl py-6 font-light tracking-tighter '>{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img
                        initial={{x:100,opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{duration:1,delay:1.2}}
                         src={profilePic} alt="jagat jyoti" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hero
