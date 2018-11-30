import loadingReducer from "./loadingReducer";

import {
  fetchActivitiesAction,
  activitiesReceivedAction
} from "../actions/actions";

describe("loadingReducer", () => {
  it("handles FETCH_ACTIVITIES action", () => {
    const fakeState = false;
    expect(loadingReducer(fakeState, fetchActivitiesAction())).toEqual(true);
  });
  it("handles ACTIVITIES_RECEIVED action", () => {
    const fakeState = true;
    expect(loadingReducer(fakeState, activitiesReceivedAction([]))).toEqual(
      false
    );
  });
});
