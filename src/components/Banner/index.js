import React from 'react'

function Banner() {
  return( 
    <div className='banner'>
      <div className="banner__content">
        <div className="banner__container-tex">
          <h1 className='banner__title'>Saborea la diferencia</h1>
          <span className='banner__subtitle'>
            Cocina de autor para todos los gustos
          </span>
        </div>
      </div>
      <picture  className='banner__picture'>
        <source media="(min-width: 768px)" srcSet="./img/banner.webp"/>
        <source srcSet="./img/banner.webp"/>
        <img  className='banner__image' src="./img/banner.webp" alt="A beautiful banner" />
      </picture>

    </div>
  )
}
export { Banner }