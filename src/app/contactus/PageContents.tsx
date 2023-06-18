"use client";
import React from "react";
import AboutHeroSection from "../Components/AboutHeroSection/AboutHeroSection";
import AboutUs from "../Components/AboutUs/AboutUs";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ContactusForm from "./ContactusForm";
import Locations from "../Components/Locations/Locations";
import "../page.css";

function PageContents() {
  return (
    <section>
      <Navbar />
      <AboutHeroSection />
      <Locations/>
      <ContactusForm/>
      <AboutUs />
      <Footer />
    </section>
  );
}

export default PageContents;
