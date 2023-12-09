import React from 'react'
import { mediaicons } from '../Data'
const Letstalk = () => {
  return (
    <section className='w-full  bg-yellow-400 pb-16 pt-4  flex justify-center'>
       <div id='contact' className='w-11/12 flex flex-col items-center mt-10'>
            <p data-aos="zoom-in" className='text-5xl font-bold'>Let's Talk</p>
            <div  data-aos="fade-up" className='flex mt-14 gap-10'>
               <span className='flex flex-col items-center '>
                {mediaicons.instaicon}
                <p className='text-white'>Whatsapp</p>
                </span>
                <span className='flex flex-col items-center '>
                {mediaicons.instaicon}
                <p className='text-white'>Whatsapp</p>
                </span>
                <span className='flex flex-col items-center '>
                {mediaicons.instaicon}
                <p className='text-white'>Whatsapp</p>
                </span>
            </div>
            <p className=' font-medium mt-6 text-lg '>Made by siddak rajpal </p>
       </div>
    </section>
  )
}

export default Letstalk