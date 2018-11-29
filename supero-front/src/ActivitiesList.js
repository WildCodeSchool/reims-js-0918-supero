import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

import Activity from "./Activity";

const ActivitiesList = props => {
  return (
    <div>
      {props.activities.map((activity, index) => (
        <Activity key={index} {...activity} />
      ))}
      <Button className="addActivityButton">+</Button>
    </div>
  );
};

ActivitiesList.propTypes = {
  activities: PropTypes.array.isRequired
};

export default ActivitiesList;
