import React from "react";
import "./WhyFatFlex.css";

function WhyFatFlex() {
  return (
    <section className="whyfatflex__section">
      <div className="container">
        <h3 className="whyfatflex__heading">Why FatFlex ?</h3>
        <section className="whyfatflux__sub__section">
          <article>
            <figure>
              <img src="icons/achievement.svg" alt="achievement logo" />
            </figure>
            <p>20 Years of Expertise</p>
          </article>
          <article>
            <figure>
              <img src="icons/custom.svg" alt="custom logo" />
            </figure>
            <p>Customized Solutions</p>
          </article>
          <article>
            <figure>
              <img src="icons/doctor.svg" alt="doctor logo" />
            </figure>
            <p>Certified Dermatologists & Dieticians</p>
          </article>
          <article>
            <figure>
              <img src="icons/equipment.svg" alt="equipment logo" />
            </figure>
            <p>Latest Technology & Equipment</p>
          </article>
          <article>
            <figure>
              <img src="icons/users.svg" alt="users logo" />
            </figure>
            <p>Lakhs of Satisfied Clients</p>
          </article>
          <article>
            <figure>
              <img src="icons/skills.svg" alt="skills logo" />
            </figure>
            <p>No Side Effects</p>
          </article>
        </section>
      </div>
    </section>
  );
}

export default WhyFatFlex;
