import React from 'react';

function ItemTestimonial ({name,profession,comment}) {
  return (
    <div className="testimonial">
      <p className="testimonial__comment">"{comment}"</p>
      <div className="testimonial__author">
        <strong className="testimonial__name">{name}</strong>
        <span className="testimonial__profession">{profession}</span>
      </div>
    </div>
  )
}
export {ItemTestimonial}