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
  "Face-lift",
  "V-shape-Facial-Lift",
];
const permanentMakeupOptions = [
  "Permanent-Eyebrows",
  "Permanent-Lip-colouring",
];
function Navbar() {
  return (
    <header className="navbar__section">
      <div className="container">
        <div className="flex justifyContentBetween alignItemsCenter">
          <figure className="logo">
            <a href="/">
              <img src="logo/logo.jpeg" alt="logo" />
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
            <input id="toggle" type="checkbox" />
            <div className="second__nav nav-bar">
              <label className="bars cross__icon" for="toggle">
                <img src="icons/cross.svg" alt="cross icon" width="20px" />
              </label>
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
                <li>
                  <Dropdown title="PERMANENT MAKEUP" options={permanentMakeupOptions} />
                </li>
                <a href="/contactus">
                  <li>CONTACT US</li>
                </a>
                <a className="customer__stories" href="/customerstories">
                  <li>CUSTOMER STORIES</li>
                </a>
              </ul>
              <div className="phonenumber__mobile__noBorder">
                <a href="tel:+919666564441">
                  <li>Call us at +91 9666564441</li>
                </a>
              </div>
              <div className="logos__nav">
                <ul className="flex alignItemsCenter iconsGroup flexDirectionRow justifyContentCenter">
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
              </div>
            </div>
            <label className="bars" for="toggle">
              <img src="icons/hamburger.svg" width="20px" />
            </label>
          </section>
        </div>
        <section className="phonenumber__mobile">
          <div className="phonenumber__mobile__container">
            <img src="icons/phone.svg" width="10" />
            <a href="tel:+919666564441">
              <li>Call us at +91 9666564441</li>
            </a>
          </div>
        </section>
      </div>
    </header>
  );
}

export default Navbar;
