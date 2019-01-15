import { LOAD_ACCOUNT_ACTION } from "../actions/actionTypes";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_ACCOUNT_ACTION:
      return {
        connectedUser: action.connectedUser
      };
    default:
      return state;
  }
};

export default reducer;
