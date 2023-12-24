import React from 'react'


interface eb{
   title:String,
   content:String,
   git:string,
   islive:boolean,
   link:string,
   img:string
}
const Card:React.FC<eb> = (expe) => {
  return (
    <div data-aos="zoom-in-up" className="max-w-sm rounded overflow-hidden shadow-2xl h-hmax flex flex-col justify-between">
      <div className="w-full h-48">
    <img width="100%" height="100%" src={expe.img} alt="Sunset in the mountains"/>
     </div>
    <div className="px-6  flex flex-col  h-56">
    <div className="font-bold text-xl mb-2">{expe.title}</div>
    <p className="text-gray-700 text-base">
    {expe.content}
    </p>
    </div>
    <div className="px-6 pt-4 pb-2 w-full flex justify-between">
    <a href={expe.git}><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Code link</span></a>
    <a href={expe.islive?expe.link:"#"}><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{expe.islive?"Live preview":"will be live"}</span></a>
    </div>
    </div>
  )
}

export default Card