import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./LoginHome.css";
import { Link } from "react-router-dom";
import ComeFromTransparent from "../Animations/ComeFromTransparent";
import ComeFromLeft from "../Animations/ComeFromLeft";
const LoginHome = () => {
  return (
    <Container fluid className="loginHome">
      <Row className="justify-content-center">
        <ComeFromTransparent delay={800}>
          <Col xs="6" style={{ margin: "0 auto" }}>
            <div className="logo mt-5 mb-5">
              <img
                style={{ width: "100%" }}
                src={process.env.PUBLIC_URL + "/images/logo.png"}
                alt="sport"
                align="bottom"
              />
            </div>
          </Col>
        </ComeFromTransparent>

        <Col xs="12">
          <ComeFromTransparent delay={1000}>
            <p>L'application ultime pour devenir</p>
            <p style={{ fontWeight: "bold" }}>Le Dieu du sport</p>
          </ComeFromTransparent>
          <ComeFromLeft delay={1000}>
            <button className="button-home facebook">
              Se connecter avec <span>Facebook</span>
            </button>
          </ComeFromLeft>
          <ComeFromLeft delay={1100}>
            <Link to="SignInForm">
              <button className="button-home">
                Rejoindre <span>les Dieux !</span>
              </button>
            </Link>
          </ComeFromLeft>
          <ComeFromLeft delay={1200}>
            <Link to="UserRegistration">
              <button className="button-home">
                Pas encore <span>un dieu ?</span>
              </button>
            </Link>
          </ComeFromLeft>
          <ComeFromTransparent delay={1400}>
            <a className="password-forgotten" href="#">
              Mot de passe oublié ?
            </a>
          </ComeFromTransparent>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginHome;
