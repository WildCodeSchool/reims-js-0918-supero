import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form, FormGroup, Container, Row, Col } from "reactstrap";
import validate from "./validate";
import renderField from "./renderField";

const SendTime = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col xs="10">
          <Form onSubmit={handleSubmit}>
            <h2 className="text-center">Quand ?</h2>
            <FormGroup>
              <label style={{ color: "#fff" }}>Date de l'activité</label>
              <Field
                name="start_time"
                type="datetime-local"
                component={renderField}
                label="Date et heure de début"
              />
            </FormGroup>
            <label style={{ color: "#fff" }}>Durée</label>
            <FormGroup>
              <Field
                name="duration"
                type="time"
                component={renderField}
                label="Durée"
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
  form: "addactivity", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SendTime);
