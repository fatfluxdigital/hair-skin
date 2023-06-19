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
              <figure>
                <img
                  src="assets/Weight/Whole Body Weightloss.jpg"
                  alt="Whole Body Weightloss"
                />
              </figure>
              <p>Whole Body Weightloss</p>
            </article>
            <article>
              <figure>
                <img
                  src="assets/Weight/Advanced Inchloss Treatment.jpg"
                  alt="Advanced Inchloss Treatment"
                />
              </figure>
              <p>Advanced Inchloss Treatment</p>
            </article>
            <article>
              <figure>
                <img
                  src="assets/Weight/Figure Correction.jpg"
                  alt="Figure Correction"
                />
              </figure>
              <p>Figure Correction</p>
            </article>
            <article>
              <figure>
                <img
                  src="assets/Weight/Body countouring.jpg"
                  alt="Body countouring"
                />
              </figure>
              <p>Body countouring</p>
            </article>
            <article>
              <figure>
                <img
                  src="assets/Weight/Whole Body Therapy.jpg"
                  alt="Whole Body Therapy"
                />
              </figure>
              <p>Whole Body Therapy</p>
            </article>
            <article>
              <figure>
                <img
                  src="assets/Weight/Body Fat Reduction.jpg"
                  alt="Body Fat Reduction"
                />
              </figure>
              <p>Body Fat Reduction</p>
            </article>
            <article>
              <figure>
                <img
                  src="assets/Weight/Non surgical Liposuction.jpg"
                  alt="Non surgical Liposuction"
                />
              </figure>
              <p>Non surgical Liposuction</p>
            </article>
            <article>
              <figure>
                <img
                  src="assets/Weight/Cryolipolysis.jpg"
                  alt="Cryolipolysis"
                />
              </figure>
              <p>Cryolipolysis</p>
            </article>
            <article>
              <figure>
                <img src="assets/Weight/Cryo Therapy.jpg" alt="Cryo Therapy" />
              </figure>
              <p>Cryo Therapy</p>
            </article>
            <article>
              <figure>
                <img
                  src="assets/Weight/Fat Freezing Technology.jpg"
                  alt="Fat Freezing Technology"
                />
              </figure>
              <p>Fat Freezing Technology</p>
            </article>
            <article>
              <figure>
                <img
                  src="assets/Weight/Facial Fat Reduction.jpg"
                  alt="Facial Fat Reduction"
                />
              </figure>
              <p>Facial Fat Reduction</p>
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
              <figure>
                <img
                  src="assets/Hair/Anti Hairloss Treatment.jpg"
                  alt="Skin pic"
                />
              </figure>
              <p>Anti Hairloss Treatment</p>
            </article>
            <article>
              <figure>
                <img
                  src="assets/Hair/Anti Dandruff Treatment.jpg"
                  alt="Skin pic"
                />
              </figure>
              <p>Anti Dandruff Treatment</p>
            </article>
            <article>
              <figure>
                <img src="assets/Hair/Hair Regrowth.jpg" alt="Skin pic" />
              </figure>
              <p>Hair Regrowth</p>
            </article>
            <article>
              <figure>
                <img
                  src="assets/Hair/Platelet Rich Plasma Thearpy.jpg"
                  alt="Skin pic"
                />
              </figure>
              <p>Platelet Rich Plasma Thearpy</p>
            </article>
            <article>
              <figure>
                <img
                  src="assets/Hair/Hair Transplantation.jpg"
                  alt="Skin pic"
                />
              </figure>
              <p>Hair Transplantation</p>
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
              <a href="Skin-Tightening">
                <figure>
                  <img src="assets/skin/Skin Tightening.jpg" alt="Skin pic" />
                </figure>
                <p>Skin Tightening</p>
              </a>
            </article>
            <article>
              <figure>
                <img
                  src="assets/skin/Anti Wrinkle Treatment.jpg"
                  alt="Skin pic"
                />
              </figure>
              <p>Anti Wrinkle Treatment</p>
            </article>
            <article>
              <figure>
                <img
                  src="assets/skin/Anti Aging Treatment.jpg"
                  alt="Skin pic"
                />
              </figure>
              <p>Anti Aging Treatment</p>
            </article>
            <article>
              <figure>
                <img
                  src="assets/skin/Advanced Facial Glow.jpg"
                  alt="Skin pic"
                />
              </figure>
              <p>Advanced Facial Glow</p>
            </article>
            <article>
              <figure>
                <img
                  src="assets/skin/HydraFacial Treatment.jpg"
                  alt="Skin pic"
                />
              </figure>
              <p>HydraFacial Treatment</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin/Permanent Eyebrows.jpg" alt="Skin pic" />
              </figure>
              <p>Permanent Eyebrows</p>
            </article>
            <article>
              <figure>
                <img
                  src="assets/skin/Permanent Lip colouring.jpg"
                  alt="Skin pic"
                />
              </figure>
              <p>Permanent Lip colouring</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin/Face lift.jpg" alt="Skin pic" />
              </figure>
              <p>Face lift</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin/V shape Facial Lift.jpg" alt="Skin pic" />
              </figure>
              <p>V shape Facial Lift</p>
            </article>
          </section>
        </section>
      </div>
    </section>
  );
}

export default Services;
