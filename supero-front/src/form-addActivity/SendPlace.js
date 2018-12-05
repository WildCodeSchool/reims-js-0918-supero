import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form, FormGroup, Container, Col, Row } from "reactstrap";
import validate from "./validate";
import renderField from "./renderField";

const handleInputContent = event => event.target.value.replace(/e/gi, "")

const SendPlace = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col xs="10">
          <Form onSubmit={handleSubmit}>
            <h2 className="text-center">Où et quand ?</h2>
            <FormGroup>
              <Field
                name="address"
                type="text"
                component={renderField}
                label="Adresse"
              />
            </FormGroup>
            <FormGroup>
              <Field
                name="city"
                type="text"
                component={renderField}
                label="Ville"
              />
            </FormGroup>
            <FormGroup>
              <Field
                name="start_time"
                type="datetime-local"
                component={renderField}
                label="Date et heure de début"
              />
            </FormGroup>
            <FormGroup>
              <Field
                name="duration"
                type="time"
                component={renderField}
                label="Durée"
              />
            </FormGroup>
            <FormGroup>
              <Field
                name="participants"
                type="number"
                component={renderField}
                label="Limite maximum de participants"
                onChange={handleInputContent}
              />
            </FormGroup>
            <div className="d-flex justify-content-between">
              <Button type="button" className="previous" onClick={previousPage}>
                Précédent
              </Button>
              <Button type="submit" className="next">
                Suivant
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default reduxForm({
  form: "addactivity", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SendPlace);
