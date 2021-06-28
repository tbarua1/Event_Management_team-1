import React from 'react'
import BlogUI from './BlogUI';
import image1 from '../../images/a8.jpeg';
import image2 from '../../images/b1.jpeg';
import image3 from '../../images/b1.jpeg';
import image4 from '../../images/b1.jpeg';
import image5 from '../../images/b1.jpeg';
import image6 from '../../images/b1.jpeg';

const Blog = () => {

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <BlogUI imgsrc={image1} title="Joey & Rachel Traditonal romantic Wedding" msg="An elegant and easygoing spring wedding filled with Jewish tradition at The Bell Tower in downtown Nashville " /> <br></br>
                </div>
                <div className="col-md-4">
                    <BlogUI imgsrc={image2} title="Stefan & Elena winter Wedding" msg=" A classic winter wedding ceremony and reception at The Bridge Building in downtown hills." /><br></br>
                </div>
                <div className="col-md-4">
                    <BlogUI imgsrc={image3} title="Steve & Nancy Timeless Fall Wedding" msg="Get inspired by the greenery and gilded details from this timeless fall wedding at the historic Bell Tower." /><br></br>
                </div>

                <div className="col-md-4"> <BlogUI imgsrc={image4} title="Samuel & Carla Winter Modern Wedding" msg="A winter wedding with a traditional Christian ceremony and a fun-filled reception at The Bell Tower." />
                </div>
                <div className="col-md-4"> <BlogUI imgsrc={image5} title="Jhon & Emily Romantic wedding" msg="A fall wedding with rich colors, whimsical florals, and serious boho style at The Bell Tower." />
                </div>
                <div className="col-md-4"> <BlogUI imgsrc={image6} title="Jack & Samantha Summer Wedding" msg="A traditional church ceremony followed by an elegant reception  and dance party at The Bell Tower ." />
                </div>

            </div>
        </div>
    );
}


export default Blog;
