import React from 'react';
import {Dropdown, DropdownButton} from 'react-bootstrap';

function Social(){
  return(
    <>
      <DropdownButton variant="info" title="Social Media">
        <Dropdown.Item href="https://www.facebook.com/theoreticaldev/" target="_blank" rel="noopener noreferrer">Facebook</Dropdown.Item>
        <Dropdown.Item href="https://twitter.com/codepeav" target="_blank" rel="noopener noreferrer">Twitter</Dropdown.Item>
        <Dropdown.Item href="https://github.com/Quantificate" target="_blank" rel="noopener noreferrer">GitHub</Dropdown.Item>
      </DropdownButton>
    </>
  )
}

export default Social;
