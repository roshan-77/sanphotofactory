import React from 'react';
import MyCarousel from './portfolio-components/carousel';
import Tagline from './portfolio-components/tagline';
import Aboutme from './portfolio-components/aboutme';
import Portfolio from './portfolio-components/portfolio';
import Contactme from './portfolio-components/contactme';
import Footer from './portfolio-components/footer';
import {Navigation} from './portfolio-components/navigation';
import './App.css';
import Title from './portfolio-components/title';

function App() {
  return (
    <div >
      <Navigation />
      <MyCarousel />
      <Title />
      <Tagline />
      <Aboutme />
      <Portfolio />
      <Contactme />
      <Footer />
    </div>
  );
}

export default App;
