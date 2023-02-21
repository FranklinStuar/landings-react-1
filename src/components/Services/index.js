import React from 'react'
import { ItemService } from './../ItemService/index.js'

const servicesList = [
  {img:'./img/1.jpeg', title:"Menús personalizados", description:'Crearé un menú personalizado para tu evento o reunión que satisfaga tus gustos y necesidades. '},
  {img:'./img/2.jpeg', title:"Catering para eventos", description:'Proporcionaré comida deliciosa y presentable para tus eventos especiales, desde cenas elegantes hasta comidas casuales. '},
  {img:'./img/3.jpeg', title:"Clases de cocina", description:'Aprenderás a cocinar deliciosos platos con mis clases interactivas y divertidas. '},
  {img:'./img/4.jpeg', title:"Consultoría culinaria", description:'Ofrezco consultoría culinaria a restaurantes y empresas para mejorar su oferta gastronómica.'},
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