import React from 'react'
import Section from './common/Section'
import {FaGithub} from "react-icons/fa"
import p1 from "../Assets/p1.jpg"
import p2 from "../Assets/p2.jpg"
import p3 from "../Assets/p3.jpg"
import p4 from "../Assets/p4.jpg"
import p5 from "../Assets/p5.jpg"
import p6 from "../Assets/p6.jpg"


const Portfolio = () => {
    const projects=[
        {
            id:1,
            image:p1,
            title:"Best App",
            github:"https://github.com/nodejs/node",
        },
        {
            id:2,
            image:p2,
            title:"Best App",
            github:"https://google.com",
        },
        {
            id:3,
            image:p3,
            title:"Age of Empires",
            github:"https://github.com/nodejs/node",
        },
        {
            id:4,
            image:p4,
            title:"Best App",
            github:"https://github.com/nodejs/node",
        },
        {
            id:5,
            image:p5,
            title:"Best App",
            github:"https://github.com/nodejs/node",
        },
        {
            id:6,
            image:p6,
            title:"Best App",
            github:"https://github.com/nodejs/node",
        }
        
    ]
  return (
    <Section title="Portfolio 📝" subtitle="These are all the projects that I have worked on.Some of them I have worked before I gained some experience.So go gentle on them.">
   
   <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>
    {projects.map(({id,title,image,github})=>(
        <div key={id} className='max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden'>
           <img src={image} alt={title} className='w-2/3'/>
           <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
            <h2>{title}</h2> 
            <a href={github} className='text-2xl cursor-pointer duration-150 hover:scale-110' target="_blank" rel='noopener noreferrer' ><FaGithub/></a>
            </div>
            </div>
    ))}
    </div>
    </Section>
  )
}

export default Portfolio