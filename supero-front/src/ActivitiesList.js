import React from "react";
import Activity from "./Activity";

const ActivitiesList = props => {
  return (
    <div>
      {props.activities.map(activity => (
        <Activity {...activity} />
      ))}
    </div>
  );
};

export default ActivitiesList;
