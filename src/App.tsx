import React from 'react';
import "./tailwindcss.css"
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Works from './Components/Works';
import Resume from './Components/Resume';
import Letstalk from './Components/Letstalk';


function App() {
  return (
    <div className="w-full">
         <Navbar></Navbar>
         <Home></Home>
         <Skills></Skills>
         <Works></Works>
         <Resume></Resume>
         <Letstalk></Letstalk>
    </div>
  );
}

export default App;
