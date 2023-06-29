import React from "react";
import "./WhyFatFlex.css";

function WhyFatFlex() {
  return (
    <section className="whyfatflex__section">
      <div className="container">
        <h3 className="whyfatflex__heading">Why FatFlux ?</h3>
        <section className="whyfatflux__sub__section">
          <div className="combined__fatflex">
            <article className="fatflex__article">
              <figure>
                <img src="icons/achievement.svg" alt="achievement logo" />
              </figure>
              <p>Experienced Doctors</p>
            </article>
            <article className="fatflex__article">
              <figure>
                <img src="icons/custom.svg" alt="custom logo" />
              </figure>
              <p>Customized Solutions</p>
            </article>
          </div>
          <div className="combined__fatflex">
            <article className="fatflex__article">
              <figure>
                <img src="icons/doctor.svg" alt="doctor logo" />
              </figure>
              <p>Certified Dermatologists & Dieticians</p>
            </article>
            <article className="fatflex__article">
              <figure>
                <img src="icons/equipment.svg" alt="equipment logo" />
              </figure>
              <p>Latest Technology & Equipment</p>
            </article>
          </div>
          <div className="combined__fatflex">
            <article className="fatflex__article">
              <figure>
                <img src="icons/users.svg" alt="users logo" />
              </figure>
              <p>Client Satisfaction</p>
            </article>
            <article className="fatflex__article">
              <figure>
                <img src="icons/skills.svg" alt="skills logo" />
              </figure>
              <p>No Side Effects</p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}

export default WhyFatFlex;
