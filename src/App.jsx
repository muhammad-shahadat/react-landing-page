import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Companies from './components/Companies/Companies';
import Courses from './components/Courses/Courses';
import Achievement from './components/Achievement/Achievement';
import Categories from './components/Categories/Categories';
import Feedback from './components/Feedback/Feedback';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';


function App() {
  

  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
      <Feedback />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
