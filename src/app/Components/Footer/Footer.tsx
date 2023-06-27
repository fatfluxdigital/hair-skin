import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer__section">
      <div className="container">
        <div>
          <div className="footer__wrapper">
            <section className="footer__wrapper__section">
              <nav>
                <ul>
                  <li className="heading">Weight</li>
                  <a href="/Whole-Body-Weightloss">
                    <li>Whole Body Weightloss</li>
                  </a>
                  <a href="/Advanced-Inchloss-Treatment">
                    <li>Advanced Inchloss Treatment</li>
                  </a>
                  <a href="/Figure-Correction">
                    <li>Figure Correction</li>
                  </a>
                  <a href="/Body-countouring">
                    <li>Body countouring</li>
                  </a>
                  <a href="/Whole-Body-Therapy">
                    <li>Whole Body Therapy</li>
                  </a>
                  <a href="/Body-Fat-Reduction">
                    <li>Body Fat Reduction</li>
                  </a>
                  <a href="/Non-surgical-Liposuction">
                    <li>Non surgical Liposuction</li>
                  </a>
                  <a href="/NoCryolipolysis">
                    <li>Cryolipolysis</li>
                  </a>
                  <a href="/Cryo-Therapy">
                    <li>Cryo Therapy</li>
                  </a>
                  <a href="/Fat-Freezing-Technology">
                    <li>Fat Freezing Technology</li>
                  </a>
                  <a href="/Facial-Fat-Reduction">
                    <li>Facial Fat Reduction</li>
                  </a>
                </ul>
              </nav>
              <nav>
                <ul>
                  <li className="heading">Hair</li>
                  <a href="/Non-surgical-Liposuction">
                    <li>Anti Hairloss Treatment</li>
                  </a>
                  <a href="/Non-surgical-Liposuction">
                    <li>Anti Dandruff Treatment</li>
                  </a>
                  <a href="/Non-surgical-Liposuction">
                    <li>Hair Regrowth</li>
                  </a>
                  <a href="/Non-surgical-Liposuction">
                    <li>Platelet Rich Plasma Thearpy</li>
                  </a>
                  <a href="/Non-surgical-Liposuction">
                    <li>Hair Transplantation</li>
                  </a>
                </ul>
              </nav>
            </section>
            <section className="footer__wrapper__section">
              <nav>
                <ul>
                  <li className="heading">Skin</li>
                  <a href="/Skin-Tightening">
                    <li>Skin Tightening</li>
                  </a>
                  <a href="/Anti-Wrinkle-Treatment">
                    <li>Anti Wrinkle Treatment</li>
                  </a>
                  <a href="/Anti-Aging-Treatment">
                    <li>Anti Aging Treatment</li>
                  </a>
                  <a href="/Advanced-Facial-Glow">
                    <li>Advanced Facial Glow</li>
                  </a>
                  <a href="/HydraFacial-Treatment">
                    <li>HydraFacial Treatment</li>
                  </a>
                  <a href="/Permanent-Eyebrows">
                    <li>Permanent Eyebrows</li>
                  </a>
                  <a href="/Permanent-Lip-colouring">
                    <li>Permanent Lip colouring</li>
                  </a>
                  <a href="/Face-lift">
                    <li>Face lift</li>
                  </a>
                  <a href="/V-shape-Facial-Lift">
                    <li>V shape Facial Lift</li>
                  </a>
                </ul>
              </nav>
              <nav>
                <ul>
                  <a href="/aboutus">
                    <li>About us</li>
                  </a>
                  <a href="/contactus">
                    <li>Contact Us</li>
                  </a>
                  <a href="/contactus">
                    <li>Book An Appointment</li>
                  </a>
                </ul>
              </nav>
            </section>
          </div>
          <div className="icons__group">
            <ul className="flex alignItemsCenter iconsGroup">
              <a>
                <li>
                  <img src="icons/facebook.svg" width="20" />
                </li>
              </a>
              <a>
                <li>
                  <img src="icons/instagram.svg" width="20" />
                </li>
              </a>
              <a>
                <li>
                  <img src="icons/twitter.svg" width="20" />
                </li>
              </a>
              <a>
                <li>
                  <img src="icons/youtube.svg" width="20" />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div className="footer__second__wrapper">
          <figure className="image-container">
            <img src="logo/logo.png" alt="fat flux logo" />
          </figure>
          <p>Copyright © 2022 Fat Flux, All rights reserved.</p>
          <p>
            *Disclaimer: Results may vary from person to person, case to case
          </p>
          <p>Design & Developed by Narendra</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
