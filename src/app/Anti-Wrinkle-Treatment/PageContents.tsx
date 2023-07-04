"use client"
import React from "react";
import AboutHeroSection from "../Components/AboutHeroSection/AboutHeroSection";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ArticleComponent from "./ArticleComponent";
import Services from "../Services/Services";
import WhyFatFlex from "../Components/WhyFatFlex/WhyFatFlex";
import Testimonials from "../Components/Testimonials/Testimonials";
import "../page.css";
import Appointment from "../Components/Appointment/Appointment";
import BasicModal from "../Components/BasicModal/BasicModal";
function PageContents() {
  return (
    <>
      <Navbar />
      <AboutHeroSection imageUrl="hero/Skin/Anti Wrinkle Treatment.jpg"/>
      <Appointment />
      <ArticleComponent/>
      <span className=""></span>
      <Services/>
      <span></span>
      <WhyFatFlex/>
      <Testimonials/>
      <Footer />
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
    </>
  );
}

export default PageContents;
