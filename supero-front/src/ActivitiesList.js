import React from "react";

const ActivitiesList = props => {
  return (
    <div>
      {props.activities.map(activity => (
        <p>
          {activity.adresse}
          {activity.city}
        </p>
      ))}
    </div>
  );
};

export default ActivitiesList;
