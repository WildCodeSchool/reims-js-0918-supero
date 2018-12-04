import React from "react";
import AddActivityForm from "./OldAddActivityForm";

class AddActivityPage extends React.Component {
  submit = values => {
    console.log(values);
  };
  render() {
    return <AddActivityForm onSubmit={this.submit} />;
  }
}
export default AddActivityPage;
