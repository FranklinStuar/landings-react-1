import React from 'react';
import { ItemTestimonial } from "./../ItemTestimonial/index.js" ;

const testimonialsList = [
  {name:"Juan Pérez", profession:"", comment:"La cena que preparó para mi aniversario fue simplemente excepcional. Los sabores eran increíbles y la presentación era hermosa"},
  {name:"Ana Gómez", profession:"", comment:"Tomé una clase de cocina con él y aprendí mucho. Fue muy paciente y explicó todo de manera clara y concisa"},
  {name:"Luisa Martíne", profession:"", comment:"El catering para mi fiesta de cumpleaños fue un éxito gracias a su deliciosa comida y servicio excepcional"},
]


function Testimonials () {
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