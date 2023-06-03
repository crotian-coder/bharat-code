import React from "react";
import Slider from "react-slick";
import htmlcss from "./images/htmlcss.jpg"
import aimastery from "./images/aimastery.jpg"


export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        arrows: true,
        accessibility:true,
        autoplay: true,
        speed:500,
        pauseOnHover:false,
        // fade:true
        
        

    };
    return (
        <div style={{display:"flex", justifyContent:"center"}}  >

        
        <div style={{width:"100%" }} >

            <Slider {...settings}>
                <div className="slide-card">
                    <img className="slide-img" src={htmlcss} alt="HTML, CSS, JS Course" />
                   
                    <div className="course-details">
                        <h3 style={{color:"white", }} className="course-title" >HTML, CSS, JS</h3>
                        <p style={{color:"white", }} className="course-description" >Learn the fundamentals of web development with HTML, CSS, and JavaScript.</p>
                    </div>
                </div>
                <div className="">
                    
                        <img className="slide-img" src={aimastery} alt="AI Mastery Course" />
                    
                    <div className="course-details">
                        <h3 className="course-title" >HTML, CSS, JS</h3>
                        <p className="course-description" >Learn the fundamentals of web development with HTML, CSS, and JavaScript.</p>
                    </div>
                </div>
            </Slider>

        </div>
        </div>

    );
}