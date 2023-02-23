import React from 'react'

function Banner() {
  return( 
    <div className='banner'>
      <div className="banner__content">
        <div className="banner__container-tex">
          <h1 className='banner__title'>Educación matemática online y eficaz</h1>
          <span className='banner__subtitle'>
            Te ofrecemos la educación personalizada más avazada en matemática utilizando la tecnología a tu favor
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