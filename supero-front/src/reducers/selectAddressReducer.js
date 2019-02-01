import { SELECT_ADDRESS } from "../actions/actionTypes";

const selectAdressReducer = (previousState = {}, action) => {
  switch (action.type) {
    case SELECT_ADDRESS:
      return action.address;
    default:
      return previousState;
  }
};

export default selectAdressReducer;
