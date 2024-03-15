import React from 'react'
import Section from './common/Section'
import {FaGithub} from "react-icons/fa"
import food from "../Assets/food.png"
import netflix from "../Assets/netflixgpt.png"
import youtube from "../Assets/youtube.png"
import calci from "../Assets/calci.png"
import foodie from "../Assets/foodie.png"
import posts from "../Assets/posts.png"


const Portfolio = () => {
    const projects=[
        {
            id:1,
            image:food,
            title:"Food Ordering App",
            github:"https://github.com/DeveloperYasmin/Food-Ordering",
            ghpage:"https://developeryasmin.github.io/OrderingFood/"
        },
        {
            id:2,
            image:netflix,
            title:"Netflix-GPT",
            github:"https://github.com/DeveloperYasmin/Netflixproject",
            ghpage:"https://developeryasmin.github.io/Netflixproject/"

        },
        {
            id:3,
            image:youtube,
            title:"Youtube-Clone",
            github:"https://github.com/DeveloperYasmin/Youtube",
            ghpage:"https://developeryasmin.github.io/Youtube/"

        },
        {
            id:4,
            image:calci,
            title:"Advance Calculator",
            github:"https://github.com/DeveloperYasmin/ReactJs-Calculator",
            ghpage:"https://developeryasmin.github.io/ReactJs-Calculator/"


        },
        {
            id:5,
            image:posts,
            title:"Yasmin Posts",
            github:"https://github.com/DeveloperYasmin/yasmin-post",
            ghpage:"https://yasmin-post.vercel.app/dashboard"


        },
        {
            id:6,
            image:foodie,
            title:"Foodie",
            github:"https://github.com/DeveloperYasmin/foodreceipe",
            ghpage:"https://foodie-beta-eight.vercel.app/"
            


        }


           ]
  return (
    <Section title="Portfolio 📝" subtitle="These are all the projects that I have worked on.Some of them I have worked before I gained some experience.So go gentle on them.">
   
   <div className='grid gap-8 lg:gap-14  lg:grid-cols-2'>
    {projects.map(({id,title,image,github,ghpage})=>(
        
        <div key={id} className='max-w-lg flex shadow-lg duration-300 ease-in-out hover:scale-110
        shadow-gray-300 rounded-2xl '>
           
           <a href={ghpage} className='' target="_blank" rel='noopener noreferrer' >
                       <img src={image} alt={title} className='w-2/3 md:w-96 h-72'/>
 
           </a>

           
           <div className='w-2/3 flex flex-col items-center justify-evenly p-1'>
            <h2 className="text-xl">{title}</h2> 
            <a href={github} className='text-5xl cursor-pointer duration-150 hover:scale-110' target="_blank" rel='noopener noreferrer' ><FaGithub/></a>
            </div>
            </div>
    ))}
    </div>
    </Section>
  )
}

export default Portfolio