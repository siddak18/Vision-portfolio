import React from 'react'


interface eb{
   title:String,
   content:String,
   git:String,
   islive:String,
   img:string
}
const Card:React.FC<eb> = (expe) => {
  return (
    <div data-aos="zoom-in-up" className="max-w-sm rounded overflow-hidden shadow-2xl">
    <img className="w-full" src={expe.img} alt="Sunset in the mountains"/>
    <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{expe.title}</div>
    <p className="text-gray-700 text-base">
    {expe.content}
    </p>
    </div>
    <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div>
    </div>
  )
}

export default Card