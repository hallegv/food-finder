import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import AmericanRestaurants from "./pages/AmericanRestaurants.jsx";
import ItalianRestaurants from "./pages/ItalianRestaurants.jsx";
import MexicanRestaurants from "./pages/MexicanRestaurants";
import CafeRestaurants from "./pages/CafeRestaurants";
import { italian } from "./restaurantdata/italian";
import { mexican } from "./restaurantdata/mexican";
import { cafe } from "./restaurantdata/cafe";
import { american } from "./restaurantdata/american";

function App() {
  const [italianRestaurants, setItalianRestaurants] = useState([]);
  const [mexicanRestaurants, setMexicanRestaurants] = useState([]);
  const [cafeRestaurants, setCafeRestaurants] = useState([]);
  const [americanRestaurants, setAmericanRestaurants] = useState([]);

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
    <>
      <Router>
        <div className="container">
          <nav>
            <ul>
              <li
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "30px",
                  backgroundColor: "red",
                }}
              >
                <Link to="/pages/AmericanRestaurants">American</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={App} />
            <Route
              exact
              path="/pages/AmericanRestaurants"
              component={AmericanRestaurants}
            />
          </Switch>
        </div>
      </Router>

      <Container>
        <NavBar />
        <Row>
          <Col>
            <ItalianRestaurants italianRestaurants={italianRestaurants} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MexicanRestaurants mexicanRestaurants={mexicanRestaurants} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CafeRestaurants cafeRestaurants={cafeRestaurants} />
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <AmericanRestaurants americanRestaurants={americanRestaurants} />
          </Col>
        </Row> */}
      </Container>
    </>
  );
}

export default App;
