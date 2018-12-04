import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";

const SendInfo = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Description</label>
        <div>
          <Field
            name="description"
            type="text"
            component={renderField}
            label="description"
          />
        </div>
      </div>
      <div>
        <label>Infos complémentaires</label>
        <div>
          <Field
            name="more_infos"
            type="text"
            component={renderField}
            label="Plus d'infos"
          />
        </div>
      </div>
      <div>
        <label>Photo</label>
        <div>
          <Field
            name="photo"
            type="text"
            component={renderField}
            label="photo"
          />
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>
          Submit
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
