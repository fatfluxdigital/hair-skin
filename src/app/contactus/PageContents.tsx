"use client";
import React from "react";
import AboutHeroSection from "../Components/AboutHeroSection/AboutHeroSection";
import AboutUs from "../Components/AboutUs/AboutUs";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ContactusForm from "./ContactusForm";
import Locations from "../Components/Locations/Locations";
import "../page.css";
import BasicModal from "../Components/BasicModal/BasicModal";

function PageContents() {
  return (
    <section>
      <Navbar />
      <AboutHeroSection imageUrl="hero/contactus.jpg"/>
      <Locations/>
      <ContactusForm/>
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
    </section>
  );
}

export default PageContents;
