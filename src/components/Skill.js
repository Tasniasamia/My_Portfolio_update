import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const Skill = () => {
    return (
        <div className='section'id="skill"> 
        <div className='container mx-auto'>
        <h2 className='h2 text-center mb-14'>My Skills</h2>
<motion.div className='flex lg:flex-row flex-col justify-between gap-x-20'variants={fadeIn('up',0.3)}initial="hidden"whileInView={"show"} viewport={{once:"false", amount: 0.5}}>
      
<div className='lg:w-3/4 w-full'>

<span className='me-3 mb-4'>HTML</span><ProgressBar completed={90} animateOnRender={true} bgColor={"linear-gradient(92.23deg,#406aff 21.43%,#3bace2 50.63%,#b936ee 100%,#ff56f6 117.04%)"} initCompletedOnAnimation={1} maxCompleted={100} labelAlignment="center"/>
<span className='me-3 mb-4'>CSS</span><ProgressBar completed={85} animateOnRender={true} bgColor={"linear-gradient(92.23deg,#406aff 21.43%,#3bace2 50.63%,#b936ee 100%,#ff56f6 117.04%)"} initCompletedOnAnimation={1} maxCompleted={100} labelAlignment="center"/>
<span className='me-3 mb-4'>Bootstrap</span><ProgressBar completed={85} animateOnRender={true} bgColor={"linear-gradient(92.23deg,#406aff 21.43%,#3bace2 50.63%,#b936ee 100%,#ff56f6 117.04%)"} initCompletedOnAnimation={1} maxCompleted={100} labelAlignment="center"/>
<span className='me-3 mb-4'>Tailwind</span><ProgressBar completed={85} animateOnRender={true} bgColor={"linear-gradient(92.23deg,#406aff 21.43%,#3bace2 50.63%,#b936ee 100%,#ff56f6 117.04%)"} initCompletedOnAnimation={1} maxCompleted={100} labelAlignment="center"/>
<span className='me-3 mb-4'>JavaScript</span><ProgressBar completed={70} animateOnRender={true} bgColor={"linear-gradient(92.23deg,#406aff 21.43%,#3bace2 50.63%,#b936ee 100%,#ff56f6 117.04%)"} initCompletedOnAnimation={1} maxCompleted={100} labelAlignment="center"/>

</div>

<div className='lg:w-3/4 w-full'>
<span className='me-3 mb-4'>React JS</span><ProgressBar completed={60} animateOnRender={true} bgColor={"linear-gradient(92.23deg,#406aff 21.43%,#3bace2 50.63%,#b936ee 100%,#ff56f6 117.04%)"} initCompletedOnAnimation={1} maxCompleted={100} labelAlignment="center"/>
<span className='me-3 mb-4'>Firebase</span><ProgressBar completed={65} animateOnRender={true} bgColor={"linear-gradient(92.23deg,#406aff 21.43%,#3bace2 50.63%,#b936ee 100%,#ff56f6 117.04%)"} initCompletedOnAnimation={1} maxCompleted={100} labelAlignment="center"/>
<span className='me-3 mb-4'>Express JS</span><ProgressBar completed={60} animateOnRender={true} bgColor={"linear-gradient(92.23deg,#406aff 21.43%,#3bace2 50.63%,#b936ee 100%,#ff56f6 117.04%)"} initCompletedOnAnimation={1} maxCompleted={100} labelAlignment="center"/>
<span className='me-3 mb-4'>Node JS</span><ProgressBar completed={50} animateOnRender={true} bgColor={"linear-gradient(92.23deg,#406aff 21.43%,#3bace2 50.63%,#b936ee 100%,#ff56f6 117.04%)"} initCompletedOnAnimation={1} maxCompleted={100} labelAlignment="center"/>
<span className='me-3 mb-4'>MongoDB</span><ProgressBar completed={55} animateOnRender={true} bgColor={"linear-gradient(92.23deg,#406aff 21.43%,#3bace2 50.63%,#b936ee 100%,#ff56f6 117.04%)"} initCompletedOnAnimation={1} maxCompleted={100} labelAlignment="center"/>

</div>





</motion.div>
        </div>
        </div>
    );
};

export default Skill;