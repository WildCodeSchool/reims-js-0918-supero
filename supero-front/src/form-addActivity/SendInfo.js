import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form, FormGroup, Container, Row, Col } from "reactstrap";
import validate from "./validate";
import renderField from "../renderField";
import ComeFromTransparent from "../Animations/ComeFromTransparent";
import ComeFromLeft from "../Animations/ComeFromLeft";

const SendInfo = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col xs="10">
          <Form onSubmit={handleSubmit}>
            <ComeFromTransparent delay={300}>
              <h2 className="text-center">Plus d'infos</h2>
            </ComeFromTransparent>
            <FormGroup>
              <ComeFromLeft delay={400}>
                <Field
                  name="description"
                  type="textarea"
                  component={renderField}
                  label="Description"
                />
              </ComeFromLeft>
            </FormGroup>
            <FormGroup>
              <ComeFromLeft delay={500}>
                <Field
                  name="more_infos"
                  type="text"
                  component={renderField}
                  label="Infos complémentaire"
                />
              </ComeFromLeft>
            </FormGroup>
            <ComeFromTransparent delay={600}>
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
            </ComeFromTransparent>
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
