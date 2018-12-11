import React from "react";
import { Field, reduxForm } from "redux-form";
import "./SignInForm.css";
import { Button, Container, Col, Row, FormGroup, Form } from "reactstrap";
import renderField from "./renderField";
import { Link } from "react-router-dom";

const required = value =>
  value || typeof value === "number" ? undefined : "Required";
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;

const SignInForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <Container fluid>
      <Form
        onSubmit={handleSubmit(values => console.log(values))}
        className="SignIn-container"
      >
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
          <Col xs="10">
            <FormGroup>
              <Field
                name="email"
                type="text"
                component={renderField}
                label="E-mail"
                validate={[email, required]}
                warn={aol}
              />
            </FormGroup>
            <FormGroup>
              <Field
                name="password"
                type="password"
                component={renderField}
                label="Mots de passe"
                validate={required}
              />
            </FormGroup>
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
      </Form>
    </Container>
  );
};

export default reduxForm({
  form: "SignInForm"
})(SignInForm);
