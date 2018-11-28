import React from "react";
import PropTypes from "prop-types";

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

ActivitiesList.PropTypes = {
  activities: PropTypes.object.isRequired
};

export default ActivitiesList;
