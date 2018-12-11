import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form, FormGroup, Container, Row, Col } from "reactstrap";
import validate from "./validate";
import renderField from "../renderField";

const SendInfo = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col xs="10">
          <Form onSubmit={handleSubmit}>
            <h2 className="text-center">Plus d'infos</h2>
            <FormGroup>
              <Field
                name="description"
                type="textarea"
                component={renderField}
                label="Description"
              />
            </FormGroup>
            <FormGroup>
              <Field
                name="more_infos"
                type="text"
                component={renderField}
                label="Infos complémentaire"
              />
            </FormGroup>
            <FormGroup>
              <Field
                name="picture"
                type="text"
                component={renderField}
                label="Photo"
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
})(SendInfo);
