import React from "react";
import Activity from "./Activity";

const ActivitiesList = props => {
  return (
    <div>
      {props.activities.map((activity, index) => (
        <Activity key={index} {...activity} />
      ))}
    </div>
  );
};

export default ActivitiesList;
