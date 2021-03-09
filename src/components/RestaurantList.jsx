import React from "react";
import { Card, CardColumns } from "react-bootstrap";

export default function recipeList(props) {
  const { recipes } = props;
  return (
    <div style={{ paddingTop: 20 }}>
      <CardColumns>
        {recipes &&
          recipes.map((recipe) => (
            <Card
              key={recipe.id}
              style={{
                backgroundColor: "red",
              }}
            >
              <Card.Body
                style={{
                  width: "20rm",
                }}
              >
                <Card.Title
                  style={{
                    fontFamily: "Avenir",
                    fontSize: "50px",
                    fontWeight: "bold",
                    margins: "5px",
                    textAlign: "center",
                  }}
                >
                  {recipe.sourceName}
                </Card.Title>
                <Card.Text
                  style={{
                    fontFamily: "Avenir",
                    fontSize: "25px",
                    margins: "2px",
                    textAlign: "center",
                  }}
                >
                  {recipe.extendedIngredients}
                </Card.Text>

                <Card.Img
                  src={recipe.image}
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "90%",
                  }}
                />
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
