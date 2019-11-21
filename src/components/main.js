import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import mainImg1 from '../images/dev.png';
import mainImg2 from '../images/front.png';
import mainImg3 from '../images/back.png';
import mainImg4 from '../images/web.png';

class Main extends Component {
  render(){
    return(
      <>
      <div className="container" id="contentbox">
        <div className="row content1">
          <div className="col-8">
            <h1>Welcome to Theoretical Development!</h1>
            <h4>You've found the home of the most creative web development team on the internet! [citation needed]</h4>
            <p>We're a full-service web design, development, and management service, using React, Node, Express, and MySQL to design, build, and maintain any flavor of website or web app.</p>
          </div>
          <div className="col-4">
            <img src={mainImg1} alt="Web Development" />
          </div>
        </div>
        <div className="row content2">
          <div className="col-4">
            <img src={mainImg2} alt="Front End Design" />
            <Button variant="primary" onClick={this.props.handleFend}>See more about front end design.</Button>
          </div>
          <div className="col-8">
            <h2>Front-End Design</h2>
            <p>No matter what style you like, we can create it. Fancy decorative scripts with fleur-de-lys? Oui. Minimalist dark themes? Sure. Want it to look like a post-apocalyptic wasteland? Fuck You Road Rash! We design your front-end with React and Bootstrap to create fast, mobile-friendly interfaces.</p>
          </div>
        </div>
        <div className="row content3">
          <div className="col-8">
            <h2>Back-End Development</h2>
            <p>Do you need Lead Management for your sales team? Or maybe a call center portal for your team? Or perhaps just a user profile system for your clients? We can do all of those and more using Node.js and Express with MySQL to store your data securely.</p>
          </div>
          <div className="col-4">
            <img src={mainImg3} alt="Back End Development" />
            <Button variant="warning" onClick={this.props.handleBend}>Learn about our back-end development.</Button>
          </div>
        </div>
        <div className="row content2">
          <div className="col-4">
            <img src={mainImg4} alt="Webmastering" />
            <Button variant="info" onClick={this.props.handleWeb}>See our web maintenance packages.</Button>
          </div>
          <div className="col-8">
            <h2>Webmastering</h2>
            <p>Don't have time to update images, maintain security features, renew domains, or any of the other myriad tasks that come with running a website? Let us do it for you! We offer competitive monthly service packages, as well as one-time services to maintain and update your site, even if you didn't have us design/build it!</p>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Main;
