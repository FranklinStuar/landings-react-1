import React from 'react'
import { ItemService } from './../ItemService/index.js'


function Services({servicesList}) {
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