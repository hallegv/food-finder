import { Card, CardColumns } from "react-bootstrap";

export default function CafeRestaurants(props) {
  const { americanRestaurants } = props;

  return (
    <div style={{ paddingTop: 20 }}>
      <CardColumns>
        {americanRestaurants &&
          americanRestaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              style={{
                backgroundColor: "LightPink",
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
                    margin: "0px",
                    textAlign: "center",
                  }}
                >
                  {restaurant.name}
                </Card.Title>
                <Card.Text
                  style={{
                    fontFamily: "Avenir",
                    fontSize: "25px",
                    margins: "2px",
                    textAlign: "center",
                  }}
                >
                  {restaurant.location.address1}
                  <p>
                    {restaurant.location.city}, {restaurant.location.state}{" "}
                    {restaurant.location.zip_code}
                  </p>
                </Card.Text>
                <Card.Text
                  style={{
                    fontFamily: "Avenir",
                    fontSize: "25px",
                    textAlign: "center",
                  }}
                >
                  {restaurant.display_phone}
                </Card.Text>
                <Card.Img
                  src={restaurant.image_url}
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "35vw",
                  }}
                />
              </Card.Body>
              <Card.Footer
                style={{ textAlign: "right", padding: 0 }}
              ></Card.Footer>
            </Card>
          ))}
      </CardColumns>
    </div>
  );
}
