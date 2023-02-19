import React from 'react';
import { ItemTestimonial } from "./../ItemTestimonial/index.js" ;

const testimonialsList = [
  {name:'Sofía Ramírez', profession:"", comment:'Las clases en línea con el profesor Juanito Pérez fueron excelentes. La tecnología que utilizó hizo que fuera fácil seguir las lecciones y la forma en que explica los conceptos matemáticos complejos es muy clara'},
  {name:'Juan Carlos González', profession:"", comment:'El profesor Juanito Pérez fue muy accesible y flexible en cuanto a horarios. Me sentí muy cómodo y seguro durante las clases en línea y pude mejorar mi comprensión de las matemáticas en poco tiempo"'},
  {name:'Valeria Gutiérrez', profession:"", comment:'Juanito Pérez es un profesor muy amable y servicial. Se aseguró de que entendiera los conceptos antes de pasar al siguiente tema. Las clases en línea funcionaron muy bien para mí y fue una gran experiencia de aprendizaje'}
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