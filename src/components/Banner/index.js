import React from 'react'



function Banner({title,description,largeImage,smallImage}) {

  return( 
    <div className='banner'>
      <div className="banner__content">
        <div className="banner__container-tex">
          <h1 className='banner__title'>{title}</h1>
          <span className='banner__subtitle'> {description} </span>
        </div>
      </div>
      <picture  className='banner__picture'>
        <source media="(max-width: 767px)" srcSet={smallImage}/>
        <source srcSet={largeImage}/>
        <img  className='banner__image' src={largeImage} alt={title + " - banner"} />
      </picture>

    </div>
  )
}
export { Banner }