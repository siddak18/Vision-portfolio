import React, { useEffect, useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart'

const Skills = () => {
  const [screenw,setsceenw]=useState(window.innerWidth);
  useEffect(()=>{
    const hadlere=()=>{
      setsceenw(window.innerWidth);
      if(window.innerWidth<800){
        setsceenw(window.innerWidth+100);
      }
      console.log(screenw);
    };

    window.addEventListener('resize',hadlere);

    return ()=>{
     window.removeEventListener('resize',hadlere);
    }
  },[screenw]);
  const dataset = [
    {
      london: 59,
      paris: 57,
      newYork: 86,
      seoul: 100,
      month: 'HTML',
    },
    {
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 90,
      month: 'CSS',
    },{
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 80,
      month: 'SCRIPT',
      
    },{
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 70,
      month: 'REACT',
      
    },{
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 20,
      month: 'TS',
    },{
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 25,
      month: 'Mongo',
    },{
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 40,
      month: 'Expres',
    }
  ]
  const chartSetting = {
    xAxis: [
      {
        label: 'Skills',
      },
    ],
      width:screenw-150,
      height:600,
  };
    const valueFormatter = (value: number) => `${value}%`;
  return (
    <section className='w-full flex flex-col justify-center items-center'>
    <div id='skills' className='w-11/12'>
      <p data-aos="fade-up" className='mt-6 text-4xl text-slate-400 font-semibold'>My Skills</p>
      <hr data-aos="fade-up" className=' h-n mt-3 bg-slate-400' />
      <div className='w-full'>
        <div className='w-full '>
      <p data-aos="fade-up" className='mt-4 font-medium text-3xl'> Here are my skills</p>
      <div className='w-full flex  flex-row-reverse mt-10'>
        <div className='w-full ' data-aos="zoom-in-up">
      {/* <ResponsiveChartContainer
      series={[
        { type:'bar', data: [1, 2, 3, 2, 1] },
  
      ]}
    
    > */}
      <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Skills out of 100', valueFormatter }]}

      layout="horizontal"
      {...chartSetting}
      />
    {/* </ResponsiveChartContainer> */}
    </div>
  
      </div>
      </div>
      
      </div>
    </div>
    </section>
  )
}

export default Skills