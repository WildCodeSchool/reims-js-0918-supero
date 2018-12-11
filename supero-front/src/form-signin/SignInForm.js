import React from "react";
import { Field, reduxForm } from "redux-form";
import "./SignInForm.css";
import submit from "./submit";
import { Button, Container, Col, Row, FormGroup } from "reactstrap";
import renderField from "./renderField";
import { Link } from "react-router-dom";

const SignInForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props;
  return (
    <Container fluid>
      <form onSubmit={handleSubmit(submit)} className="SignIn-container">
        <Row className="d-flex justify-content-center">
          <Col xs="6">
            <div className="logo mb-5">
              <Link to="ActivitiesList">
                <img
                  style={{ width: "100%" }}
                  src={process.env.PUBLIC_URL + "/images/logo.png"}
                  alt="sport"
                  align="bottom"
                />
              </Link>
            </div>
          </Col>
          <Col xs="12">
            <FormGroup>
              <Field
                name="email"
                type="text"
                component={renderField}
                label="E-mail"
              />
            </FormGroup>
            <FormGroup>
              <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
              />
            </FormGroup>
            {error && <span className="error">{error}</span>}
            <div className="d-flex justify-content-center">
              <Button
                className="button mr-4"
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
              >
                Reset
              </Button>

              <Button className="button" type="submit" disabled={submitting}>
                Connection
              </Button>
            </div>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default reduxForm({
  form: "SignInForm" // a unique identifier for this form
})(SignInForm);
