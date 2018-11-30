import { ACTIVITIES_RECEIVED } from "../actions/actionTypes";

const activitiesReducer = (previousState = [], action) => {
  switch (action.type) {
    case ACTIVITIES_RECEIVED:
      return action.activities;
    default:
      return previousState;
  }
};

export default activitiesReducer;
