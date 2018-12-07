import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./LoginHome.css";
import { Link } from "react-router-dom";

const LoginHome = () => {
  return (
    <Container fluid className="loginHome">
      <Row className="justify-content-center">
        <Col xs="6">
          <div className="logo mt-5 mb-5">
            <img
              style={{ width: "100%" }}
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              alt="sport"
              align="bottom"
            />
          </div>
        </Col>
        <Col xs="12">
          <p>L'application ultime pour devenir</p>
          <p style={{ fontWeight: "bold" }}>Le Dieu du sport</p>
          <button className="button-home facebook">
            Se connecter avec <span>Facebook</span>
          </button>
          <Link to="ActivitiesList">
            <button className="button-home">
              Rejoindre <span>les Dieux !</span>
            </button>
          </Link>
          <button className="button-home">
            Pas encore <span>un dieu ?</span>
          </button>
          <a className="password-forgotten" href="#">
            Mot de passe oublié ?
          </a>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginHome;
