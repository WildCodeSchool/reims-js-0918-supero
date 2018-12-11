import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form, FormGroup, Container, Row, Col } from "reactstrap";
import validate from "./validate";
import renderField from "../renderField";

const SendPersonal = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col xs="10">
          <Form onSubmit={handleSubmit}>
            <h2 className="text-center">Qui êtes-vous ?</h2>
            <FormGroup>
              <Field
                className="Form-Input"
                name="firstName"
                type="text"
                component={renderField}
                label="Prénom"
              />
            </FormGroup>
            <FormGroup>
              <Field
                className="Form-Input"
                name="lastName"
                type="text"
                component={renderField}
                label="Nom"
              />
            </FormGroup>
            <FormGroup>
              <Field
                className="Form-Input"
                name="gender"
                type="text"
                component={renderField}
                label="Genre"
              />
            </FormGroup>
            <FormGroup>
              <Field
                className="Form-Input"
                name="birthdate"
                type="date"
                component={renderField}
                label="Date de naissance"
              />
            </FormGroup>
            <div className="d-flex justify-content-between">
              <Button
                type="button "
                className="previous"
                onClick={previousPage}
              >
                Précédent
              </Button>
              <Button
                type="submit"
                className="valider"
                disabled={pristine || submitting}
              >
                Valider
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default reduxForm({
  form: "userregistration", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SendPersonal);
