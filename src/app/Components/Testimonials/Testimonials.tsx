import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonial__section__outer">
      <div className="container">
        <div className="Testimonial__wrapper">
          <h3 className="testimonial__heading">Testimonials</h3>
          <section className="testimonial__section">
            <article className="testimonial-card">
              <div className="text">
                Fat Flux and Dr. Keerthi made my weight loss journey
                comfortable, safe, and life-transforming. Thank you!{" "}
                <i className="fas fa-quote-right quote"></i>
              </div>

              <div className="footer">
                <div className="image"></div>
                <h3 className="person">Ashwani</h3>
              </div>
            </article>
            <article className="testimonial-card">
              <div className="text">
                Fat Flux's exceptional service, effective treatment, and caring
                staff helped me achieve outstanding results, losing 10kgs in
                just 8 sessions. Thank you, Fat Flux, for transforming my weight
                loss journey! <i className="fas fa-quote-right quote"></i>
              </div>

              <div className="footer">
                <div className="image"></div>
                <h3 className="person">Shiva Mudiraj</h3>
              </div>
            </article>
            <article className="testimonial-card">
              <div className="text">
                Thank you, Fat Flux and Dr. Keerthi, for being the best
                consultants. I'm extremely happy with the treatment and grateful
                for the fantastic results{" "}
                <i className="fas fa-quote-right quote"></i>
              </div>

              <div className="footer">
                <div className="image"></div>
                <h3 className="person">Durga Prasad</h3>
              </div>
            </article>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
