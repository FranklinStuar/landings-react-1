import React from 'react'

function Footer () {
  return(
    <footer className='footer footer--system'>
      <div className="footer__section">
        <h2 className='footer__title'>Resources</h2>
        <div className="menu-footer">
          <a href="#link-a" className="menu-footer__link">Share this web</a>
          <a href="#link-b" className="menu-footer__link">Do Changes</a>
          <a href="#link-c" className="menu-footer__link">Do custom website</a>
          <a href="#link-d" className="menu-footer__link">Upgrade Landing</a>
        </div>
      </div>
    <div className="footer__section">
      <div className="social-media">
        <a href="#link-a" className="social-media__link">Instagram</a>
        <a href="#link-a" className="social-media__link">LinkedIn</a>
        <a href="#link-a" className="social-media__link">Email</a>
      </div>
    </div>
    </footer>
  ) 
}

export {Footer}