import React from 'react';
import '../../App.css';
import '../../Blog.css';

export default function Blog() {
    const Blog = props =>{
        return(
        <div className="Blog text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc}alt='image' className="card-img-top"/>
            
           <div className="Blog-body text-dark">
               <h4 className="card-title">{props.title}</h4>
               <p className="card-text text-secondary">{props.msg}</p>
               <a href="#" className="btn btn-outline-success">know More</a>
           </div>
           </div>
        </div>
        );
    }   
}