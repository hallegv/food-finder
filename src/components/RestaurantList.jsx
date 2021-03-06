import React, { useState } from "react";
import ListItem from "./ListItem.jsx";
import { CardColumns, Row, Col, Form, Button, Card } from "react-bootstrap";
export default function RestaurantList(props) {
  const { restaurants } = props;
  console.log("posts", restaurants);
  return (
    <div style={{ paddingTop: 20 }}>
      <CardColumns>
        {restaurants &&
          restaurants.map((restaurant) => (
            <Card key={restaurant.id}>
              <Card.Body>
                <Card.Title>{restaurant.name.toUpperCase()}</Card.Title>
              </Card.Body>
              <Card.Footer
                style={{ textAlign: "right", padding: 5 }}
              ></Card.Footer>
            </Card>
          ))}
      </CardColumns>
    </div>
  );
}
