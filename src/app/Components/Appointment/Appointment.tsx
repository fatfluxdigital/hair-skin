import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Appointment.css";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import ReCAPTCHA from "react-google-recaptcha";

export default function Appointment() {
  return (
    <section className="appointment__section">
      <div className="large__container">
        <h2 className="appointment__heading">Book An Appointment</h2>
        <div className="appointment__form">
          <input type="text" name="Your Name" placeholder="Your Name" />
          <input type="tel" name="Mobile Number" placeholder="Mobile Number" />
          <input type="text" name="Message" placeholder="Message" />{" "}
          <select name="option" >
          <option value="Weight Loss Service">-- Please choose an option --</option>
            <option value="Weight Loss Service">Weight Loss Service</option>
            <option value="Hair Treatment Service">
              Hair Treatment Service
            </option>
            <option value="Skin Treatment Service">
              Skin Treatment Service
            </option>
          </select>
          <button>
            SUBMIT
          </button>
        </div>
        <div className="appointment__center">
          <div className="appointment__center-content mt-2">
            <ReCAPTCHA sitekey="YOUR_SITE_KEY" />
          </div>
        </div>
      </div>
    </section>
  );
}
