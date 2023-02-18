import React from 'react'

function ItemFaq ({question,answer}){
  return (
    <div className="faq">
      <h3 className="faq__question">{question}</h3>
      <p className="faq__answer">{answer}</p>
    </div>
  )
}

export {ItemFaq}