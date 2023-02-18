import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer () {
  return(
    <footer className='footer footer--system'>
      <div className="footer__container">
        <div className="footer__section">
          <h2 className='footer__title'>Resources</h2>
          <div className="menu-footer">
            <a href="#link-a" className="menu-footer__link">Share this web</a>
            <a href="#link-b" className="menu-footer__link">Do Some Changes</a>
            <a href="#link-c" className="menu-footer__link">Do A Custom Website</a>
            <a href="#link-d" className="menu-footer__link">Upgrade Landing Page</a>
          </div>
        </div>
        <div className="footer__section">
          <div className="footer__description">
            At Tech Company, we strive to provide the best technology solutions for our customers.
          </div>
          <div className='social-media social-media--light social-media--right'>

            <ul className='social-media__list'>
              <li className='social-media__item'>
                <a href='https://franklindev.top/' className='social-media__link' rel="noreferrer" target={"_blank"}><FontAwesomeIcon icon={faGlobe} /></a>
              </li>
              <li className='social-media__item'>
                <a href='https://www.linkedin.com/in/franklin-penafiel-ramirez/' className='social-media__link' rel="noreferrer" target={"_blank"}><FontAwesomeIcon icon={faLinkedin} /></a>
              </li>
              <li className='social-media__item'>
                <a href='https://www.instagram.com/fstuar_dev/' className='social-media__link' rel="noreferrer" target={"_blank"}><FontAwesomeIcon icon={faInstagram} /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__container">
        <span className="footer__copyright"> © <a href="https://franklindev.top/">Franklin Peñafiel</a> . Web Developer - This web is created using AI to content and images
</span>
      </div>
    </footer>
  ) 
}

export {Footer}