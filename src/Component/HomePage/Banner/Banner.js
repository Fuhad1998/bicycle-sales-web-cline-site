

import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from "../../../img/banner/banner-2/New Project (6).jpg"
import img2 from "../../../img/banner/banner-2/New Project (7).jpg"
import img3 from "../../../img/banner/banner-2/New Project (8).jpg"

const Banner = () => {
    
      
   
    return (
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={img2}
            alt="First slide"
          />
          <Carousel.Caption>
           <Button><Link className='text-white buy-now-btn' to="/allProducts">Explore More</Link></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={img1}
            alt="Second slide"
          />
          <Carousel.Caption>
          <Button><Link className='text-white buy-now-btn' to="/allProducts">Explore More</Link></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
          <Button><Link className='text-white buy-now-btn' to="/allProducts">Explore More</Link></Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;