import {
  VIEW_ACTIVITIES_FORM,
  ADD_ACTIVITY,
  VIEW_ACTIVITY_DETAILS,
  VIEW_ACTIVITIES,
  DISPLAY_MENU,
  HIDE_MENU,
  VIEW_NEWS
} from "./actionTypes";

import { addActivityAction } from "./actions";

describe("ADD_ACTIVITY action creator", () => {
  it("should return an ADD_ACTIVITY action and an activity object", () => {
    const activity = {
      activity_id: 1,
      sports_id: 1,
      creator_id: 1,
      difficulty: 3,
      activity_description: "Yolo",
      adresse: "31 rue de lorem ipsum",
      city: "lorem ipsum",
      latitude: "35.123.78",
      longitude: "654151651",
      start_time: "05/12/18",
      duration: 2,
      photo: "image.png",
      max_participants: 5,
      creation_time: "01/12/18"
    };
    const expected = {
      type: ADD_ACTIVITY,
      activity_id: 1,
      sports_id: 1,
      creator_id: 1,
      difficulty: 3,
      activity_description: "Yolo",
      adresse: "31 rue de lorem ipsum",
      city: "lorem ipsum",
      latitude: "35.123.78",
      longitude: "654151651",
      start_time: "05/12/18",
      duration: 2,
      photo: "image.png",
      max_participants: 5,
      creation_time: "01/12/18"
    };

    expect(addActivityAction(activity)).toEqual(expected);
  });
});
