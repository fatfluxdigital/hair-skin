import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer__section">
      <div className="container">
        <div className="footer__wrapper">
          <nav>
            <ul>
              <a>
                <li>Weight</li>
              </a>
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
              <a>
                <li>Cryolipolysis</li>
              </a>
              <a>
                <li>Cryo Therapy</li>
              </a>
              <a>
                <li>Fat Freezing Technology</li>
              </a>
              <a>
                <li>Facial Fat Reduction</li>
              </a>
            </ul>
          </nav>
          <nav>
            <ul>
              <a>
                <li>Hair</li>
              </a>
              <a>
                <li>Anti Hairloss Treatment</li>
              </a>
              <a>
                <li>Anti Dandruff Treatment</li>
              </a>
              <a>
                <li>Hair Regrowth</li>
              </a>
              <a>
                <li>Platelet Rich Plasma Thearpy</li>
              </a>
              <a>
                <li>Hair Transplantation</li>
              </a>
            </ul>
          </nav>
          <nav>
            <ul>
              <a>
                <li>Skin</li>
              </a>
              <a>
                <li>Skin Tightening</li>
              </a>
              <a>
                <li>Anti Wrinkle Treatment</li>
              </a>
              <a>
                <li>Anti Aging Treatment</li>
              </a>
              <a>
                <li>Advanced Facial Glow</li>
              </a>
              <a>
                <li>HydraFacial Treatment</li>
              </a>
              <a>
                <li>Permanent Eyebrows</li>
              </a>
              <a>
                <li>Permanent Lip colouring</li>
              </a>
              <a>
                <li>Face lift</li>
              </a>
              <a>
                <li>V shape Facial Lift</li>
              </a>
            </ul>
          </nav>
          <nav>
            <ul>
              <a>
                <li>About us</li>
              </a>
              <a>
                <li>Contact Us</li>
              </a>
              <a>
                <li>Book An Appointment</li>
              </a>
              <a>
                <li>Customer Stories</li>
              </a>
            </ul>
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
          </nav>
        </div>
        <div className="footer__second__wrapper">
          <figure className="image-container">
            <img src="logo/logo.png" alt="fat flux logo" />
          </figure>
          <p>Copyright © 2022 Fat Flux, All rights reserved.</p>
          <p>*Disclaimer: Results may vary from person to person, case to case</p>
          <p>Design & Developed by Narendra</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
