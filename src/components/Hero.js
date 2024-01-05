import React from 'react'
import {FaLinkedin,FaArrowDown} from "react-icons/fa"
import { TbBrandLeetcode } from "react-icons/tb";
import avatar from "../Assets/avatar.png"

const Hero = () => {
    const SOCIAL=[
        {
            id:1, 
            link:"https://leetcode.com",
            icon:<TbBrandLeetcode/>
        },
        {
            id:2,
            link:"https://linkedin.com",
            icon:<FaLinkedin/>
        }
    ];

    window.addEventListener("scroll",function () {
        const downArrow=document.querySelector(".down-arrow")
        if(this.scrollY>=90) downArrow.classList.add("hide-down-arrow");
        else downArrow.classList.remove("hide-down-arrow")
    })

    
  return (
    <section className=' min-h-screen flex flex-col justify-start items-center p-5 text-center'>
        <h2  className='text-5xl text-rose-600 uppercase font-bold'>Yasmin Banu</h2>
        <h3 className='py-3 text-2xl'>Front End Developer</h3>
        <p className='max-w-xl font-light text-gray-500'>Hello <span className='animate-pulse text-4xl'>👋🏻</span>,
             welcome to my site.I am a freelance Front End Developer. I love to work on Web dev,Mobile dev and automation projects</p>
       <div className='flex justify-evenly py-8 lg:py-16 text-5xl w-full md:w-1/3'>
        {SOCIAL.map(({id,link,icon})=>(
            <a href={link} key={id} target='_blank' rel='noopener noreferrer' className=' cursor-pointer duration-300 hover:text-rose-600 '>{icon}</a>
        ))}
        </div>
       <div className=''>
        <img src={avatar} alt="avatar" className='w-60 object-cover object-top bg-gradient-to-b from-rose-600 rounded-xl h-60 md:w-72 md:h-72'/>
        <a href="/yash-resume.pdf" download={true} className='flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg'> Resume</a>
       </div>
         <div className='mt-10 down-arrow'>
            <FaArrowDown className='text-gray-400 text-2xl animate-bounce'/>
         </div>
       
        </section>
  )
}

export default Hero