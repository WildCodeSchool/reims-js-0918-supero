import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form, FormGroup, Input } from "reactstrap";
import validate from "./validate";
import renderField from "./renderField";

const SendInfo = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          name="description"
          tag={Field}
          type="text"
          component={renderField}
          label="Description"
        />
      </FormGroup>
      <FormGroup>
        <Input
          name="more_infos"
          tag={Field}
          type="text"
          component={renderField}
          label="Plus d'infos"
        />
      </FormGroup>
      <FormGroup>
        <Input
          name="picture"
          tag={Field}
          type="text"
          component={renderField}
          label="Photo"
        />
      </FormGroup>
      <div>
        <Button type="button" className="previous" onClick={previousPage}>
          Précédent
        </Button>
        <Button type="submit" disabled={pristine || submitting}>
          Valider
        </Button>
      </div>
    </Form>
  );
};
export default reduxForm({
  form: "addactivity", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SendInfo);
