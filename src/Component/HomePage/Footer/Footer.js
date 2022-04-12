

import './Footer.css'
import React from "react";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
  <div className='container p-5 '>
     <div className="row  bg-white">
       <div className='col-xs-12 col-sm-12 col-md-3 my-2'>
       <Button className='btn-facebook rounded-pill px-5'><a className="btn-a text-white" href="https://web.facebook.com/" target="_blank"><i className="fab fa-facebook text-white fs-5 m-2 "> </i> Facebook</a>    </Button>
       </div>

       <div className='col-xs-12 col-sm-12 col-md-3 my-2'>
       <Button className='btn-facebook rounded-pill px-5'><a className="btn-a text-white" href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube text-danger m-2"> </i>Youtube</a>    </Button>
       </div>
       <div className='col-xs-12 col-sm-12 col-md-3 my-2'>
       <Button className='btn-facebook rounded-pill px-5'><a className="btn-a text-white" href="https://github.com/Fuhad1998?tab=repositories" target="_blank"><i className="fab fa-github m-2 text-white"></i> Github</a>    </Button>
       </div>
       <div className='col-xs-12 col-sm-12 col-md-3 my-2'>
       <Button className='btn-facebook rounded-pill px-5'><a className="btn-a text-white" href="https://www.linkedin.com/in/md-fuwad-hossain-a3b499227/" target="_blank"><i className="fab fa-linkedin m-2"></i>Linkedin</a>    </Button>
       </div>

       <div>
        <p className="text-center  p-5">
          <i className="  fas fa-copyright  "></i> Copy right 2022 By Fuwad
          Hossian
        </p>
      </div>
   </div>
  </div>
  );
};

export default Footer;



