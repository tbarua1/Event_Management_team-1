import React from 'react';
import '../../App.css';
import '../../Blog.css';
import image1 from'../../images/b6.jpg';
import image2 from'../../images/b1.jpg';
import image3 from'../../images/b2.jpg';
import image4 from'../../images/b3.jpg';
import image5 from'../../images/b4.jpg';
import image6 from'../../images/b5.jpg';

export default function Blog() {
  return (
  <div className="card text-center">
      <div className=" overflow">
          <img src={image1} alt="image" className="top-image"/>
           </div>
           <div className="card-body text-dark">
               <h4 className="card-title">Joey & Rachel Traditonal romantic Wedding</h4>
               <p className="card-text text-secondary">An elegant and easygoing spring wedding filled with Jewish tradition at The Bell Tower in downtown Nashvill  </p>
               <a href="#" className='btn btn-outline-primary'>Know More</a>
           </div>
           <div className=" overflow">
          <img src={image2} alt="image"/>
           </div>
           <div className="card-body text-dark">
               <h4 className="card-title">Stefan & Elena winter Wedding</h4>
               <p className="card-text text-secondary">A classic winter wedding ceremony and reception at The Bridge Building in downtown hills </p>
               <a href="#" className='btn btn-outline-primary'>Know More</a>
           </div>
           <div className=" overflow">
          <img src={image3} alt="image"/>
           </div>
           <div className="card-body text-dark">
               <h4 className="card-title">Steve & Nancy Timeless Fall Wedding</h4>
               <p className="card-text text-secondary">Get inspired by the greenery and gilded details from this timeless fall wedding at the historic Bell Tower.  </p>
               <a href="#" className='btn btn-outline-primary'>Know More</a>
           </div>
           <div className=" overflow">
          <img src={image4} alt="image"/>
           </div>
           <div className="card-body text-dark">
               <h4 className="card-title">Samuel & Carla Winter Modern Wedding</h4>
               <p className="card-text text-secondary">A winter wedding with a traditional Christian ceremony and a fun-filled reception at The Bell Tower</p>
               <a href="#" className='btn btn-outline-primary'>Know More</a>
           </div>
           <div className=" overflow">
          <img src={image5} alt="image"/>
           </div>
           <div className="card-body text-dark">
               <h4 className="card-title">Jhon & Emily Romantic wedding</h4>
               <p className="card-text text-secondary">A fall wedding with rich colors, whimsical florals, and serious boho style at The Bell Tower </p>
               <a href="#" className='btn btn-outline-primary'>Know More</a>
           </div>
           <div className=" overflow">
          <img src={image6} alt="image"/>
           </div>
           <div className="card-body text-dark">
               <h4 className="card-title">Jack & Samantha Summer Wedding</h4>
               <p className="card-text text-secondary">A traditional church ceremony followed by an elegant reception  and dance party at The Bell Tower </p>
               <a href="#" className='btn btn-outline-primary'>Know More</a>
           </div>
  </div>
  );
}

     
    