import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ServicesScreen = () => {
  return (
    <>
      <Container
        fluid
        className="mb-5 mt-0 animate__animated animate__backInUp animate__duration-2s example"
      >
        <Row>
          <Col>
            <h4 className="heading w-100 text-start">My Services</h4>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }} className="text-center">
          <Col md={4} className="d-flex justify-content-center mb-1">
            <Card
              className="card1 text-center border-success shadow-none"
              style={{ backgroundColor: "transparent" }}
            >
              <Card.Body>
                <div className="circle text-center">
                  <span>
                    <i className="fas fa-desktop"></i>
                  </span>
                </div>
                <h4 className="font-weight-bold mb-2 pt-3 pb-0 text-center">
                  Responsive Web Development
                </h4>
                <div className="dropdown-divider"></div>
                <p className="text-light text-center mt-2 description text-justify">
                  Today's time in this world browser is used more.Browsers are
                  used from mobile devices to computers. When an users open
                  websites on their mobile devices, that time website should be
                  mobile-friendly.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center mb-1">
            <Card
              className="card1 text-center border-success shadow-none"
              style={{ backgroundColor: "transparent", width: "100%" }}
            >
              <Card.Body className="w-100">
                <div className="circle text-center mb-3">
                  <span>
                    <i className="fas fa-toolbox"></i>
                  </span>
                </div>
                <h4 className="font-weight-bold pt-5 w-100 pb-0 text-center mb-3">
                  Easy to Use
                </h4>
                <div className="dropdown-divider"></div>
                <p className="text-light text-center mt-5 description">
                  I personally Prefer the web page should be browser friendly.
                  It can work on every platform like firefox, Microsoft Edge,
                  Internet Explorer.{" "}
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center mb-2">
            <Card
              className="card1 text-center border-success shadow-none"
              style={{
                backgroundColor: "transparent",
                width: "100%",
                height: "101%",
              }}
            >
              <Card.Body>
                <div className="circle text-center mb-0">
                  <span>
                    <i className="fas fa-bezier-curve"></i>
                  </span>
                </div>
                <h4 className="font-weight-bold pt-5 mb-3 pb-0 text-center">
                  Modal Designing
                </h4>
                <div className="dropdown-divider"></div>
                <p className="text-light mt-5">
                  I prefer to create a prototype of each page before beginning
                  any project. Besides helping to create a front end, making
                  prototypes can also help save your ideas{" "}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ServicesScreen;
