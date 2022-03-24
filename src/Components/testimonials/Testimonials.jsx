import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.jfif'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Dzemil Dupljak',
    review: 'Modi alias animi dolorem aliquam ea eum beaten maiores, consecteur presentum quibusdam commodi velir porno blanditiis consequetur quec. Dolorem perspecitais asperencdo labore distancio ratione delectus voluptutem dolores desertum explicito nocturnu ductimus.'
  },
  {
    avatar: AVTR2,
    name: 'Izudin Mavric',
    review: 'Modi alias animi dolorem aliquam ea eum beaten maiores, consecteur presentum quibusdam commodi velir porno blanditiis consequetur quec. Dolorem perspecitais asperencdo labore distancio ratione delectus voluptutem dolores desertum explicito nocturnu ductimus.'
  },
  {
    avatar: AVTR3,
    name: 'Daris Hodzic',
    review: 'Modi alias animi dolorem aliquam ea eum beaten maiores, consecteur presentum quibusdam commodi velir porno blanditiis consequetur quec. Dolorem perspecitais asperencdo labore distancio ratione delectus voluptutem dolores desertum explicito nocturnu ductimus.'
  },
  {
    avatar: AVTR4,
    name: 'Remzo Gusinac',
    review: 'Modi alias animi dolorem aliquam ea eum beaten maiores, consecteur presentum quibusdam commodi velir porno blanditiis consequetur quec. Dolorem perspecitais asperencdo labore distancio ratione delectus voluptutem dolores desertum explicito nocturnu ductimus.'
  }
]

function Testimonials() {
  return (
   
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
      
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
         {

       data.map(({avatar, name, review},index)=>{
return (
  <SwiperSlide key={index} className='testimonial'>
  <div className="client__avatar">
    <img src={avatar} alt="Avatar One" /></div>
    <h5 className='client__name'>{name}</h5>
    <small className='client__review'>
      {review}
      </small>
</SwiperSlide>
)
       })

      }
        </Swiper>
      </section>
  )
}

export default Testimonials