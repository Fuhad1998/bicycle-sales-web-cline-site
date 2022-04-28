import React from 'react';
import img from "../../img/support/image-support.png"
import "./Support.css"

const Support = () => {
    return (
        <div  className='row  py-5 support-container' >
            <div data-aos="fade-right" className='col-md-6 col-xs-12 col-sm-12'>
                <img style={{width: "350px"}} src={img} alt="" />

            </div>
            <div data-aos="fade-left"  className='col-md-6 col-xs-12 col-sm-12'>
                    <h1>Technical Support</h1>
                    <h3>Contact Us Now</h3>
                    <h5 className='contact-text'><b>Email : </b> <i>vinovathemes@gmail.com</i></h5>
                    <h5 className='contact-text'><b>Support Time :</b> <i>Monday – Friday</i></h5>
                    <h5 className='contact-text'><b>Response Time :</b> <i>24 Hours – 48 Hours</i></h5>
            </div>
            
        </div>
    );
};

export default Support;