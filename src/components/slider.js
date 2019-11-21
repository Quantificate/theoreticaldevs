import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";

class MainSlider extends Component {
  render(){
    return(
      <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="Theoretical Dev Front End Slide" />
          <Carousel.Caption>
            <h3>Efficient Front End and User Experience</h3>
            <p>We use React.js to create fast, powerful, and convenient user interfaces.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Theoretical Dev Back End Slide" />
          <Carousel.Caption>
            <h3>Powerful Back End and Databasing</h3>
            <p>With a back end powered by Node.js, Express, and MySQL, you'll have all the power you need!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Theoretical Dev Webmaster Slide" />
          <Carousel.Caption>
            <h3>Don't Want to Deal with Hosting and Maintenance?</h3>
            <p>We can do that for you! We have multiple options for long-term maintenance plans.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
    )
  }
}

export default MainSlider;
