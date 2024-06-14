import { useEffect, useState } from "react"
import { Navobj } from "../Data";
import { downicon } from "../Data";
import { mediaicons } from "../Data";
import img from '../Assets/2150797600.png'

const Home = () => {
  const data = {
    greet: "Hello, I am Siddak Rajpal",
    designations: ["", "Technical Executive Vision Cse", "Web Developer at Ecell Manit"],
    clginfo:"I'm an undergraduate student at NIT Bhopal.",
    links:{
      github:"https://github.com/siddak18",
      insta:"https://www.instagram.com/siddakrajpal/",
      linkedin:"https://www.linkedin.com/in/siddakrajpal",
      facebook:"https://www.instagram.com/siddakrajpal/",
      twitter:"https://leetcode.com/siddakrajpal/"
    }
  };
  
  const [designationIndex, setDesignationIndex] = useState(0);
  const currentDesignation = data.designations[designationIndex];
  const [displayedDesignation, setDisplayedDesignation] = useState("");
  const [excla,setexcla]=useState(true);
  useEffect(() => {
    if (displayedDesignation !== currentDesignation) {
      const timeout = setTimeout(() => {
        setDisplayedDesignation(
          currentDesignation.substring(0, displayedDesignation.length + 1)
        );
      }, 100); 
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDesignationIndex((designationIndex + 1) % data.designations.length);
        setDisplayedDesignation("");
      }, 1000); 
      return () => clearTimeout(timeout);
    }
  }, [displayedDesignation, designationIndex, currentDesignation]);
  

  useEffect(()=>{
      const exclamation=()=>{
        setexcla(!excla);
      }
      const interval=setInterval(exclamation,800);
      return ()=>{
        clearInterval(interval);
      }
  },[excla]);
  
  return (
    <section className='w-full h-screen bg-gradient-to-r pb-5 from-green-200 to-blue-200 flex items-center justify-center'>
      <div id="home" className="w-11/12 lg:flex-row flex-col-reverse flex items-center mt-12">
        <div className="w-max flex flex-col items-center lg:items-start">
           <p data-aos="fade-up" className=" sm:text-5xl xsm:text-3xl lg:text-5xl text-2xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl   font-bold font-custom">{data.greet}</p>
           <p data-aos="fade-up" className="sm:text-5xl xsm:text-3xl lg:text-3xl text-md 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl h-6  mt-5 text-nav font-bold flex items-center gap-1">{displayedDesignation} <span className={`h-7 w-1 bg-nav ${excla?'flex':'hidden'}`}></span></p>
           <p data-aos="" className="sm:text-3xl xsm:text-2xl lg:text-3xl   2xl:text-xl 3xl:text-2xl 4xl:text-3xl mt-5 font-medium text-sm text-slate-600">{data.clginfo}</p>   
           <div data-aos="fade-down" className="mt-5 flex gap-4">
           <button className='py-3 px-8 flex justify-center text-lg hover:text-nav transition duration-500 items-center font-semibold rounded-lg h-10 bg-black text-white'><a href={Navobj.navbutton.link}>{Navobj.navbutton.name}</a></button>
           <button className='py-3 px-8 flex justify-center text-lg hover:text-nav transition duration-500 items-center font-semibold rounded-lg h-10 bg-white text-black '><a className="flex align-middle gap-1" href="https://www.linkedin.com/in/siddakrajpal/overlay/1715938750486/single-media-viewer/?profileId=ACoAAE3au9cBu6lb8m2kcSDBknLA1PU5GLIlRas" download><p>Resume</p><span className="flex items-center">{downicon}</span></a></button>
           </div>
           <div data-aos="fade-down" className="mt-5 transition duration-1000">
            <ul className="flex gap-5">
              <li className="hover:scale-125 transition duration-1000"><a href={data.links.github}>{mediaicons.github}</a></li>
              <li className="hover:scale-125 transition duration-1000"><a href={data.links.insta}>{mediaicons.instaicon}</a></li>
              <li className="hover:scale-125 transition duration-1000"><a href={data.links.linkedin}>{mediaicons.linkdinicon}</a></li>
              <li className="hover:scale-125 transition duration-1000"><a href={data.links.twitter}>{mediaicons.twittericon}</a></li>
            </ul>
           </div>
        </div>
        <div className="lg:w-1/2 md:w-2/3 sm:w-full">
            <img src={img} alt="" width="100%" height="100%" />
        </div>
       </div>  
    </section>
  )
}

export default Home
