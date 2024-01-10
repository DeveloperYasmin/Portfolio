import React from 'react'
import Section from './common/Section'
import {FaLinkedin} from "react-icons/fa"
import mobile from "../Assets/mobile.png"

const contact = () => {
  const SOCIAL=[
    {
        id:1,
        link:"https://www.linkedin.com/in/yasmin-banu/",
        icon:<FaLinkedin/>
    }
];
  return (
    <Section title="Contact📞" subtitle="These are the ways you can get in touch with me.Hope to hear from you soon :)">
    <div className='flex flex-col items-center justify-center gap-8 text-center'>
      <div><img className='w-32 h-32' src={mobile} alt="contact"/></div>
      <div><p className='max-w-xs md:max-w-lg font-extralight'>
        Iam open to talk regarding freelancing or full-time opportunities.Feel free to contact
        me using your preferred medium.
        </p></div>
      <div className='flex items-center justify-evenly text-5xl'>
        {SOCIAL.map(({id,link,icon})=>(
          <a className='duration-300 ease-in-out hover:scale-110  hover:text-rose-600' key={id} traget="_blank" rel="noopener noreferrer" href={link}>{icon}</a>
        ))}
      </div>
      <div className='p-8 text-left w-full'>
        <form action="https://getform.io/f/6d840478-adb6-4176-9c84-882d9fdc563f" method="POST">
          <div className='gap-4 w-full'>
            <div className='flex flex-col'>
              <label className='text-xl capitalize py-2 font-extralight'>name</label>
              <input type="text" name="name" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'/>
            </div>

            <div className='flex flex-col'>
              <label className='text-xl capitalize py-2 font-extralight'>phone</label>
              <input type="text" name="phone" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'/>
            </div>

            <div className='flex flex-col'>
              <label className='text-xl capitalize py-2 font-extralight'>email</label>
              <input type="text" name="email" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'/>
            </div>



            <div className='flex flex-col'>
              <label className='text-xl capitalize py-2 font-extralight'>message</label>
              <textarea name="message" rows="10" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 resize-none dark:text-white'></textarea>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <button className='my-8 bg-gradient-to-r from-rose-600 to-teal-500
             text-white px-5 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200'>send message</button>

          </div>
        </form>
        </div>
    </div>
    
    </Section>
  )
}

export default contact