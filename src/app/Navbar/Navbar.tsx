import React from "react";
import Dropdown from "../Components/DropDown/DropDown";
const options = ["Apple", "Orange", "Pear", "Mango"];
const weightOptions = [
  "Whole-Body-Weightloss",
  "Advanced-Inchloss-Treatment",
  "Figure-Correction",
  "Body-countouring",
  "Whole-Body-Therapy",
  "Body-Fat-Reduction",
  "Non-surgical-Liposuction",
  "Cryolipolysis",
  "Cryo-Therapy",
  "Fat-Freezing-Technology",
  "Facial-Fat-Reduction",
];
const hairOptions = [
  "Anti-Hairloss-Treatment",
  "Anti-Dandruff-Treatment",
  "Hair-Regrowth",
  "Platelet-Rich-Plasma-Thearpy",
  "Hair-Transplantation",
];
const skinOptions = [
  "Skin-Tightening",
  "Anti-Wrinkle-Treatment",
  "Anti-Aging-Treatment",
  "Advanced-Facial-Glow",
  "HydraFacial-Treatment",
  "Permanent-Eyebrows",
  "Permanent-Lip-colouring",
  "Face-lift",
  "V-shape-Facial-Lift",
];
function Navbar() {
  return (
    <header className="navbar__section">
      <div className="container">
        <div className="flex justifyContentBetween alignItemsCenter">
          <figure className="logo">
            <a href="/">
              <img src="logo/logo.png" alt="logo" />
            </a>
          </figure>
          <section className="flex-80">
            <div className="p-1 bt-1">
              <nav className="flex justifyContentBetween listsGroup">
                <ul className="flex alignItemsCenter first__navset">
                  <div className="flex alignItemsCenter">
                    <img src="icons/phone.svg" width="20" />
                    <a href="tel:+919666564441">
                      <li>Call us at +91 9666564441</li>
                    </a>
                  </div>
                  <div className="flex alignItemsCenter ml-2">
                    <img src="icons/email.svg" width="20" />
                    <a href="mailto:customercare@fatflux.com">
                      <li>customercare@fatflux.com</li>
                    </a>
                  </div>
                </ul>
                <ul className="flex alignItemsCenter iconsGroup">
                  <li>
                    <img src="icons/facebook.svg" width="20" />
                  </li>
                  <li>
                    <img src="icons/instagram.svg" width="20" />
                  </li>
                  <li>
                    <img src="icons/twitter.svg" width="20" />
                  </li>
                  <li>
                    <img src="icons/youtube.svg" width="20" />
                  </li>
                </ul>
              </nav>
            </div>
            <label className="bars" for="toggle">
              <img src="icons/hamburger.svg" width="20px" />
            </label>
            <input id="toggle" type="checkbox" />

            <div className="second__nav nav-bar">
              <ul className="flex justifyContentBetween alignItemsCenter">
                <a href="/">
                  <li>HOME</li>
                </a>
                <a href="/aboutus">
                  <li>ABOUT US</li>
                </a>
                <li>
                  <Dropdown title="WEIGHT" options={weightOptions} />
                </li>
                <li>
                  <Dropdown title="SKIN" options={skinOptions} />
                </li>
                <li>
                  <Dropdown title="HAIR" options={hairOptions} />
                </li>
                <a href="/contactus">
                  <li>CONTACT US</li>
                </a>
                <a className="customer__stories" href="/customerstories">
                  <li>CUSTOMER STORIES</li>
                </a>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
