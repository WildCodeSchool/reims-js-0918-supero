import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form, FormGroup, Input, Container, Row, Col } from "reactstrap";
import validate from "./validate";
import renderField from "./renderField";

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
                name="more_info"
                type="textarea"
                component={renderField}
                label="Plus d'infos sur vous"
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="Form-Input"
                name="level"
                type="select"
                tag={Field}
                component="select"
                label="Niveau"
              >
                <option value="" disabled>
                  Niveau
                </option>
                <option value="1">Péon</option>
                <option value="2">Amateur</option>
                <option value="3">Héros</option>
                <option value="4">Demi-dieu</option>
              </Input>
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
  form: "userregistration", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SendInfo);
