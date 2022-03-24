import React from 'react'
import './Footer.css'
import {GrFacebookOption} from 'react-icons/gr'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>PORTFOLIO</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contact</a></li>
        
        </ul>
        <div className="footer__socials">
          <a href="https://www.facebook.com/ervin.kacar/" target="_blank"><GrFacebookOption/></a>
          <a href="https://www.instagram.com/ervin_kacar/" target="_blank"><FiInstagram/></a>
          <a href="https://twitter.com" target="_blank"><IoLogoTwitter/></a>
          
          </div>

          <div className="footer__copyright">
            <small>&copy; PORTFOLIO. All right reserved</small>
            </div>
    </footer>
  )
}

export default Footer