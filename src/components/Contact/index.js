import React from 'react'

function Contact () {
  return (
    <div className='contact'>
      <div className='contact__info'>
        <h2 className='contact__title'>Contact</h2>
        <span className='contact__description'>Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. </span>
        <div className='social-media'>
          <ul className='social-media__list'>
            <li className='social-media__item'>
              <span className='social-media__name'>Facebook</span>
            </li>
            <li className='social-media__item'>
              <span className='social-media__name'>Instagram</span>
            </li>
            <li className='social-media__item'>
              <span className='social-media__name'>Tik Tok</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='contact__form '>
        <div className='form-group'>
          <label className='form-group__label'>Name</label>
          <input className='form-group__text-field'/>
        </div>
        <div className='form-group'>
          <label className='form-group__label'>Email</label>
          <input className='form-group__text-field' type={'email'}/>
        </div>
        <div className='form-group'>
          <label className='form-group__label'>Message</label>
          <textarea className='form-group__text-field'></textarea>
        </div>
        <div className='form-cta'>
          <button type='submit'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export {Contact}