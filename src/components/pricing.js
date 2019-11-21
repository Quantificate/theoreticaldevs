import React, {useState} from 'react';
import {Modal, Button, Alert} from 'react-bootstrap';

function Price(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
    <Button variant="primary" onClick={handleShow}>Pricing</Button>

    <Modal size="xl" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Our Services and Packages</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>Our Menu</h2>
        <h4>Base Website - $500</h4>
        <ul>
          <li>Up to 5 "pages". (For estimation purposes, this site is 5 "pages".)</li>
          <li>Basic Sliders, Animations, etc.</li>
          <li>One email capture form/info request form.</li>
          <li>Social Media Linking</li>
          <li>Basic server security/backup.</li>
        </ul>
        <hr />
        <h4>A La Carte Upgrades</h4>
        <p>Green Items have no requirements, Blue Items require Databasing, Yellow Items require an external service, and Red Items require multiple other services.</p>
        <ul>
          <li><Alert variant="success">MySQL Databasing: $500</Alert></li>
          <li><Alert variant="primary">Login, User Accounts, etc: $200, requires: Databasing</Alert></li>
          <li><Alert variant="primary">Lead Management: $500, requires: Databasing</Alert></li>
          <li><Alert variant="primary">Data Collection: $500, requires: Databasing</Alert></li>
          <li><Alert variant="primary">User/Information Management: $200, requires: Databasing</Alert></li>
          <li><Alert variant="warning">Hosting/Domain Maintenance: $25 + cost of the domain name to start, +$15/month afterwards.</Alert></li>
          <li><Alert variant="warning">Upgraded Server Storage/Processing Power/Bandwidth: $?, billed monthly, based on size of upgrade.</Alert></li>
          <li><Alert variant="warning">Twilio Integration for VOIP Calling/Texting: $500, requires Databasing</Alert></li>
          <li><Alert variant="warning">SendGrid or MailChimp Integration for Email Marketing: $300, requires Databasing</Alert></li>
          <li><Alert variant="success">Search Engine Optimization: $250</Alert></li>
          <li><Alert variant="danger">E-Commerce Setup: $500, requires Databasing, Login, Data Collection</Alert></li>
          <li><Alert variant="success">Advanced Security Features (SSL/HTTPS, Encryption, etc): $200</Alert></li>
        </ul>
        <hr />
        <h4>A La Carte Support</h4>
        <p>These are <span className="ital">per "call"</span>, if you aren't on a support plan below.</p>
        <ul>
          <li><strong>Basic Fixes</strong>: Database fixes, server restarts, software updates, etc, between 9am and 5pm, Monday through Friday. $25</li>
          <li><strong>Advanced Fixes</strong>: Database Restructuring, Server rewrites, Redeployments, etc, between 9am and 5pm, Monday through Friday. $50</li>
          <li><strong>Emergency</strong>: Any call outside of the hours above. Double Price from above.</li>
          <li><strong>Quick Updates</strong>: Changing colors, fonts, replacing an image, etc. $25</li>
          <li><strong>Big Updates</strong>: Moving entire sections, changing from a static part to an animated one, etc. $100</li>
          <li><strong>Redesign</strong>: Completely redoing the front-end of your site. ($500 or 30% of your original site cost, if you have one from us)</li>
        </ul>
        <hr />
        <h4>Support Options</h4>
        <ul>
          <li><strong>Basic Support</strong>: Content Updates, Installing Software Updates, Basic Database Management. Support Calls from 9am to 5pm Monday through Friday. $20/month.</li>
          <li><strong>Advanced Support</strong>: Basic Support, plus: Full Database Management, Server Maintenance, and Domain Management. Support Calls from 9am to 5pm Monday through Friday. $40/month.</li>
          <li><strong>Emergency Support</strong>: Advanced Support, but 24/7 (except for Holidays). $75/month.</li>
        </ul>
        <hr />
        <h4>Packages</h4>
        <p>These are common packages that include everything you need for a full featured website. Get up to 30% for buying in "bulk", so to speak.</p>
        <p>All packages include the Base Site and Databasing, plus the items listed.</p>
        <ul>
          <li><Alert variant="primary"><strong>The Entrepreneur</strong>: Data Collection, Email Marketing, Lead Management, Hosting/Domain Maintenance, 3 months of Basic Support. $1,999 (<span className="ital">Save 23%!</span>)</Alert></li>
          <li><Alert variant="warning"><strong>The Artist</strong>: Server Upgrades, Hosting/Domain Maintenance, E-Commerce Setup, 3 months of Basic Support. $1,299 (<span className="ital">Save 23%!</span>)</Alert></li>
          <li><Alert variant="success"><strong>The Salesman</strong>: E-Commerce Setup, Hosting/Domain Maintenance, Login/User Accounts, Data Collection, Backend Management, Email Marketing, 3 months of Basic Support. $2,299 (<span className="ital">Save 21%!</span>)</Alert></li>
          <li><Alert variant="danger"><strong>The Kitchen Sink</strong>: Everything. Includes 3 months of Emergency Support. $3,199 (<span className="ital">Save 29%!</span>)</Alert></li>
        </ul>
        <hr />
        <h4>Hire a Dev</h4>
        <p>Don't know what you're going to need? Want to make sure you can get all the custom features you desire? Want to have a developer "on-call"? Just Hire a Dev!</p>
        <Alert variant="info"><strong>Hire a Dev</strong>: $30/hr, billed weekly via Clockify</Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default Price;
