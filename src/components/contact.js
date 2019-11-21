import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

function Contact(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
    <Button variant="primary" onClick={handleShow}>Contact Us</Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>Phone: <a href="tel:7023501149‬">(702) 350-1149‬</a></li>
          <li>Email: <a href="mailto:sethpeavlerdev@gmail.com">sethpeavlerdev@gmail.com</a></li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default Contact;
