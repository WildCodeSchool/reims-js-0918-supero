import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";

const SendInfo = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="activity_description"
        type="text"
        component={renderField}
        label="Description"
      />
      <Field
        name="activity_more_infos"
        type="text"
        component={renderField}
        label="Plus d'infos"
      />
      <Field
        name="activity_photo"
        type="text"
        component={renderField}
        label="Photo"
      />
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Précédent
        </button>
        <button type="submit" disabled={pristine || submitting}>
          Valider
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
})(SendInfo);
