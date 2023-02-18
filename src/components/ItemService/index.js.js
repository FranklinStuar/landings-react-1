import React from 'react'

function ItemService({img, title, description}) {
  return (
    <div className='item-service'>
      <figure className='item-service__figure'>
        <picture>
          <source media="(min-width: 768px)" srcSet={img}/>
          <source srcSet={img}/>
          <img  className='item-service__image' src={img} alt="{title}" width={310} height={230} />
        </picture>
      </figure>
      <div className='item-service__content'>
        <h3 className='item-service__title'>{title}</h3>
        <p className='item-service__description'>
          {description}
        </p>
      </div>
    </div>
  )
}

export { ItemService }