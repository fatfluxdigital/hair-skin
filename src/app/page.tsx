"use client";
import React from "react";
import "./page.css";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./Hero/Herosection";
import Appointment from "./Components/Appointment/Appointment";
import WhyFatFlex from "./Components/WhyFatFlex/WhyFatFlex";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import BasicModal from "./Components/BasicModal/BasicModal";

function page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Appointment />
      <WhyFatFlex />
      <AboutUs />
      <Services />
      <Testimonials />
      <Footer />
      <BasicModal />
      <a href="#bookAnAppointment">
        <div className="makeAnAppointment">
          <p>Make An Appointment</p>
        </div>
      </a>
      <figure className="whatsAppLogo">
        <img src="/icons/whatsapp.svg" alt="whatsapp icon" />
      </figure>
    </>
  );
}

export default page;
