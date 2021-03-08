import React from "react";
import { Row, Col, Card } from "react-bootstrap";
export default function RestaurantList(props) {
  const { restaurants } = props;
  return (
    <div style={{ paddingTop: 20 }}>
      <Row>
        <Col>
          {restaurants &&
            restaurants.map((restaurant) => (
              <Card key={restaurant.id}>
                <Card.Body>
                  <Card.Title style={{ fontFamily: "Helvetica" }}>
                    {restaurant.name}
                  </Card.Title>
                  <div>Address: {restaurant.location.display_address}</div>
                  <div>Phone: {restaurant.display_phone}</div>
                  <img src={restaurant.image_url} />
                </Card.Body>
                <Card.Footer
                  style={{ textAlign: "right", padding: 5 }}
                ></Card.Footer>
              </Card>
            ))}
        </Col>
      </Row>
    </div>
  );
}
