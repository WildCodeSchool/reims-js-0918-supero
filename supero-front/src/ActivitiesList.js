import React from "react";
import PropTypes from "prop-types";

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

ActivitiesList.propTypes = {
  activities: PropTypes.array.isRequired
};

export default ActivitiesList;
