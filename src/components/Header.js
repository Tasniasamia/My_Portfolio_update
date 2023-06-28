import React from 'react';
import logo from '../assets/tas.png';
import firstlogo from '../assets/orbo1 (1).png';
import sndlogo from '../assets/orbo1 (2).png';
const Header = () => {
  return <header className='py-8 mb-28'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
  <a href='#' className=''>
  
 <div>
  <div>
<img src={firstlogo} className='lg:h-[20px] h-[20px]' alt="logo"/>
  </div>
  <div className='mt-2'>
  <img src={sndlogo} alt="logo"className='lg:h-[20px] h-[20px]'/>
  </div>
 </div>
  {/* <img src={logo} alt="logo2"className='lg:h-[50px] h-[50px] '/> */}
 
{/* <h1 className='text-2xl font-ada'style={{color:"linear-gradient( 92.23deg, #406aff 21.43% , #3bace2 50.63% , #b936ee 100%, #ff56f6 117.04%) "}}>TASNIA<span className='text-xl font-ada text-white  ms-3'>SHARIN</span></h1> */}
  </a>
  <button className='btn btn-sm'>Hire me</button>
  </div>
  </div>
  </header>;
};

export default Header;
