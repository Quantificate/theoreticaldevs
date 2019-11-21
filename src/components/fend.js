import React, {useState} from 'react';
import {Accordion, Badge, Card, Button, Modal} from 'react-bootstrap';

function Fend() {
  const [show, setShow] = useState(false);

  const handleModalShow = () => setShow(true);
  const handleModalClose = () => setShow(false);

  return(
    <>
    <div className="container" id="contentbox">
      <div className="contentblock">
        <h1>Front-End Design</h1>
        <h4>React.js and Bootstrap allow us to create any style of site you want!</h4>
        <p>With our front end tools, we can create any type of user interface or design style you like!</p>
        <p>Here are just a few examples of things we can do on the front end:</p>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Accordion Tabs
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Accordions let you store blocks of content inside collapsing lists, for clean looking pages with tons of information inside!</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Badges <Badge variant="primary">Example</Badge>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Badges are used to mark specific content with things like "New" or "Updated" for easy identification!</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Modals
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Modals are used to pop-up an overlay containing detailed information, an order form, or a login (and more)! <br /> <Button variant="warning" onClick={handleModalShow}>Open the Modal</Button></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Modal show={show} onHide={handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>This is a Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>These are great for showing a large article or block of information on top of an existing page. They are also good for order forms, email capture pages, image galleries, and many more "on top of existing content" design concepts.</Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleModalClose}>Exit Modal</Button>
            </Modal.Footer>
          </Modal>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                And More!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>These are just a few of the most commonly used design options. There are many, many more, such as Tooltips, Toasts (those little popups in the bottom right of pages), custom Navbars, and tons of stylistic options like Progress Bars, Loading Spinners, and Overlays!</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
    </>
  )
}

export default Fend;
