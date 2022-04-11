

import DeleteIcon from '@mui/icons-material/Delete';
import facebookIcon from '@mui/icons-material/Delete';
import React from "react";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
   <div className="row p-5">
       <div >
           <Button><i class="fa-brands fa-facebook"></i>Facebook</Button>
       </div>

       <div >
       <Button><a className="" href="https://web.facebook.com/" target="_blank"><i className="fab fa-facebook text-primary m-2 "> </i></a></Button>
       </div>
       <div >
       <Button variant="outlined" startIcon={<facebookIcon/>}>
  Delete
</Button>
       </div>

       <div>
        <p className="text-center  p-5">
          <i className="  fas fa-copyright  "></i> Copy right 2022 By Fuwad
          Hossian
        </p>
      </div>
   </div>
  );
};

export default Footer;
