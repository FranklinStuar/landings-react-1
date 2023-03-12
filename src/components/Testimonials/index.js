import React from 'react';
import { ItemTestimonial } from "./../ItemTestimonial/index.js" ;


function Testimonials ({testimonialsList}) {
  return (
    <div className="testimonials">
      <div className="testimonials__container">
        {
          testimonialsList.map((testimonial, index) => (
            <ItemTestimonial key={index} name={testimonial.name} profession={testimonial.profession} comment={testimonial.comment} />
          ))
        }
      </div>
    </div>
  );
}

export {Testimonials};