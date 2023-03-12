import React from 'react'
import { ItemFaq } from './../ItemFaq/index.js'


function Faqs ({faqsList}){
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