import React, { useRef } from "react";
import "./Services.css";

function Services() {
  const containerOneRef: any = useRef(null);
  const containerTwoRef: any = useRef(null);
  const containerThirdRef: any = useRef(null);

  const scrollOneLeft = () => {
    containerOneRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollOneRight = () => {
    containerOneRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };
  const scrollTwoLeft = () => {
    containerTwoRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollTwoRight = () => {
    containerTwoRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };
  const scrollThirdLeft = () => {
    containerThirdRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollThirdRight = () => {
    containerThirdRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };
  return (
    <section className="services__section">
      <div className="container">
        <section className="services__masked">
          <h3 className="services__main__headings">Our Services</h3>
          <div className="services__header">
            <h3 className="services__heading">WEIGHT</h3>
            <div className="scroll__arrows">
              <button className="scroll__arrow" onClick={scrollOneLeft}>
                &lt;
              </button>
              <button className="scroll__arrow" onClick={scrollOneRight}>
                &gt;
              </button>
            </div>
          </div>
          <section
            className="overflow__services__section"
            ref={containerOneRef}
          >
            <article>
              <a href="/Body-Fat-Reduction">
                <figure>
                  <img
                    src="assets/Weight/Body Fat Reduction.jpg"
                    alt="Body-Fat-Reduction"
                  />
                </figure>
              </a>
              <a href="/Body Fat Reduction">
                <p>Body Fat Reduction</p>
              </a>
            </article>
            <article>
              <a href="/Non-surgical-Liposuction">
                <figure>
                  <img
                    src="assets/Weight/Non surgical Liposuction.jpg"
                    alt="Non surgical Liposuction"
                  />
                </figure>
              </a>
              <a href="/Non-surgical-Liposuction">
                <p>Non surgical Liposuction</p>
              </a>
            </article>
            <article>
              <a href="/Cryolipolysis">
                <figure>
                  <img
                    src="assets/Weight/Cryolipolysis.jpg"
                    alt="Cryolipolysis"
                  />
                </figure>
              </a>
              <a href="/Cryolipolysis">
                <p>Cryolipolysis</p>
              </a>
            </article>
            <article>
              <a href="/Cryo-Therapy">
                <figure>
                  <img
                    src="assets/Weight/Cryo Therapy.jpg"
                    alt="Cryo Therapy"
                  />
                </figure>
              </a>
              <a href="/Cryo-Therapy">
                <p>Cryo Therapy</p>
              </a>
            </article>
            <article>
              <a href="/Whole-Body-Weightloss">
                <figure>
                  <img
                    src="assets/Weight/Whole Body Weightloss.jpg"
                    alt="Whole Body Weightloss"
                  />
                </figure>
              </a>
              <a href="/Whole-Body-Weightloss">
                <p>Whole Body Weightloss</p>
              </a>
            </article>
            <article>
              <a href="/Advanced-Inchloss-Treatment">
                <figure>
                  <img
                    src="assets/Weight/Advanced Inchloss Treatment.jpg"
                    alt="Advanced Inchloss Treatment"
                  />
                </figure>
              </a>
              <a href="/Advanced-Inchloss-Treatment">
                <p>Advanced Inchloss Treatment</p>
              </a>
            </article>
            <article>
              <a href="/Figure-Correction">
                <figure>
                  <img
                    src="assets/Weight/Figure Correction.jpg"
                    alt="Figure Correction"
                  />
                </figure>
              </a>
              <a href="/Figure-Correction">
                <p>Figure Correction</p>
              </a>
            </article>
            <article>
              <a href="/Body-countouring">
                <figure>
                  <img
                    src="assets/Weight/Body countouring.jpg"
                    alt="Body countouring"
                  />
                </figure>
              </a>
              <a href="/Body-countouring">
                <p>Body countouring</p>
              </a>
            </article>
            <article>
              <a href="/Whole-Body-Therapy">
                <figure>
                  <img
                    src="assets/Weight/Whole Body Therapy.jpg"
                    alt="Whole Body Therapy"
                  />
                </figure>
              </a>
              <a href="/Whole-Body-Therapy">
                <p>Whole Body Therapy</p>
              </a>
            </article>
            <article>
              <a href="/Fat-Freezing-Technology">
                <figure>
                  <img
                    src="assets/Weight/Fat Freezing Technology.jpg"
                    alt="Fat Freezing Technology"
                  />
                </figure>
              </a>
              <a href="/Fat-Freezing-Technology">
                <p>Fat Freezing Technology</p>
              </a>
            </article>
            <article>
              <a href="/Facial-Fat-Reduction">
                <figure>
                  <img
                    src="assets/Weight/Facial Fat Reduction.jpg"
                    alt="Facial Fat Reduction"
                  />
                </figure>
              </a>
              <a href="/Facial-Fat-Reduction">
                <p>Facial Fat Reduction</p>
              </a>
            </article>
          </section>
        </section>
        <section className="services__masked">
          <div className="services__header">
            <h3 className="services__heading">HAIR</h3>
            <div className="scroll__arrows">
              <button className="scroll__arrow" onClick={scrollTwoLeft}>
                &lt;
              </button>
              <button className="scroll__arrow" onClick={scrollTwoRight}>
                &gt;
              </button>
            </div>
          </div>
          <section
            className="overflow__services__section"
            ref={containerTwoRef}
          >
            <article>
              <a href="/Anti-Hairloss-Treatment">
                <figure>
                  <img
                    src="assets/Hair/Anti Hairloss Treatment.jpg"
                    alt="Anti Hairloss Treatment"
                  />
                </figure>
              </a>
              <a href="/Anti-Hairloss-Treatment">
                <p>Anti Hairloss Treatment</p>
              </a>
            </article>
            <article>
              <a href="/Anti-Dandruff-Treatment">
                <figure>
                  <img
                    src="assets/Hair/Anti Dandruff Treatment.jpg"
                    alt="Anti Dandruff Treatment"
                  />
                </figure>
              </a>
              <a href="/Anti-Dandruff-Treatment">
                <p>Anti Dandruff Treatment</p>
              </a>
            </article>
            <article>
              <a href="/Hair-Regrowth">
                <figure>
                  <img src="assets/Hair/Hair Regrowth.jpg" alt="Hair Regrowth" />
                </figure>
              </a>
              <a href="/Hair-Regrowth">
                <p>Hair Regrowth</p>
              </a>
            </article>
            <article>
              <a href="/Platelet-Rich-Plasma-Thearpy">
                <figure>
                  <img
                    src="assets/Hair/Platelet Rich Plasma Thearpy.jpg"
                    alt="Platelet Rich Plasma Thearpy"
                  />
                </figure>
              </a>
              <a href="/Platelet-Rich-Plasma-Thearpy">
                <p>Platelet Rich Plasma Thearpy</p>
              </a>
            </article>
            <article>
              <a href="/Hair-Transplantation">
                <figure>
                  <img
                    src="assets/Hair/Hair Transplantation.jpg"
                    alt="Hair Transplantation"
                  />
                </figure>
              </a>
              <a href="/Hair-Transplantation">
                <p>Hair Transplantation</p>
              </a>
            </article>
          </section>
        </section>
        <section className="services__masked">
          <div className="services__header">
            <h3 className="services__heading">SKIN</h3>
            <div className="scroll__arrows">
              <button className="scroll__arrow" onClick={scrollThirdLeft}>
                &lt;
              </button>
              <button className="scroll__arrow" onClick={scrollThirdRight}>
                &gt;
              </button>
            </div>
          </div>
          <section
            className="overflow__services__section"
            ref={containerThirdRef}
          >
            <article>
              <a href="/Skin-Tightening">
                <figure>
                  <img src="assets/skin/Skin Tightening.jpg" alt="Skin pic" />
                </figure>
              </a>
              <a href="/Skin-Tightening">
                <p>Skin Tightening</p>
              </a>
            </article>
            <article>
              <a href="/Anti-Wrinkle-Treatment">
                <figure>
                  <img
                    src="assets/skin/Anti Wrinkle Treatment.jpg"
                    alt="Anti Wrinkle Treatment"
                  />
                </figure>
              </a>
              <a href="/Anti-Wrinkle-Treatment">
                <p>Anti Wrinkle Treatment</p>
              </a>
            </article>
            <article>
              <a href="/Anti-Aging-Treatment">
                <figure>
                  <img
                    src="assets/skin/Anti Aging Treatment.jpg"
                    alt="Skin pic"
                  />
                </figure>
              </a>
              <a href="/Anti-Aging-Treatment">
                <p>Anti Aging Treatment</p>
              </a>
            </article>
            <article>
              <a href="/Advanced-Facial-Glow">
                <figure>
                  <img
                    src="assets/skin/Advanced Facial Glow.jpg"
                    alt="Skin pic"
                  />
                </figure>
              </a>
              <a href="/Advanced-Facial-Glow">
                <p>Advanced Facial Glow</p>
              </a>
            </article>
            <article>
              <a href="/HydraFacial-Treatment">
                <figure>
                  <img
                    src="assets/skin/HydraFacial Treatment.jpg"
                    alt="Skin pic"
                  />
                </figure>
              </a>
              <a href="/HydraFacial-Treatment">
                <p>HydraFacial Treatment</p>
              </a>
            </article>
            <article>
              <a href="/Permanent-Eyebrows">
                <figure>
                  <img
                    src="assets/skin/Permanent Eyebrows.jpg"
                    alt="Skin pic"
                  />
                </figure>
              </a>
              <a href="/Permanent-Eyebrows">
                <p>Permanent Eyebrows</p>
              </a>
            </article>
            <article>
              <a href="/Permanent-Lip-colouring">
                <figure>
                  <img
                    src="assets/skin/Permanent Lip colouring.jpg"
                    alt="Skin pic"
                  />
                </figure>
              </a>
              <a href="/Permanent-Lip-colouring">
                <p>Permanent Lip colouring</p>
              </a>
            </article>
            <article>
              <a href="/Face-lift">
                <figure>
                  <img src="assets/skin/Face lift.jpg" alt="Skin pic" />
                </figure>
              </a>
              <a href="/Face-lift">
                <p>Face lift</p>
              </a>
            </article>
            <article>
              <a href="/V-shape-Facial-Lift">
                <figure>
                  <img
                    src="assets/skin/V shape Facial Lift.jpg"
                    alt="Skin pic"
                  />
                </figure>
              </a>
              <a href="/V-shape-Facial-Lift">
                <p>V shape Facial Lift</p>
              </a>
            </article>
          </section>
        </section>
      </div>
    </section>
  );
}

export default Services;
