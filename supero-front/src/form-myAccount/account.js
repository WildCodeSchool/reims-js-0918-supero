import { LOAD } from "../actions/actionTypes";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      return {
        connectedUser: action.connectedUser
      };
    default:
      return state;
  }
};

/**
 * Simulates data loaded into this reducer from somewhere
 */
export const load = connectedUser => ({ type: LOAD, connectedUser });

export default reducer;
