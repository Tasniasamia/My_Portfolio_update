import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Skill from './components/Skill';
import { MyComponent } from './components/Data';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Skill/>
      <Work />
      <Contact />
     
      <div className='h-[500px]'>
        
      </div>
      <Footer/>
    </div>
  );
};

export default App;
