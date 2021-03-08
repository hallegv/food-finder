import React, { useState, useEffect } from "react";
import "./App.css";
import RestaurantList from "./components/RestaurantList.jsx";
import NavBar from "./components/NavBar.jsx";
import { data } from "./restaurantdata/data";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    setRestaurants(data.businesses);
  }, []);

  return (
    <Container>
      <SearchBar />
      <Row>
        <Col>
          <RestaurantList restaurants={restaurants} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
