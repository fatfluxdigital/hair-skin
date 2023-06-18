"use client"
import React from 'react';
import Navbar from '../Navbar/Navbar';
import '../page.css'
import AboutHeroSection from '../Components/AboutHeroSection/AboutHeroSection';
import AboutUs from '../Components/AboutUs/AboutUs';
import Appointment from '../Components/Appointment/Appointment';
import Footer from '../Components/Footer/Footer';

function About() {
  return (
    <section>
      <Navbar/>
      <AboutHeroSection/>
      <Appointment/>
      <AboutUs/>
      <Footer/>
    </section>
  )
}

export default About