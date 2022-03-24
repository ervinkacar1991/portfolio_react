import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/70A91479-E9D9-4E25-9B28-D08BE8DDF20B-removebg-preview (3).png';
import HeaderSocial from './HeaderSocial';


function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ervin Kacar</h1>
        <h5 className="text-light">Frontened Developer</h5>
         <CTA/>
         <HeaderSocial/>
         <div className="me">
           <img src={ME} alt="me"/></div>
           <a href="#contact" className='scroll__down'>Scroll Down</a> 
        </div>  
        
    </header>
  )
}

export default Header