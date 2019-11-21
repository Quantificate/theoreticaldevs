import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';

function Bend() {
  return(
    <>
    <div className="container">
      <Tabs defaultActiveKey="backend" id="uncontrolled-tab">
        <Tab eventKey="backend" title="Back-End">
          <h1>Full Featured Back-Ends</h1>
          <h4>We use Node.js, Express, and MySQL to build entire applications into your website!</h4>
        </Tab>
        <Tab eventKey="node" title="Node.js">
          <h2><a href="https://nodejs.org/en/about/" target="_blank" rel="noopener noreferrer">Node.js</a></h2>
          <p>Node is a quick and easy way to implement server and network based functions right inside of your website. It allows us to get/send information from/to a database, create virtual servers, and much more, all without creating additional load on your users.</p>
        </Tab>
        <Tab eventKey="express" title="Express">
          <h2><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express</a></h2>
          <p>Express is a web framework for Node that enables HTTP functions in a lightweight, easy to manage package. It allows us to send and recieve information from users quickly and easily, vastly improving your users experience by reducing load times, and making forms quick and painless.</p>
        </Tab>
        <Tab eventKey="mysql" title="MySQL">
          <h2><a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">MySQL</a></h2>
          <p>MySQL is a relational database that can store billions of pieces of data, and efficiently sort, fetch, and save data. We use MySQL to maintain things like the profiles of your leads, users, or employees, and to save and retrieve that information to build things like lead management systems or client portals.</p>
        </Tab>
      </Tabs>
    </div>
    </>
  )
}

export default Bend;
