import React from 'react'
import { ItemFaq } from './../ItemFaq/index.js'

const faqsList = [
  {
    question: "¿Qué tipo de autos reparan en la mecánica?", 
    answer: "En nuestra mecánica especializada en la reparación de autos de alta gama y de lujo. Trabajamos con marcas de prestigio y alta calidad."
  },
  {
    question: "¿Cuál es el tiempo de reparación promedio?", 
    answer: "El tiempo de reparación depende del tipo de servicio y del modelo de tu auto, pero nuestro equipo de expertos se asegura de que todas las reparaciones se realicen con rapidez y eficacia sin sacrificar la calidad."
  },
  {
    question: "¿Cuánto cuesta una reparación en la mecánica?", 
    answer: "El costo de las reparaciones depende del tipo de servicio y del modelo de tu auto, pero siempre te proporcionaremos un presupuesto claro y detallado antes de iniciar cualquier trabajo."
  },
  {
    question: "¿Ofrecen algún tipo de garantía en las reparaciones?", 
    answer: "Sí, ofrecemos una garantía en todas nuestras reparaciones, asegurándote que el trabajo se realiza de manera correcta y con los mejores estándares de calidad."
  },
  {
    question: "¿Cómo puedo reservar una cita para reparar mi auto?", 
    answer: "Puedes reservar una cita a través de nuestra página web, por correo electrónico o por teléfono. Nuestro equipo se asegurará de agendar una fecha y hora que sea conveniente para ti."
  },
  {
    question: "¿Cuál es la experiencia de su equipo de mecánicos?", 
    answer: "Nuestro equipo de mecánicos cuenta con años de experiencia y están altamente capacitados y certificados para trabajar en autos de alta gama y lujo. También participan en formación continua para estar al día con las últimas tecnologías y técnicas."
  },
  {
    question: "¿Tienen servicio de asistencia en carretera?", 
    answer: "Sí, ofrecemos servicio de asistencia en carretera las 24 horas del día para nuestros clientes. Simplemente llámanos y te enviaremos la ayuda que necesites."
  }
]
function Faqs (){
  return (
    <div className="faqs">
      <div className="faqs__container">
        <h2 className="faqs__title">Faq's</h2>
        <div className="faqs__list">
          {
            faqsList.map((faq, index) => 
              <ItemFaq  key={index} question={faq.question} answer={faq.answer}/>
            )
          }
        </div>
      </div>
    </div>
  )
}

export {Faqs}