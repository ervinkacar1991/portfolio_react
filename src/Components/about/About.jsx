import React from 'react'
import './About.css';
import ME from '../../assets/77694BC0-91A1-4B36-B3B9-B49643EF1F69-removebg-removebg-preview.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ Years Working</small>
                </article>
                <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>200+ WorldWide</small>
                </article>
                <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>20+ Completed Projcets</small>
                </article>
              </div>
              <p>
              Frontend developer experienced with React.js, with ability
to learn and collaborate in rapidly changing environments
and compositions.
Ready to apply my passion to a talented engineering team
to develop quality solutions. Eager to tackle web
development challenges to achieve lasting impacts on user
experience.
Experience has taught me to take accessibility and
responsivnes seriously, and I am excited to continue my
career with focus on making site developments easily
accesible and responsive.

              </p>
              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
      </section>
  )
}

export default About