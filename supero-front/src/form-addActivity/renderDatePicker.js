import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const { DateTime } = require("luxon");

const renderDatePicker = ({ input, meta: { touched, error } }) => {
  // console.log("1",DateTime.local().toJSDate());
  console.log(typeof input.value)
  // console.log("2",DateTime.fromJSDate(input.value));
  // input.value === ""
  //   ? DateTime.local().toJSDate()
  //   : DateTime.fromJSDate(input.value);
  return (
    <div>
      <DatePicker
        {...input}
        value={input.value ? input.value.toDateString() : new Date().toDateString()}
        selected={input.value ? input.value : new Date()}
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
