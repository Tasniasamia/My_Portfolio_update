import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn } from '../variants';
const About = () => {
  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0.5,
  // });
  return <div className='section'id="about">
<div className='mx-auto container lg:my-[300px] my-28 lg:mt-[350px]' >
  <div className='flex lg:flex-row flex-col items-center justify-between gap-y-25 gap-x-20'>

<motion.div className='bg-about2 bg-no-repeat bg-contain bg-top w-[500px] lg:h-[800px]  h-[600px] mix-blend-lighten  mb-10 lg:mb-0 ' variants={fadeIn('right',0.3)}initial="hidden"whileInView={"show"} viewport={{once:"false", amount: 0.5}}>
</motion.div>


<motion.div className='lg:h-[600px] lg:flex lg:items-center lg:gap-y-48' variants={fadeIn('left',0.5)}initial="hidden"whileInView={"show"} viewport={{once:"false", amount: 0.5}}>
  <div>
  <h2 className='text-accent h2 mb-3 '> About Me</h2>
  <h3 className='h3 mb-3 lg:max-w-[600px]'>I achieved proficiency in MERN stack development in eight months</h3>
  <p className='lg:max-w-[600px] text-justify'>I am a proficient full-stack web developer with hands-on experience in creating web applications using HTML, CSS, Bootstrap, JavaScript, React, Node.js, Express.js, and MongoDB. My internship at Qwik IT Services as a Front-End Developer allowed me to expand my skills to include Next.js and React Native, completing various projects successfully. I am also well-versed in Redux for state management and MySQL for database operations. My commitment to continuous learning is evident in my proactive approach to acquiring new technologies. With a strong work ethic and unwavering passion, I consistently strive for excellence in every project I undertake.</p>
  {/* experience */}

<div className='flex  gap-x-10 gap-y-25 mt-[24px]  py-4 '>

<div className='pt-2'>
  <div className='text-gradient text-[40px] font-tertiary'>
   <span>1</span>
  </div>
  <div className='font-primary text-sm tracking-[2px] font-bold'>year of <br/> Experience</div>
</div>

<div className='pt-2'>
  <div className='text-gradient text-[40px] font-tertiary'>
    <CountUp start={-1} end={20} duration={5}/> +
  </div>
  <div className='font-primary text-sm tracking-[2px] font-bold'>Projects <br/> Completed</div>
</div>

</div>

<div className='  max-w-max my-8  '>

<button className='btn btn-lg me-4'><a  href="Web Developer CV (Tasnia Sharin).pdf" download="myfile.pdf"  >Download Resume</a></button> 
  <a href="#"className='text-gradient btn-link'> Portfolio</a></div>

</div>
</motion.div>
</div>
</div>
</div>





};

export default About;
