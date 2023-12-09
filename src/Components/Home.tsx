import { useEffect, useState } from "react"
import { Navobj } from "../Data";
import { downicon } from "../Data";
import { mediaicons } from "../Data";
const Home = () => {
  const data = {
    greet: "Hello, I am Siddak Rajpal",
    designations: ["", "Technical Executive Vision Cse", "Web Developer at Ecell Manit"],
    clginfo:"I'm an undergraduate student at NIT Bhopal.",
    links:{
      github:"#",
      insta:"#",
      linkedin:"#",
      facebook:"#",
      twitter:"#"
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
    <section className='w-full h-screen bg-gradient-to-r from-green-200 to-blue-200 flex items-center justify-center'>
      <div className="w-11/12">
        <div className="w-max">
           <p data-aos="fade-up" className=" 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl  text-5xl font-bold font-custom">{data.greet}</p>
           <p data-aos="fade-up" className=" 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl h-6 text-3xl mt-5 text-nav font-bold flex items-center gap-1">{displayedDesignation} <span className={`h-7 w-1 bg-nav ${excla?'flex':'hidden'}`}></span></p>
           <p data-aos="" className=" 2xl:text-xl 3xl:text-2xl 4xl:text-3xl mt-5 font-medium text-lg text-slate-600">{data.clginfo}</p>
           <div data-aos="fade-down" className="mt-5 flex gap-4">
           <button className='py-3 px-8 flex justify-center text-lg hover:text-nav transition duration-500 items-center font-semibold rounded-lg h-10 bg-black text-white'><a href={Navobj.navbutton.link}>{Navobj.navbutton.name}</a></button>
           <button className='py-3 px-8 flex justify-center text-lg hover:text-nav transition duration-500 items-center font-semibold rounded-lg h-10 bg-white text-black '><a className="flex align-middle gap-1" href={Navobj.navbutton.link}><p>Resume</p><span className="flex items-center">{downicon}</span></a></button>
           </div>
           <div data-aos="fade-down" className="mt-5 transition duration-1000">
            <ul className="flex gap-5">
              <li><a href={data.links.github}>{mediaicons.github}</a></li>
              <li><a href={data.links.insta}>{mediaicons.instaicon}</a></li>
              <li><a href={data.links.linkedin}>{mediaicons.linkdinicon}</a></li>
              <li><a href={data.links.facebook}>{mediaicons.facebookicon}</a></li>
              <li><a href={data.links.twitter}>{mediaicons.twittericon}</a></li>
            </ul>
           </div>
        </div>
        <div>
            
        </div>
       </div>  
    </section>
  )
}

export default Home
