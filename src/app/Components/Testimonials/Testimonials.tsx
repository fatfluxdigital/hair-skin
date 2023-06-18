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
                Lorem ipsum dolor sit amet consectetur elit. Ipsa voluptatum
                ipsum, laudantium minima aliquam porro? Iste, Et, esta ah{" "}
                <i className="fas fa-quote-right quote"></i>
              </div>

              <div className="footer">
                <div className="image"></div>
                <h3 className="person">Jane Doe</h3>
              </div>
            </article>
            <article className="testimonial-card">
              <div className="text">
                Lorem ipsum dolor sit amet consectetur elit. Ipsa voluptatum
                ipsum, laudantium minima aliquam porro? Iste, Et, esta ah{" "}
                <i className="fas fa-quote-right quote"></i>
              </div>

              <div className="footer">
                <div className="image"></div>
                <h3 className="person">Jane Doe</h3>
              </div>
            </article>
            <article className="testimonial-card">
              <div className="text">
                Lorem ipsum dolor sit amet consectetur elit. Ipsa voluptatum
                ipsum, laudantium minima aliquam porro? Iste, Et, esta ah{" "}
                <i className="fas fa-quote-right quote"></i>
              </div>

              <div className="footer">
                <div className="image"></div>
                <h3 className="person">Jane Doe</h3>
              </div>
            </article>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
