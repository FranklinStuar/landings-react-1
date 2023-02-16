import React from 'react';
import { ItemTestimonial } from "./../ItemTestimonial/index.js" ;

const testimonialsList = [
  {name:'', comment:''}
]

function Testimonials () {
  return (
    <div className="testimonials">
      <div className="testimonials__description">
        <h2 className="testimonials__title">Testimonials</h2>
        <p className="testimonials__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio velit aut blanditiis vitae iste quam nemo eaque doloribus maxime, laudantium, voluptate fuga iure ad, dignissimos rem magnam! Quas, eveniet cumque.</p>
      </div>
      <div className="testimonials__container">
        {
          testimonialsList.map((testimonial, index) => (
            <ItemTestimonial key={index}/>
          ))
        }
      </div>
    </div>
  );
}

export {Testimonials};