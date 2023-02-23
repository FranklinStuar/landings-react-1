import React from 'react'
import { ItemService } from './../ItemService/index.js'

const servicesList = [
  {img:'./img/1.webp', title:"Mantenimiento Preventivo", description:'Mantén tu vehículo de lujo en óptimas condiciones con nuestro servicio de mantenimiento de alta calidad que te garantiza la tranquilidad de saber que tu inversión está en las mejores manos.'},
  {img:'./img/2.webp', title:"Reparación de Motor", description:'Restaura la potencia y rendimiento de tu vehículo de lujo con nuestro servicio de reparación de motores realizado por técnicos altamente capacitados y con experiencia en autos de alta gama.'},
  {img:'./img/3.webp', title:"Alineación y Balanceo", description:'Asegura la estabilidad y manejo de tu vehículo de lujo con nuestro servicio de alineación y balanceo, donde nos enfocamos en detalles precisos y utilizamos equipos de última generación.'},
  {img:'./img/4.webp', title:"Cambio de Aceite", description:'Extiende la vida útil del motor de tu vehículo de lujo con nuestro servicio de cambio de aceite premium, realizado con productos de la más alta calidad y con la atención personalizada que mereces.'}
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