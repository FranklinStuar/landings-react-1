import React from 'react';
import { ItemTestimonial } from "./../ItemTestimonial/index.js" ;

const testimonialsList = [
  {name:'María González', profession:"Gerente", comment:'La atención al cliente en esta mecánica es excepcional. Desde que llegué, me sentí en confianza con el equipo de mecánicos. Definitivamente regresaré.'},
  {name:'Juan Pérez', profession:"Abogado", comment:'El trabajo que realizaron en mi auto fue impresionante. No solo solucionaron el problema, sino que me explicaron todo el proceso de reparación. Recomendaré esta mecánica a todos mis amigos.'},
  {name:'Ana Torres', profession:"Dueño de tiena", comment:'Me encantó el trato personalizado que recibí en esta mecánica. Fueron muy detallistas en la inspección de mi auto y me informaron de todo lo que necesitaba ser reparado. Gracias a ellos mi auto está como nuevo.'}
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