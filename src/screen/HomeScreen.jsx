import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../components/shared/Loading";
import profile from "../image/tejaspp.webp";

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const url ="https://drive.google.com/uc?export=download&id=1xtahA4cY70Nxx-JKoAOm-3dYbFFLGXjA";
  setTimeout(() => {
    setLoading(true);
  }, 2000);

  return (
    <>
      <Container className="example animater__animated animate__backInUp animate__duration-2s mb-5">
        {!loading ? (
          <div style={{ marginTop: "330px" }}>
            <Loading />
          </div>
        ) : (
          <>
            <Row id="top" style={{ display: "none" }}>
              <Col md={12} className="text-end">
                <a
                  href="#resume"
                  style={{
                    fontSize: "27px",
                  }}
                  className="nav-link text-light"
                >
                  Resume
                </a>
              </Col>
            </Row>
            <Row
              className="mt-1"
              style={{ position: "justify", zIndex: "-1", display: "none" }}
            >
              <Col md={7} style={{ marginTop: "30px" }}>
                <h5 className="p-2 text-light text-start">
                  Hi, I am Tejas Jawalkar
                </h5>
                <p
                  className="p-2 text-light text-start"
                  style={{
                    lineHeight: " 2",
                    wordSpacing: "4px",
                    fontSize: "20px",
                  }}
                >
                  I am a <b className="bg-warning text-dark p-1">BCA</b>{" "}
                  graduate. And I am Pursuing{" "}
                  <b className="bg-warning text-dark p-1">MCA</b> at{" "}
                  <b className="bg-warning p-1 text-dark">Solapur University</b>{" "}
                  . The goal of becoming a{" "}
                  <b className="bg-warning p-1 text-dark">
                    Full Stack Developer (MERN)
                  </b>{" "}
                  and to work for a company that will help me accomplish this
                  goal is all I want.
                </p>
              </Col>
            </Row>
            <Row className="mt-1 d-flex justify-content-center">
              <div
                className="jumbotron p-2  text-start text-light"
                style={{
                  height: "60px",
                  fontSize: "22px",
                  background: "transparent",
                }}
              ></div>
              <Col md={12}>
                <Row className=" mt-2 mb-3 shadow-none ">
                  <Col md={7}>
                    <h3
                      className="text-light mt-5"
                      style={{ fontFamily: "  Nunito Sans" }}
                    >
                      Hello, I am Tejas Jawalkar
                    </h3>
                    <p
                      className="text-justify text-light mt-5"
                      style={{
                        fontSize: "20px",
                        fontFamily: " Nunito Sans",
                        letterSpacing: "1.2px",
                      }}
                    >
                      I am a {" "}
                      <b style={{ fontSize: "26px" }} className="text-success">
                        .Net and SQL Developer.
                      </b>{" "} <br/>
                      Working at
                      <b style={{ fontSize: "26px" }} className="text-success">
                      {" "}Splashgain Technology Pvt. Ltd.
                      </b>{" "}
                      <br/>
                      I have completed my <b className="text-success" style={{fontSize:"26px"}}> Internship </b> period
                      on <b className="text-success" style={{fontSize:"26px"}}> 15 july 2022. </b>
                      <br />
                      I have knowledge of <b className="text-success" style={{ fontSize: "26px" }}>React Framework</b>.
                      <br />
                      Ready to work as{" "}
                      <b className="text-success" style={{ fontSize: "26px" }}>
                        {" "}
                        Full Stack Developer (MERN)   
                      </b>
                      <br/>or as 
                      <b className="text-success" style={{ fontSize: "26px" }}>
                        {" "}
                        .Net Full Stack Developer    
                      </b>.
                    </p>
                  </Col>
                  <Col className="mt-5 animate__animated animate__backInUp animate__duration-1s">
                    <img
                      className="shadow-none frame"
                      src={profile}
                      height="300"
                      width="250"
                      alt="Tejas Jawalkar"
                      style={{
                        //imageRendering: "-webkit-optimize-contrast",
                        backgroundSize: "cover",
                        //imageRendering: "crisp-edges",
                        imageRendering: "pixelated",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row id="resume" className="mt-5 mb-5 p-5 " style={{}}>
              <Col className="text-center mt-1">
                <a
                  as="button"
                  href={url}
                  rel="noreferrer"
                  download="Tejas_Jawalkar_Resume"
                  className="btn w-auto outline-success shadow-none resumebtn1 border-success"
                >
                  Resume
                </a>
              </Col>
              <Col className="text-center mt-1">
                <Link
                  as="button"
                  to="/contact"
                  className="btn w-auto shadow-none text-center resumebtn2 border-warning"
                >
                  Hire
                </Link>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
