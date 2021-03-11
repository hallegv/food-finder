import React from "react";

export default function NavBar({ setCuisine }) {
  return (
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
      <ul
        style={{
          fontSize: "4vh",
          border: "0px",
          margin: "0px",
          padding: "2px",
          paddingBottom: "50px",
          textAlign: "center",
          listStyle: "none",
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        <li onClick={() => setCuisine("american")}>American</li>
        <li onClick={() => setCuisine("italian")}>Italian</li>
        <li onClick={() => setCuisine("mexican")}>Mexican</li>
        <li onClick={() => setCuisine("cafe")}>Cafes</li>
      </ul>
    </h1>
  );
}
