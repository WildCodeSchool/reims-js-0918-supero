import React from "react";

const ActivitiesList = props => {
  return (
    <div>
      <h1>Test1</h1>
      {props.activities.map(activity => (
        <p>{activity.adresse}</p>
      ))}
    </div>
  );
};

export default ActivitiesList;
