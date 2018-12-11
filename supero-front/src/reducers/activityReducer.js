import { ACTIVITY_DETAIL_RECEIVED } from "../actions/actionTypes";

const activityReducer = (previousState = [], action) => {
  switch (action.type) {
    case ACTIVITY_DETAIL_RECEIVED:
      return action.activity;
    default:
      return previousState;
  }
};

export default activityReducer;