import { ACTIVITIES_RECEIVED, FETCH_ACTIVITIES } from "../actions/actionTypes";

const loadingReducer = (previousState = false, action) => {
  switch (action.type) {
    case ACTIVITIES_RECEIVED:
      return false;
    case FETCH_ACTIVITIES:
      return true;
    default:
      return previousState;
  }
};

export default loadingReducer;
