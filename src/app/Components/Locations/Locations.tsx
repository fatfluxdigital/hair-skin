import React from "react";
import "./Locations.css";

function Locations() {
  return (
    <section>
      <div className="container">
        <h2 className="location__heading">
          Reach out to us for any Requirements
        </h2>
        <section className="location__wrapper__section">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.017792557109!2d78.30492567492361!3d17.458862483440537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93892b87e267%3A0x21006936cedd4d65!2sFat%20Flux!5e0!3m2!1sen!2sin!4v1688032316324!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
          <div className="location__wrapper">
            <article>
              <figure>
                <img width="20" src="icons/location.svg" alt="address icon" />
              </figure>
              <address>
                <p>Near Aparna Cyber Life,</p>
                <p>Opposite Jawahar Navodaya,</p>
                <p>Tellapur, Serilingampalle (M),</p>
                <p>Telangana 500046</p>
              </address>
            </article>
            <div className="line"></div>
            <article>
              <figure>
                <img width="20" src="icons/email.svg" alt="email icon" />
              </figure>
              <p>
                <strong>Email us:</strong> For service requests or complaints,
                write to{" "}
                <a href="mailto:fatflux@gmail.com">fatflux@gmail.com</a>
              </p>
            </article>
            <div className="line"></div>
            <article>
              <figure>
                <img width="20" src="icons/phone.svg" alt="phone icon" />
              </figure>
              <p>
                <strong>Call us:</strong> Give us a call on our toll-free number{" "}
                <a href="tel:+9109666564441">+91 096665 64441</a>
              </p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Locations;
