import React from 'react'
import "../../page.css"
function AboutHeroSection(props:any) {
  const {imageUrl} = props;
  return (
    <section>
        <div className='aboutus_hero'>
            <img src={imageUrl} alt="hero about image"/>
        </div>
    </section>
  )
}

export default AboutHeroSection