import changePageReducer from "./changePageReducer";

import { CHANGE_ACTIVE_PAGE } from "../actions/actionTypes";

describe("changePageReducer", () => {
  it("handles CHANGE_ACTIVE_PAGE action", () => {
    const fakeState = [];
    const action = {
      type: CHANGE_ACTIVE_PAGE,
      page: 2
    };
    const expected = 2;
    expect(changePageReducer(fakeState, action)).toEqual(expected);
  });
});
