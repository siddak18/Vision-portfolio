
import Card  from './Card'
import React from 'react'
import img from "../Assets/Screenshot 2023-12-24 210718.png"
import img2 from "../Assets/Screenshot 2023-12-24 211750.png"
const Works = () => {
  const expens=[
    {
      title:"Podcast",
    content:"Built on the Next.js framework and utilizing Material-UI for a polished UI, this project integrates seamlessly with Firebase for backend services. Its core functionality enables users to create podcasts that are converted into text-to-speech using Amazon Polly. The application features intuitive podcast creation with dynamic audio generation capabilities, ensuring a user-friendly experience.",
    git:"https://github.com/siddak18/podcast",
    islive:true,
    link:"https://podcast-bv47-kb7xi88j0-siddak18s-projects.vercel.app/",
    img:"https://drive.google.com/file/d/1iWBIZtutqTmV1jCt0Y13GtrtY5Xvsx3b/view?usp=sharing"
    },
    {
    title:"Expense Tracker",
    content:"The tech stack I used to create the expense tracker includes React and Redux for the frontend. On the backend, I utilized Express and Node.js, and for the database, I employed MongoDB. The application follows a CRUD (Create, Read, Update, Delete) approach, providing functionality to manage and track finances.",
    git:"https://github.com/siddak18/Expense",
    islive:true,
    link:"https://expenses12.netlify.app",
    img:"https://siddakrajpal.netlify.app/project1.png"
  },{
    title:"Todo List",
    content:"It is a CRUD-based web app where Redux is employed for state management. The provided features allow users to create, update, delete, and read todos. Additionally, there is a toggle functionality for todos. For the frontend, React is utilized, and MongoDB Atlas serves as the database",
    git:"https://github.com/siddak18/TodoList",
    islive:false,
    link:"#",
    img:"https://siddakrajpal.netlify.app/todo.png"
  },{
    title:"Uthaan Foundation",
    content:"It is a frontend-only website built using HTML, CSS, and JavaScript. The website is developed for an NGO named Uthaan Foundation, featuring five pages that display data in a structured manner. Additionally, Swiper.js is employed to enhance user experience through carousels.",
    git:"https://github.com/siddak18/saxena",
    islive:true,
    link:"http://www.uthaanfoundation.com/",
    img:img
  },{
    title:"Portfolio",
    content:"The tech stack employed consists of Typescript and Tailwind CSS. To enhance the user experience and add attractiveness to the website, I have incorporated AOS (Animation on Scroll) along with Hover.css for additional interactivity",
    git:"https://github.com/siddak18/Vision-portfolio",
    islive:true,
    link:"https://vision-portfolio-gamma.vercel.app/",
    img:img2
  },
   ]
  return (
    <section className='w-full flex flex-col justify-center items-center'>
    <div id='works' className='w-11/12'>
    <p data-aos="fade-up" className='mt-6 text-4xl text-slate-400 font-semibold'>Works</p>
      <hr data-aos="fade-up" className=' h-n mt-3 bg-slate-400' />
      <div className='w-full flex flex-col justify-center '>
      <p data-aos="fade-up" className='mt-4 font-medium text-3xl'> Here are some of my works.</p>
      <div className='flex  w-full justify-center'>
      <div className='grid mt-10 grid-cols-1 md:grid-cols-2  gap-10  w-max align-middle justify-between items-center'>
    {
      expens.map((work,idx)=>{
        return (
          <Card {...work}></Card>
        )
      })
    }
      </div>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Works
