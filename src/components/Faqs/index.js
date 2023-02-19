import React from 'react'
import { ItemFaq } from './../ItemFaq/index.js'

const faqsList = [
  {
    question: "¿Cuáles son los horarios de las clases?", 
    answer: "Los horarios de las clases son flexibles y se pueden programar de acuerdo a la disponibilidad del estudiante y del profesor. Si tiene alguna preferencia de horario, comuníquese conmigo para programar una sesión."
  },
  {
    question: "¿Cuál es el costo de las clases?", 
    answer: "El costo de las clases varía según la duración de la sesión y el nivel de estudio requerido. Para obtener más información sobre las tarifas, comuníquese conmigo a través de mi página web."
  },
  {
    question: "¿Cómo se realizan las clases en línea?", 
    answer: "Las clases se realizan a través de una plataforma en línea, donde el estudiante y el profesor pueden conectarse y trabajar juntos en tiempo real. Se pueden compartir archivos y documentos, y también se puede utilizar una pizarra virtual para explicar conceptos matemáticos."
  },
  {
    question: "¿Qué nivel de matemáticas puedo enseñar?", 
    answer: "Como profesor universitario de matemáticas de alto nivel, puedo ofrecer clases de matemáticas de nivel básico, intermedio y avanzado. Desde álgebra, cálculo y estadística hasta geometría y matemáticas aplicadas."
  },
  {
    question: "¿Cómo puedo prepararme para las clases?", 
    answer: "Los estudiantes deben tener su material de estudio a mano, incluyendo libros de texto, ejercicios, y cualquier otro material relevante. También pueden proporcionar previamente los temas o problemas que necesiten revisar. Además, los estudiantes deben asegurarse de tener una buena conexión a Internet y una cámara web de calidad."
  },
  {
    question: "¿Qué métodos de pago se aceptan?", 
    answer: "Se aceptan diversos métodos de pago, tales como tarjeta de crédito, transferencias bancarias y billeteras electrónicas. Todos los detalles de pago se discutirán durante la reserva de la sesión."
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