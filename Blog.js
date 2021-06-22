import React from 'react';
import './Blog.css';
//import image1 from '../pics/img2.jpg';

 const Blog = props =>{
     return(
     <div className="Blog text-center shadow">
         <div className="overflow">
             <img src={props.imgsrc}alt='image' className="card-img-top"/>
         </div>
        <div className="Blog-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">{props.msg}</p>
            <a href="#" className="btn btn-outline-success">know More</a>
        </div>

     </div>
     );
 }
 export default Blog;