import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
export default function NavBar() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Food Cuisine
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="1">American</Dropdown.Item>
        <Dropdown.Item eventKey="2">Italian</Dropdown.Item>
        <Dropdown.Item eventKey="3">Mexican</Dropdown.Item>
        <Dropdown.Item eventKey="4">Cafes</Dropdown.Item>
        <Dropdown.Item eventKey="5" active>
          Greek
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
