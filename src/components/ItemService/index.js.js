import React from 'react'

function ItemService() {
  return (
    <div className='item-service'>
      <figure className='item-service__figure'>
        <picture>
          <source media="(min-width: 768px)" srcSet="large.jpg"/>
          <source srcSet="small.jpg"/>
          <img  className='item-service__image' src="small.jpg" alt="Proin eget tortor risus" />
        </picture>
      </figure>
      <div className='item-service__content'>
        <h3 className='item-service__title'>Proin eget tortor risus</h3>
        <p className='item-service__description'>
          Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin molestie malesuada. Proin eget tortor risus.
        </p>
      </div>
    </div>
  )
}

export { ItemService }