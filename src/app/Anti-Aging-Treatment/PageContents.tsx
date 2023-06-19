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
function PageContents() {
  return (
    <>
      <Navbar />
      <AboutHeroSection imageUrl="hero/Skin/Anti Aging Treatment.jpg"/>
      <ArticleComponent/>
      <span className=""></span>
      <Services/>
      <span></span>
      <WhyFatFlex/>
      <Testimonials/>
      <Footer />
    </>
  );
}

export default PageContents;
