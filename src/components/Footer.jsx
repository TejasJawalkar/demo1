import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container
        fluid
        className="animate__animated animate__backInUp animate__duration-2s"
      >
        <Row className="w-100" style={{ display: "inline-block" }}>
          <Col className="text-center">
            <h7 style={{ color: "" }}>
              <span title="Github" style={{display:"none"}}>
                <a
                  href="https://github.com/TejasJawalkar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="icon bx bxl-git"
                    style={{ color: "#00e3ea", fontSize: "34px" }}
                  ></i>
                </a>
              </span>
              <span className="pl-2" title="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/tejas-javalkar-b4b1a0180/?originalSubdomain=in"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="icon bx bxl-linkedin-square"
                    style={{ color: "#00e3ea", fontSize: "34px" }}
                  ></i>
                </a>
              </span>
              <span title="Facebook">
                <a
                  href="https://m.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="icon bx bxl-facebook-square"
                    style={{ color: "#00e3ea", fontSize: "34px" }}
                  ></i>
                </a>
              </span>
            </h7>
          </Col>
        </Row>
        <Row className="pt-4 text-center">
          <div>
            <b className="text text-light">copyright©TejasJavalkar@2021</b>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
