import React from 'react'

function Banner() {
  return( 
    <div className='banner'>
      <h1 className='banner__title'>Pellentesque in ipsum id orci porta dapibus</h1>
      <span className='banner__subtitle'>
        Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus
      </span>
      <picture>
        <source media="(min-width: 768px)" srcSet="large.jpg"/>
        <source srcSet="small.jpg"/>
        <img  className='banner__image-banner' src="small.jpg" alt="A beautiful banner" />
      </picture>
    </div>
  )
}
export { Banner }