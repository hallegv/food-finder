import React, { useState, useEffect } from "react";
import "./App.css";
import RestaurantList from "./components/RestaurantList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import { data } from "./data";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    // async function search() {
    //   const response = await fetch(
    //     `https://api.yelp.com/v3/businesses/search?longitude=118.2437&latitude=34.0522&term=chinesefood`,
    //     {
    //       method: "GET",
    //       cor: "no-cors",
    //       credentials: "same-origin",
    //       headers: {
    //         // "Content-Type": "application/json",
    //         Authorization:
    //           "Bearer 9JQeMcHKahLRVVzJ3lWo9riLBvtPk4T8QcrbivPwGtMp7aTtkeA-HOMCAxyeunf39JCTHmebL-evBVKy3TH-vm8d0FITefAYos9PdYNyKWNQpecV7SW13dm_Uy8vYHYx",
    //         "Access-Control-Request-Method": "GET",
    //         "Access-Control-Request-Headers": "X-Custom-Header",
    //       },
    //     }
    //   );
    //   console.log(response.json());
    // }
    // search();
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
