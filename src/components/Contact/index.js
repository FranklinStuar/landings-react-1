import React from 'react'
import { PageContext } from '../../Context/PageContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faYoutube,faTiktok } from '@fortawesome/free-brands-svg-icons'




function Contact () {
  
  const {nameMessage,setNameMessage,emailMessage,setEmailMessage,descriptionMessage,setDescriptionMessage,sendMessage} = React.useContext(PageContext);

  return (
    <div className='contact'>
      <div className="contact__container">
        <div className='contact__info'>
          <h2 className='contact__title'>Contact</h2>
          <span className='contact__description'>Do you need more information about our services or would you like to schedule with us? Contact us by completing the next form or through our social media. We would be happy to resolve all your doubts. </span>

          <div className='social-media'>

            <ul className='social-media__list'>
              <li className='social-media__item'>
                <a href='/name' className='social-media__link'><FontAwesomeIcon icon={faEnvelope} /></a>
              </li>
              <li className='social-media__item'>
                <a href='/name' className='social-media__link'><FontAwesomeIcon icon={faTwitter} /></a>
              </li>
              <li className='social-media__item'>
                <a href='/name' className='social-media__link'><FontAwesomeIcon icon={faInstagram} /></a>
              </li>
              <li className='social-media__item'>
                <a href='/name' className='social-media__link'><FontAwesomeIcon icon={faYoutube} /></a>
              </li>
              <li className='social-media__item'>
                <a href='/name' className='social-media__link'><FontAwesomeIcon icon={faTiktok} /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className='contact__container-form '>
          <form action="" className="contact__form form" onSubmit={(e)=> sendMessage(e)}>
            <div className='form-group'>
              <label className='form-group__label'>Name</label>
              <input className='form-group__text-field' value={nameMessage} onChange={(e)=> setNameMessage(e.target.value)}/>
            </div>
            <div className='form-group'>
              <label className='form-group__label'>Email</label>
              <input className='form-group__text-field' type={'email'} value={emailMessage} onChange={(e)=> setEmailMessage(e.target.value)}/>
            </div>
            <div className='form-group'>
              <label className='form-group__label'>Message</label>
              <textarea className='form-group__text-field form-group__text-area' rows={4} value={descriptionMessage} onChange={(e)=> setDescriptionMessage(e.target.value)}></textarea>
            </div>
            <div className='form-cta'>
              <button className='submit' type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export {Contact}