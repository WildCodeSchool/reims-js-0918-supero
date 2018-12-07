import selectAddressReducer from "./selectAddressReducer";

import { selectAddressAction } from "../actions/actions";
import { SELECT_ADDRESS } from "../actions/actionTypes";

describe("selectAdressReducer", () => {
  it("handles ACTIVITIES_RECEIVED action", () => {
    const fakeState = {};
    const action = {
      type: SELECT_ADDRESS,
      address: {
        label: "Reims, Marne, Grand Est, France métropolitaine, 51100, France",
        x: "4.031926",
        y: "49.2577886"
      }
    };
    const expected = {
      label: "Reims, Marne, Grand Est, France métropolitaine, 51100, France",
      x: "4.031926",
      y: "49.2577886"
    };
    expect(selectAddressReducer(fakeState, action)).toEqual(expected);
  });
});
