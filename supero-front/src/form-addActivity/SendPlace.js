import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";

const SendPlace = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="address"
        type="text"
        component={renderField}
        label="Adresse"
      />
      <Field name="city" type="text" component={renderField} label="Ville" />
      <Field
        name="start_time"
        type="text"
        component={renderField}
        label="Heure de début"
      />
      <Field
        name="duration"
        type="text"
        component={renderField}
        label="Durée"
      />
      <Field
        name="participants"
        type="text"
        component={renderField}
        label="Limite maximum de participants"
      />
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Précédent
        </button>
        <button type="submit" className="next">
          Suivant
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "addactivity", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SendPlace);
