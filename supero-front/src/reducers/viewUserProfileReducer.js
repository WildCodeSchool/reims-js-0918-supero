import { VIEW_USER_PROFILE } from "../actions/actionTypes";

const viewUserProfileReducer = (previousState = [], action) => {
  switch (action.type) {
    case VIEW_USER_PROFILE:
      return action.userProfile;
    default:
      return previousState;
  }
};

export default viewUserProfileReducer;
