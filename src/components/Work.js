import React from 'react';
import img1 from '../assets/Screenshot_1.png';
import img2 from '../assets/Screenshot_5.png';
import img3 from '../assets/Screenshot_4.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Work = () => {
  return <div className='section py-28 my-28'id="work">


    <div className='mx-auto container'>
      <motion.div variants={fadeIn('up',0.3)}initial="hidden"whileInView={"show"} viewport={{once:"false", amount: 0.5}}>

        <div className='flex flex-col lg:flex-row gap-x-10 justify-center mb-12'>

       <div className='flex flex-col gap-y-5 w-[450px] h-[220px] mb-16 lg:mb-0'>
        <h2 className='h2 text-accent leading-light tracking-[4px]'>My Recent <br/> Projects</h2>
        <p>I have recently completed this projects.Summper Camp , Cheef of Mexican , Toy Shop . You can checkout my projects</p>
        <div>
        <button className='btn btn-lg'> view all projects</button>
        </div>
       

       </div>
       
       <div className='group relative  overflow-hidden'>
        <div className='group-hover:bg-black/80 h-full w-full absolute transition-full duration-300 z-40'></div>
        <img src={img1} className=' w-[450px] h-[220px] group-hover:scale-125 overflow-hidden w-full transition-full duration-300  ' alt="project1"/>
        <p className='absolute -bottom-50 lg:group-hover:bottom-44 group-hover:bottom-40  group-hover:left-12 z-40 transition-full duration-300 uppercase text-2xl text-gradient'>Toy Shop</p>
        <p className='absolute -bottom-50 group-hover:bottom-12   group-hover:left-12 z-40 transition-full duration-300 '>This is a full stack project. I just make it by using Html,CSS,Bootstrap,React JS,Node JS,Express JS,MongoDB and Firebase.I did crud operation into this website.  </p>
        <p className='absolute -bottom-50 group-hover:bottom-4   group-hover:left-12 z-40 transition-full duration-500 text-blue-600'><a className='me-2 underline'href='https://github.com/Tasniasamia/Assignment11'>Gihub Link</a> |<a className='ms-2 underline'href='https://assignment11-c2bcc.web.app/'>Live Link</a> </p>
       </div>
       
       </div>

       <div className='flex flex-col lg:flex-row gap-x-10 justify-center'>
       <div className='group relative  overflow-hidden mb-6 lg:mb-0'>
        <div className='group-hover:bg-black/80 h-full w-full absolute transition-full duration-300 z-40'></div>
        <img src={img2} className=' w-[450px] h-[220px] group-hover:scale-125 overflow-hidden w-full transition-full duration-300  ' alt="project1"/>
        <p className='absolute -bottom-50 lg:group-hover:bottom-44 group-hover:bottom-40  group-hover:left-12 z-40 transition-full duration-300 uppercase text-2xl  text-gradient'>Summer Camp School</p>
        <p className='absolute -bottom-50 group-hover:bottom-12   group-hover:left-12 z-40 transition-full duration-300  '>This is a full stack project. It has dashboard system ,private route system, login system ,payment process system.I made it by all mern stack technology (mongodb , Express JS, React JS , Node JS)</p>

        <p className='absolute -bottom-50 group-hover:bottom-4   group-hover:left-12 z-40 transition-full duration-500 text-blue-600'><a className='me-2 underline'href='https://github.com/Tasniasamia/Assignment12'>Gihub Link</a> |<a className='ms-2 underline'href="https://assignment12-e6a98.web.app/">Live Link</a> </p>
       </div>
       <div className='group relative  overflow-hidden'>
        <div className='group-hover:bg-black/80 h-full w-full absolute transition-full duration-300 z-40'></div>
        <img src={img3} className=' w-[450px] h-[220px] group-hover:scale-125 overflow-hidden w-full transition-full duration-300  ' alt="project1"/>
        <p className='absolute -bottom-50 lg:group-hover:bottom-44 group-hover:bottom-40   group-hover:left-10 z-40 transition-full duration-300 uppercase text-2xl text-gradient'>Chef of Mexico</p>
        <p className='absolute -bottom-50 group-hover:bottom-12   group-hover:left-10 z-40 transition-full duration-300 '>This is a Front-end website.I made it by using  React JS and Bootstrap.There is 6 maxican chefs and their recipies . I have also added private route and login system.</p>
        <p className='absolute -bottom-50 group-hover:bottom-4   group-hover:left-10 z-40 transition-full duration-500 text-blue-600'><a className='me-2 underline 'href='https://github.com/Tasniasamia/Assignment_10'>Gihub Link</a> |<a className='ms-2 underline'href=' https://samia-beec7.web.app/'>Live Link</a> </p>
       </div>
       
       </div>
      
       </motion.div>
    </div>
  </div>;
};

export default Work;
