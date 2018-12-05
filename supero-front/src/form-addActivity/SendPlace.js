import React, {Component} from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class SendPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  
  }
   onChange = date => this.setState({ date });
     render(){
  return (
    <form onSubmit={this.props.handleSubmit}>
      <Field
        name="activity_adresse"
        type="text"
        component={renderField}
        label="Adresse"
      />
      <Field
        name="activity_city"
        type="text"
        component={renderField}
        label="Ville"
      />
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="MMMM d, yyyy h:mm aa"
        timeCaption="time"
      />
      <Field
        name="activity_duration"
        type="text"
        component={renderField}
        label="Durée"
      />
      <Field
        name="activity_max_participants"
        type="text"
        component={renderField}
        label="Limite maximum de participants"
      />
      <div>
        <button type="button" className="previous" onClick={this.props.previousPage}>
          Précédent
        </button>
        <button type="submit" className="next">
          Suivant
        </button>
      </div>
    </form>
  );}
};

export default reduxForm({
  form: "addactivity", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SendPlace);
