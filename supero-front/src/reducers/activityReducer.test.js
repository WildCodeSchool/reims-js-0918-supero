import activityReducer from "./activityReducer";

import { ACTIVITY_DETAIL_RECEIVED } from "../actions/actionTypes";

describe("activityReducer", () => {
    it("handles ACTIVITY_DETAIL_RECEIVED action", () => {
      const fakeState = [];
      const action = {
        type: ACTIVITY_DETAIL_RECEIVED,
        activityDetail: [
          {
            activity_id: 1,
            sports_id: 1,
            creator_id: 1,
            sport_name: "running",
            user_name: "Benoit",
            activity_difficulty: 3,
            activity_description: "Yolo",
            activity_adresse: "31 rue de lorem ipsum",
            activity_city: "lorem ipsum",
            activity_latitude: "35.123.78",
            activity_longitude: "654151651",
            activity_start_time: "05/12/18",
            activity_duration: 2,
            activity_photo: "image.png",
            activity_max_participants: 5,
            activity_creation_time: "01/12/18"
          }
        ]
      };
      const expected = [
        {
          activity_id: 1,
          sports_id: 1,
          creator_id: 1,
          sport_name: "running",
          user_name: "Benoit",
          activity_difficulty: 3,
          activity_description: "Yolo",
          activity_adresse: "31 rue de lorem ipsum",
          activity_city: "lorem ipsum",
          activity_latitude: "35.123.78",
          activity_longitude: "654151651",
          activity_start_time: "05/12/18",
          activity_duration: 2,
          activity_photo: "image.png",
          activity_max_participants: 5,
          activity_creation_time: "01/12/18"
        },
        
      ];
      expect(activityReducer(fakeState, action)).toEqual(expected);
    });
  });
  