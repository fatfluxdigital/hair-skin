import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="aboutus__section">
      <div className="container">
        <h3 className="aboutus__heading all__main__headings">About Us</h3>
        <section className="aboutus__crux">
          <article>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              vitae animi qui officia minima? Tempore dicta, amet commodi
              deserunt vero veniam laudantium officiis, sapiente excepturi
              quisquam reprehenderit quia aliquid numquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              esse ratione cumque perspiciatis inventore fugiat repellendus
              totam maiores sint ad, sed eius ut porro illum delectus
              reprehenderit, distinctio est dolor.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              cumque tempore officiis deleniti molestias quisquam eum inventore
              deserunt iure aspernatur eos, in, odio quo nesciunt distinctio
              porro minima consectetur impedit.
            </p>
          </article>
          <figure>
            <img src="aboutus/aboutus.jpg" alt="fat flex" />
          </figure>
        </section>
      </div>
    </section>
  );
}

export default AboutUs;
