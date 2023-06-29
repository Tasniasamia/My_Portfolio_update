import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const Skill = () => {
    return (
        <div className='section 'id="skill"> 
        <div className='container mx-auto'>
            <p className='text-accent  text-center mb-6'>GET IN TOUCH</p>
        <h2 className='h2 text-center mb-14'>My Skills</h2>
<motion.div className='flex lg:flex-row flex-col justify-between gap-x-20 items-center'variants={fadeIn('up',0.3)}initial="hidden"whileInView={"show"} viewport={{once:"false", amount: 0.5}}>
      
<div className='lg:w-[30%] w-full'>
<div className='mb-6'>
<div className='me-4 my-2  font-bold'>HTML</div><ProgressBar completed={90} animateOnRender={true}  initCompletedOnAnimation={1} maxCompleted={100} /></div>
<div className='mb-6'>
<div className='me-3 my-2  font-bold  '>CSS</div><ProgressBar completed={85} animateOnRender={true}  initCompletedOnAnimation={1} maxCompleted={100} /></div>
<div className='mb-6'>
<div className='me-3 my-2  font-bold  '>Bootstrap</div><ProgressBar completed={85} animateOnRender={true}  initCompletedOnAnimation={1} maxCompleted={100} /></div>

</div>
<div className='lg:w-[30%] w-full'>
<div className='mb-6'>
<div className='me-3 my-2  font-bold  '>Tailwind</div><ProgressBar completed={85} animateOnRender={true}  initCompletedOnAnimation={1} maxCompleted={100} /></div>
<div className='mb-6'>
<div className='me-3 my-2  font-bold  '>JavaScript</div><ProgressBar completed={70} animateOnRender={true}  initCompletedOnAnimation={1} maxCompleted={100} /></div>



<div className='mb-6'>
<div className='me-3 my-2  font-bold  '>React JS</div><ProgressBar completed={60} animateOnRender={true}  initCompletedOnAnimation={1} maxCompleted={100} /></div>
<div className='mb-6'>

<div className='me-3 my-2  font-bold  '>Firebase</div><ProgressBar completed={65} animateOnRender={true}  initCompletedOnAnimation={1} maxCompleted={100} /></div></div>
<div className='lg:w-[30%] w-full'>
<div className='mb-6'>
<div className='me-3 my-2  font-bold  '>Express JS</div><ProgressBar completed={60} animateOnRender={true}  initCompletedOnAnimation={1} maxCompleted={100} /></div>
<div className='mb-6'>
<div className='me-3 my-2  font-bold  '>Node JS</div><ProgressBar completed={50} animateOnRender={true}  initCompletedOnAnimation={1} maxCompleted={100} /></div>
<div className='mb-6'>
<div className='me-3   font-bold  '>MongoDB</div><ProgressBar completed={55} animateOnRender={true}  initCompletedOnAnimation={1} maxCompleted={100} /></div>

</div>





</motion.div>
        </div>
        </div>
    );
};

export default Skill;