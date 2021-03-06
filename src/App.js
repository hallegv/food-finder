import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import AmericanRestaurants from "./pages/AmericanRestaurants.jsx";
import ItalianRestaurants from "./pages/ItalianRestaurants.jsx";
import MexicanRestaurants from "./pages/MexicanRestaurants";
import CafeRestaurants from "./pages/CafeRestaurants";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { italian } from "./restaurantdata/italian";
import { mexican } from "./restaurantdata/mexican";
import { cafe } from "./restaurantdata/cafe";
import { american } from "./restaurantdata/american";

function App() {
  const [italianRestaurants, setItalianRestaurants] = useState([]);
  const [mexicanRestaurants, setMexicanRestaurants] = useState([]);
  const [cafeRestaurants, setCafeRestaurants] = useState([]);
  const [americanRestaurants, setAmericanRestaurants] = useState([]);
  const [cuisine, setCuisine] = useState("polish");

  useEffect(() => {
    setItalianRestaurants(italian.businesses);
  }, []);

  useEffect(() => {
    setMexicanRestaurants(mexican.businesses);
  }, []);

  useEffect(() => {
    setCafeRestaurants(cafe.businesses);
  }, []);

  useEffect(() => {
    setAmericanRestaurants(american.businesses);
  }, []);

  return (
    <Container>
      <Header />
      <HomePage />
      {<NavBar setCuisine={setCuisine} />}
      {cuisine === "italian" && (
        <Row>
          <Col>
            <ItalianRestaurants italianRestaurants={italianRestaurants} />
          </Col>
        </Row>
      )}
      {cuisine === "mexican" && (
        <Row>
          <Col>
            <MexicanRestaurants mexicanRestaurants={mexicanRestaurants} />
          </Col>
        </Row>
      )}
      {cuisine === "cafe" && (
        <Row>
          <Col>
            <CafeRestaurants cafeRestaurants={cafeRestaurants} />
          </Col>
        </Row>
      )}
      {cuisine === "american" && (
        <Row>
          <Col>
            <AmericanRestaurants americanRestaurants={americanRestaurants} />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default App;
