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
    </div>
  </div>
);

export default renderField;
