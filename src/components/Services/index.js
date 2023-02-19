import React from 'react'
import { ItemService } from './../ItemService/index.js'

const servicesList = [
  {img:'./img/1.jpeg', title:"Tutorías personalizadas", description:'Cada estudiante tiene un nivel de comprensión y habilidades diferentes, por lo que me aseguraría de ofrecer tutorías personalizadas para abordar sus necesidades específicas. Esto podría incluir la revisión de conceptos que están teniendo dificultades para entender o la preparación de exámenes.'},
  {img:'./img/2.jpeg', title:"Preparación de exámenes", description:'Ayudaría a los estudiantes a prepararse para sus exámenes, proporcionándoles recursos y estrategias para mejorar su comprensión de los temas y aumentar su confianza.'},
  {img:'./img/3.jpeg', title:"Asesoramiento en la elección de carreras", description:'Como profesor de matemáticas, tendría una amplia experiencia en el campo de las matemáticas y podría brindar asesoramiento sobre las posibles carreras que los estudiantes podrían considerar en este campo.'},
  {img:'./img/4.jpeg', title:"Aprendizaje en línea", description:'En el mundo actual, muchas personas prefieren aprender en línea, así que estaría dispuesto a ofrecer mis servicios de tutoría en línea para satisfacer las necesidades de aquellos que prefieren el aprendizaje a distancia.'},
]

/*
 */
function Services() {
  return (
    <div className='services'>
      <div className="services__list">
        {servicesList.map((service, index) => (
          <ItemService key={index} img={service.img} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  )
}

export { Services }