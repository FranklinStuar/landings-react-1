import React from 'react'
import { ItemFaq } from './../ItemFaq/index.js'

const faqsList = [
  {
  question:"¿Cuánto tiempo de antelación necesito para reservar tus servicios? ",
  answer:"Se recomienda reservar con al menos dos semanas de anticipación, pero puedo trabajar con plazos más cortos si es necesario. "
  },
  {
  question:"¿Ofreces opciones vegetarianas y veganas? ",
  answer:"Sí, puedo crear menús personalizados para satisfacer tus necesidades alimentarias. "
  },
  {
  question:"¿Ofreces servicios de catering para eventos grandes? ",
  answer:"Sí, puedo proporcionar comida para eventos de hasta 500 personas. "
  },
  {
  question:"¿Cuál es tu estilo de cocina? ",
  answer:"Me especializo en cocina de autor con influencias internacionales. "
  },
  {
  question:"¿Ofreces servicio de mesa y decoración? ",
  answer:"Sí, puedo proporcionar un servicio completo que incluye mesa y decoración. "
  },
  {
  question:"¿Cuál es tu área de servicio? ",
  answer:"Estoy disponible para eventos en toda la ciudad. "
  },
  {
  question:"¿Ofreces servicio de limpieza después del evento? ",
  answer:"Sí, puedo proporcionar servicio de limpieza por un costo adicional."
  },
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