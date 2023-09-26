
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import product from "./product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

function App() {
  const firstName = "Bilel";
  return (
    <React.Fragment>
      <div className="App">
        <div className="container" >
          <Row style={{ display: "flex", flexDirection: "row" }}>
            {
              product.map(currentValue => (
                <Col>
                  <Card style={{ width: "25rem", padding: 0, margin: 5, border: "solid" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Card.Img variant="top" src={currentValue.imageUrl} style={{ height: "200px" }} />
                    </div>
                    <Card.Body style={{ padding: 0, marginTop: -20 }}>
                      <Card.Title >
                        <h3> <Name /></h3>
                        {currentValue.name}
                      </Card.Title>
                      <Card.Text>
                        <h3><Price /></h3>
                        {currentValue.price}
                      </Card.Text>
                      <Card.Text >
                        <h3> <Description /></h3>
                        {currentValue.description}
                      </Card.Text>
                    </Card.Body>

                  </Card>
                </Col>
              ))};</Row>

          <div >
            <h2>Hello, {firstName ? firstName : "there"}!</h2>
            {firstName && <Image />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );

}

export default App;
