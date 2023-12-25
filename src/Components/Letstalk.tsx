import React from 'react'
import { mediaicons } from '../Data'
const Letstalk = () => {
  return (
    <section className='w-full  bg-yellow-400 pb-16 pt-4  flex justify-center'>
       <div id='contact' className='w-11/12 flex flex-col items-center mt-10'>
            <p data-aos="zoom-in" className='text-5xl font-bold'>Let's Talk</p>
            <div  data-aos="fade-up" className='flex mt-14 gap-10'>
              <a href="https://api.whatsapp.com/send/?phone=9302988556&text&type=phone_number&app_absent=0">
               <span className='flex flex-col items-center'>
                <div className='hover:scale-125 transition duration-1000'>
                {mediaicons.whatsapp}
                </div>
                <p className='text-white'>Whatsapp</p>
                </span>
                </a>
                <a href="https://www.instagram.com/siddakrajpal/">
                <span className='flex flex-col items-center '>
                <div className='hover:scale-125 transition duration-1000'>
                {mediaicons.instaicon}
                </div>
                <p className='text-white'>Instagram</p>
                </span>
                </a>
                <a href="https://www.linkedin.com/in/siddak-rajpal-21b32b233/">
                <span className='flex flex-col items-center '>
                <div className='hover:scale-125 transition duration-1000'>
                {mediaicons.linkdinicon}
                </div>
                <p className='text-white'>linkedin</p>
                </span>
                </a>
            </div>
            <p className=' font-medium mt-6 text-lg '>Made by siddak rajpal </p>
       </div>
    </section>
  )
}

export default Letstalk