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
          <section className="overflow__services__section" ref={containerOneRef}>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Whole Body Weightloss</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Advanced Inchloss Treatment</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Figure Correction</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Body countouring</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Whole Body Therapy</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Body Fat Reduction</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Non surgical Liposuction</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Cryolipolysis</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Cryo Therapy</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Fat Freezing Technology</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
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
          <section className="overflow__services__section" ref={containerTwoRef}>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Anti Hairloss Treatment</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Anti Dandruff Treatment</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Hair Regrowth</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Platelet Rich Plasma Thearpy</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
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
          <section className="overflow__services__section" ref={containerThirdRef}>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Skin Tightening</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Anti Wrinkle Treatment</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Anti Aging Treatment</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Advanced Facial Glow</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>HydraFacial Treatment</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Permanent Eyebrows</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Permanent Lip colouring</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
              </figure>
              <p>Face lift</p>
            </article>
            <article>
              <figure>
                <img src="assets/skin.jpeg" alt="Skin pic" />
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
