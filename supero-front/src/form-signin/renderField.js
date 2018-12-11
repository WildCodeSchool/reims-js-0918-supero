import React from "react";
import { Input } from "reactstrap";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div>
      <Input
        className="Form-Input"
        {...input}
        placeholder={label}
        type={type}
      />
      {touched && error && (
        <span className="error">
          <i className="fas fa-exclamation-triangle" /> {error}
        </span>
      )}
    </div>
  </div>
);

export default renderField;
