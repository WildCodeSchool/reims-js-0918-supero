import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const renderDatePicker = ({ input, meta: { touched, error } }) => {
  console.log("renderDatePicker");
  return (
    <div>
      <DatePicker
        {...input}
        selected={input.value ? input.value : null}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="MMMM d, yyyy h:mm aa"
        timeCaption="time"
      />
    </div>
  );
};

export default renderDatePicker;
