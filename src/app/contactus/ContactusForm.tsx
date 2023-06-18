import React from "react";
import "./ContactusForm.css";

function ContactusForm() {
  return (
    <section className="contactform__section">
      <div className="contactform__section">
        <div className="contactform__wrapper">
          <h1 className="contactform__heading">Enquiry Form</h1>
          <p>
            Give us a call or drop by anytime, we endeavour to answer all
            enquiries within 24 hours on business days. We will be happy to
            answer your questions.
          </p>
          <div className="firstset">
            <input type="text" name="First Name" placeholder="First Name" />
            <input type="text" name="Last Name" placeholder="Last Name" />
          </div>
          <div className="lastset">
            <input type="text" name="Email" placeholder="Email" />
            <input
              type="tel"
              name="Mobile Number"
              placeholder="Mobile Number"
            />
          </div>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            placeholder="Message"
            style={{ color: "blue" }}
          ></textarea>
          <button className="contactform__button">Submit</button>
        </div>
      </div>
    </section>
  );
}

export default ContactusForm;
