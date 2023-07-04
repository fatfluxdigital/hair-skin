"use client"
import React from 'react';
import Navbar from '../Navbar/Navbar';
import '../page.css'
import AboutHeroSection from '../Components/AboutHeroSection/AboutHeroSection';
import AboutUs from '../Components/AboutUs/AboutUs';
import Appointment from '../Components/Appointment/Appointment';
import Footer from '../Components/Footer/Footer';
import BasicModal from '../Components/BasicModal/BasicModal';

function About() {
  return (
    <section>
      <Navbar/>
      <AboutHeroSection imageUrl="aboutus/aboutusfull.jpg"/>
      <Appointment/>
      <AboutUs/>
      <Footer/>
      <BasicModal />
      <a href="#bookAnAppointment">
        <div className="makeAnAppointment">
          <p>Make An Appointment</p>
        </div>
      </a>
      <a href="https://wa.me/919666564441?text=Can%20I%20book%20the%20appointment%20now%20?">
        <figure className="whatsAppLogo">
          <img src="/icons/whatsapp.svg" alt="whatsapp icon" />
        </figure>
      </a>
    </section>
  )
}

export default About