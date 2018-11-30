import { ACTIVITIES_RECEIVED } from "../actions/actionTypes";

const activitiesReducer = (previousState = [], action) => {
  switch (action.type) {
    case ACTIVITIES_RECEIVED:
      return action.activities;
    default:
      previousState;
  }
};

export default activitiesReducer;
