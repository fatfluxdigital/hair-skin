import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="aboutus__section">
      <div className="container">
        <h3 className="aboutus__heading all__main__headings">About Us</h3>
        <section className="aboutus__crux">
          <article>
            <p>
              Welcome to Fatflux Clinic, your destination for the healthy
              transformative cosmetic treatments and rejuvenation.
            </p>
            <p>
              At Fatflux Clinic, we understand your obesity and cosmetic concern
              that plays a significant role in your self-confidence and overall
              well-being.
            </p>
            <p>
              Our team of highly skilled and experienced Nutritionists and
              cosmetologists designs state-of-the-art treatments and procedures
              to address your unique needs.
            </p>
            <p>
              At Fatflux Clinic, we believe in building lasting relationships
              with our clients based on trust, integrity, and mutual respect. We
              are committed to providing a warm and welcoming environment, where
              you can feel confident in sharing your concerns and aspirations.
              Your satisfaction is our top priority, and we strive to exceed
              your expectations at every step.
            </p>
            <p>
              Embark on your healthy weightloss and aesthetic journey with us,
              and let us help you to enhance your health and beauty.
            </p>
          </article>
          <figure>
            <img src="aboutus/aboutus.jpg" alt="fat flex" />
          </figure>
        </section>
      </div>
    </section>
  );
}

export default AboutUs;
