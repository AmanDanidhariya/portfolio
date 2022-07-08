import React from 'react'
import './Portfolio.css'
import myimg from '../Images/myimg.jpg' 

const Portfolio = () => {
  return (
    <section id='portfolio' >
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
    <div className='container portfolio__container'>
      <article className='portfolio__item'>
        <div className='Portfolio__item-image'> 
        <img src={myimg} alt="project" />
          </div>
           <h3>Crud Application with MERN</h3>
           <div className='portfolio__item-cta'>
           <a href="https://github.com/yashthaokar/CrudApplicationWIthNodeExpressMongoReact" className='btn' target='_blank'> Github </a>
           </div>        
     </article>
     <article className='portfolio__item'>
        <div className='Portfolio__item-image'> 
        <img src={myimg} alt="project" />
          </div>
           <h3>Movie Ticket Booking Application</h3>
           <div className='portfolio__item-cta'>
           <a href="https://github.com/yashthaokar/Movie-ticket-booking-application" className='btn' target='_blank'> Github </a>
           </div>        
     </article>
     <article className='portfolio__item'>
        <div className='Portfolio__item-image'> 
        <img src={myimg} alt="project" />
          </div>
           <h3>Hotel Food Order Application </h3>
           <div className='portfolio__item-cta'>
           <a href="https://github.com/yashthaokar/HotelFoodOrderApp" className='btn' target='_blank'> Github </a>
           </div>        
     </article>
     <article className='portfolio__item'>
        <div className='Portfolio__item-image'> 
        <img src={myimg} alt="project" />
          </div>
           <h3>Image Like Application</h3>
           <div className='portfolio__item-cta'>
           <a href="https://github.com/yashthaokar/Image_like_app" className='btn' target='_blank'> Github </a>
           </div>        
     </article>
      <article className='portfolio__item'>
        <div className='Portfolio__item-image'> 
        <img src={myimg} alt="project" />
          </div>
           <h3>This is a portfolio item title</h3>
           <div className='portfolio__item-cta'>
           <a href="https://github.com/yashthaokar" className='btn' target='_blank'> Github </a>
           </div>        
     </article>
     <article className='portfolio__item'>
        <div className='Portfolio__item-image'> 
        <img src={myimg} alt="project" />
          </div>
           <h3>This is a portfolio item title</h3>
           <div className='portfolio__item-cta'>
           <a href="https://github.com/yashthaokar" className='btn' target='_blank'> Github </a>
           </div>        
     </article>
      
    </div>
    </section >
  )
}

export default Portfolio