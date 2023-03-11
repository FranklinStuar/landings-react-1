import React from 'react'

const aboutUs = "Cada servicio que ofrecemos es una oportunidad para demostrar nuestra excelencia y liderazgo. Nos enorgullece ser innovadores y pioneros en el mundo de la reparación automotriz, utilizando la última tecnología y técnicas avanzadas para superar las expectativas de nuestros clientes. "

function Phrase() {
  return <div className='phrase'>
    <span className='phrase__text'> {aboutUs} </span>
  </div>
}
export { Phrase }