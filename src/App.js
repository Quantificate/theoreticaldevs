import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, ButtonToolbar, ButtonGroup, Modal} from 'react-bootstrap';
import MainSlider from './components/slider';
import Main from './components/main';
import Fend from './components/fend';
import Bend from './components/bend';
import Web from './components/web';
import Contact from './components/contact';
import Price from './components/pricing';
import Social from './components/social';
import './App.css';
import logo from './images/logo.png';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showFend: false,
      showBend: false,
      showWeb: false,
      showMain: true,
      showOther:false
    }

    this.handleFend = this.handleFend.bind(this);
    this.handleBend = this.handleBend.bind(this);
    this.handleWeb = this.handleWeb.bind(this);
    this.handleOther = this.handleOther.bind(this);
    this.handleHome = this.handleHome.bind(this);
  }

  handleFend(){
    this.setState({
      showFend:true,
      showBend:false,
      showWeb:false,
      showMain:false,
      showOther:false
    })
  }

  handleBend(){
    this.setState({
      showBend:true,
      showFend:false,
      showWeb:false,
      showMain:false,
      showOther:false
    })
  }

  handleWeb(){
    this.setState({
      showFend:false,
      showBend:false,
      showWeb:true,
      showMain:false,
      showOther:false
    })
  }

  handleOther(){
    this.setState({
      showFend:false,
      showBend:false,
      showWeb:false,
      showMain:false,
      showOther:true
    })
  }

  handleHome(){
    this.setState({
      showFend:false,
      showBend:false,
      showWeb:false,
      showMain:true,
      showOther:false
    })
  }

  render(){
    return(
      <>
      <header>
        <div className="container" id="hat">
          <div className="row">
            <div id="logo" className="col-3">
              <img height="100" src={logo} alt="Theoretical Dev Logo" />
            </div>
            <div id="navbar" className="col-9">
              <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-2" aria-label="Services group">
                  <Button variant="primary" onClick={this.handleHome}>Home</Button>
                  <Button variant="info" onClick={this.handleFend}>Front End</Button>
                  <Button variant="primary" onClick={this.handleBend}>Back End</Button>
                  <Button variant="info" onClick={this.handleWeb}>Webmastering</Button>
                  <Price />
                </ButtonGroup>
                <ButtonGroup className="mr-2" aria-label="Contact group">
                  <Contact />
                  <Social />
                </ButtonGroup>
              </ButtonToolbar>
            </div>
          </div>
        </div>
      </header>
      <MainSlider />
      <div className="divider"></div>
      {this.state.showMain &&
        <Main handleFend={this.handleFend} handleBend={this.handleBend} handleWeb={this.handleWeb} />
      }
      {this.state.showFend &&
        <Fend />
      }
      {this.state.showBend &&
        <Bend />
      }
      {this.state.showWeb &&
        <Web />
      }
      </>
    )
  }
}

export default App;
