import { CHANGE_ACTIVE_PAGE } from "../actions/actionTypes";

const changePageReducer = (previousState = 1, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_PAGE:
      return action.page;
    default:
      return previousState;
  }
};

export default changePageReducer;
