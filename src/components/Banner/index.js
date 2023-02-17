import React from 'react'

function Banner() {
  return( 
    <div className='banner'>
      <div className="banner__content">
        <div className="banner__container-tex">
          <h1 className='banner__title'>Mantenimiento de Automóviles de Primera Clase</h1>
          <span className='banner__subtitle'>
            Descubre cómo nuestro servicio de mecánica especializada puede ayudarte a mantener tu vehículo en su mejor estado
          </span>
        </div>
      </div>
      <picture  className='banner__picture'>
        <source media="(min-width: 768px)" srcSet="./img/banner.jpeg"/>
        <source srcSet="./img/banner.jpeg"/>
        <img  className='banner__image' src="./img/banner.jpeg" alt="A beautiful banner" />
      </picture>

    </div>
  )
}
export { Banner }