
import Card  from './Card'
import React from 'react'

const Works = () => {
  const expens=[{
    title:"Expense Tracker",
    content:"The tech stack I used to create the expense tracker includes React and Redux for the frontend. On the backend, I utilized Express and Node.js, and for the database, I employed MongoDB. The application follows a CRUD (Create, Read, Update, Delete) approach, providing functionality to manage and track finances.",
    git:"",
    islive:"will be live soon",
    link:"#",
    img:"https://siddakrajpal.netlify.app/project1.png"
  },{
    title:"Expense Tracker",
    content:"The tech stack I used to create the expense tracker includes React and Redux for the frontend. On the backend, I utilized Express and Node.js, and for the database, I employed MongoDB. The application follows a CRUD (Create, Read, Update, Delete) approach, providing functionality to manage and track finances.",
    git:"",
    islive:"will be live soon",
    link:"#",
    img:"https://siddakrajpal.netlify.app/todo.png"
  },{
    title:"Expense Tracker",
    content:"The tech stack I used to create the expense tracker includes React and Redux for the frontend. On the backend, I utilized Express and Node.js, and for the database, I employed MongoDB. The application follows a CRUD (Create, Read, Update, Delete) approach, providing functionality to manage and track finances.",
    git:"",
    islive:"will be live soon",
    link:"#",
    img:"https://siddakrajpal.netlify.app/project1.png"
  },{
    title:"Expense Tracker",
    content:"The tech stack I used to create the expense tracker includes React and Redux for the frontend. On the backend, I utilized Express and Node.js, and for the database, I employed MongoDB. The application follows a CRUD (Create, Read, Update, Delete) approach, providing functionality to manage and track finances.",
    git:"",
    islive:"will be live soon",
    link:"#",
    img:"https://siddakrajpal.netlify.app/project1.png"
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