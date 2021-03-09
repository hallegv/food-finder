import React, { useState, useEffect } from "react";
import "./App.css";
import RestaurantList from "./components/RestaurantList.jsx";
import NavBar from "./components/NavBar.jsx";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [recipe, setRecipes] = useState([]);
  useEffect(() => {
    async function search() {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/716429/information?apiKey=456626469b834d5980bc4d8e6b6d6e94&diet=vegetarian`,
        {
          method: "GET",
          cor: "no-cors",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Authorization: "456626469b834d5980bc4d8e6b6d6e94",
            "Access-Control-Request-Method": "GET",
            "Access-Control-Request-Headers": "X-Custom-Header",
          },
        }
      );
      console.log(response.json());
    }
    search();
  }, []);

  return (
    <Container>
      <NavBar />
      <Row>
        <Col>
          <RestaurantList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
