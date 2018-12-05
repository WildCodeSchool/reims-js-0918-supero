import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form, FormGroup, Input } from "reactstrap";
import validate from "./validate";
import renderField from "./renderField";
import renderDatePicker from "./renderDatePicker";

const SendPlace = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          name="address"
          tag={Field}
          type="text"
          component={renderField}
          label="Adresse"
        />
      </FormGroup>
      <FormGroup>
        <Input
          name="city"
          tag={Field}
          type="text"
          component={renderField}
          label="Ville"
        />
      </FormGroup>
      <FormGroup>
        <Field
          name="date"
          type="text"
          component={renderDatePicker}
          label="Date"
        />
      </FormGroup>
      <FormGroup>
        <Input
          name="duration"
          tag={Field}
          type="text"
          component={renderField}
          label="Durée"
        />
      </FormGroup>
      <FormGroup>
        <Input
          name="participants"
          tag={Field}
          type="text"
          component={renderField}
          label="Limite maximum de participants"
        />
      </FormGroup>
      <div>
        <Button type="button" className="previous" onClick={previousPage}>
          Précédent
        </Button>
        <Button type="submit" className="next">
          Suivant
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
})(SendPlace);
