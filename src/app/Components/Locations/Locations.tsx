import React from "react";
import "./Locations.css";

function Locations() {
  return (
    <section>
      <div className="container">
        <h2 className="location__heading">
          Reach out to us for any Requirements
        </h2>
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
              write to <a href="mailto:fatflux@gmail.com">fatflux@gmail.com</a>
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
      </div>
    </section>
  );
}

export default Locations;
