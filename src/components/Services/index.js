import React from 'react'
import { ItemService } from './../ItemService/index.js'

const servicesList = [
  {img:'', title:"", description:''}
]

function Services() {
  return (
    <div className='services'>
      {servicesList.map((service, index) => (
        <ItemService key={index}/>
      ))}
    </div>
  )
}

export { Services }