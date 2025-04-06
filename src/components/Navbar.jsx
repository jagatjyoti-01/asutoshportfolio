import React from 'react'
import logo from "../assets/download1.png"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter,FaFilePdf  } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";


function Navbar() {
  const handleLinkClick = (url) => {
    window.open(url, '_blank'); // Open link in a new tab
  };
  const handleResumeClick = () => {
    window.open('/portfolioashutoshh.pdf', '_blank'); // Open the resume in a new tab or trigger download
  };
  return (
    <nav className='  mb-20 flex item-center justify-between py-6 '>
        <div className='flex flex-shrink-0 item-center text-bold text-3xl'>
            {/* <img className='mx-2 w-12 cursor-pointer hover:opacity-75 pointer-events-auto '  src={logo} alt="logo" /> */}
            {'</>'}
        </div>
        <div className='mx-8  flex item-center justify-center gap-4 text-2xl cursor-pointer' >
        {/* <FaLinkedin onClick={() => handleLinkClick('https://www.linkedin.com/in/jagat-jyoti-dash-4957a8229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')} />
            

            
            <FaGithub onClick={() => handleLinkClick('https://github.com/jagatjyoti-01')} />
            <FaSquareInstagram onClick={() => handleLinkClick('https://www.instagram.com/mr_jyoti_0.1?igsh=OGJjNjk0bTNicXF5')} />
            <FaTwitter onClick={() => handleLinkClick('https://x.com/JagatJyoti_01?t=q-e_pTOlRMhHlEixwJnWoA&s=08')} /> */}
            <FaSquareUpwork onClick={() => handleLinkClick('https://www.upwork.com/freelancers/~0194a0095c4b336955')} />
             <FaFilePdf  onClick={() => handleResumeClick()} />

        </div>
        
    </nav>
  )
}

export default Navbar
