
import React, { Component } from 'react'
import Blog from './Blog';
import image1 from '../pics/img2.jpg';
import image2 from '../pics/b1.jpg';
import image3 from '../pics/b2.jpg';
import image4 from '../pics/b3.jpg';
import image5 from '../pics/b4.jpg';
import image6 from '../pics/b5.jpg';

class Blogs extends Component {
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4"> 
                    <Blog imgsrc={image1} title="Joey & Rachel Traditonal romantic Wedding" msg="An elegant and easygoing spring wedding filled with Jewish tradition at The Bell Tower in downtown Nashville "/> <br></br>
                    </div>
                    <div className="col-md-4"> 
                    <Blog imgsrc={image2} title="Stefan & Elena winter Wedding" msg=" A classic winter wedding ceremony and reception at The Bridge Building in downtown hills." /><br></br>
                    </div> 
                    <div className="col-md-4">
                        <Blog imgsrc={image3} title="Steve & Nancy Timeless Fall Wedding" msg="Get inspired by the greenery and gilded details from this timeless fall wedding at the historic Bell Tower." /><br></br>
                     </div>
                    
                     <div className="col-md-4"> <Blog imgsrc={image4} title="Samuel & Carla Winter Modern Wedding" msg="A winter wedding with a traditional Christian ceremony and a fun-filled reception at The Bell Tower."/>
                     </div>
                     <div className="col-md-4"> <Blog imgsrc={image5} title="Jhon & Emily Romantic wedding" msg="A fall wedding with rich colors, whimsical florals, and serious boho style at The Bell Tower."/>
                     </div>
                     <div className="col-md-4"> <Blog imgsrc={image6} title="Jack & Samantha Summer Wedding" msg="A traditional church ceremony followed by an elegant reception  and dance party at The Bell Tower ."/>
                     </div>

                </div>
            </div>
        );
    }
    
}
export default Blogs;                       