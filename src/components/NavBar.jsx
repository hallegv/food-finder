import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
export default function NavBar({setCuisine}) {
  return (
    // <Dropdown>
    //   <Dropdown.Toggle variant="success" id="dropdown-basic">
    //     Food Cuisine
    //   </Dropdown.Toggle>
    //   <Dropdown.Menu>
    //     <Dropdown.Item eventKey="1">American</Dropdown.Item>
    //     <Dropdown.Item eventKey="2">Italian</Dropdown.Item>
    //     <Dropdown.Item eventKey="3">Mexican</Dropdown.Item>
    //     <Dropdown.Item eventKey="4">Cafes</Dropdown.Item>
    //   </Dropdown.Menu>
    // </Dropdown>
    <h1
      style={{
        backgroundColor: "CornflowerBlue",
        fontSize: "4vh",
        border: "0px",
        margin: "0px",
        padding: "2px",
        textAlign: "center",
      }}
    >
      
    <ul>
      <li onClick={() => setCuisine("american")}>American</li>
      <li onClick={() => setCuisine("italian")}>Italian</li>
      <li onClick={() => setCuisine("mexican")}>Mexican</li>
      <li onClick={() => setCuisine("cafe")}>Cafes</li>
    </ul>
    </h1>
  );
}
