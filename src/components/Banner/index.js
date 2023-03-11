import React from 'react'

const banner = [
  {title: "Mantenimiento de Automóviles de Primera Clase"},
  {description: "Descubre cómo nuestro servicio de mecánica especializada puede ayudarte a mantener tu vehículo en su mejor estado"},
  {image: {
    large: "./img/banner.webp",
    small: "./img/banner.webp",
  }}
]

function Banner() {
  return( 
    <div className='banner'>
      <div className="banner__content">
        <div className="banner__container-tex">
          <h1 className='banner__title'>{banner.title}</h1>
          <span className='banner__subtitle'> {banner.description} </span>
        </div>
      </div>
      <picture  className='banner__picture'>
        <source media="(max-width: 767px)" srcSet={banner.image.small}/>
        <source srcSet={banner.image.large}/>
        <img  className='banner__image' src={banner.image.large} alt={banner.title + " - banner"} />
      </picture>

    </div>
  )
}
export { Banner }