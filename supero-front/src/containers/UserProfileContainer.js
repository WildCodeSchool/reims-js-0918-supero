import { connect } from "react-redux";
import {
  viewUserProfileAction,
  fetchUserProfileAction,
  userActivitiesReceivedAction
} from "../actions/actions";
import UserProfile from "../UserProfile";

const mapStateToProps = state => ({
  userProfile: state.userProfile,
  loading: state.loading,
  userActivities: state.userActivities
});

const mapDispatchToProps = dispatch => ({
  getUserActivities: userActivities =>
    dispatch(userActivitiesReceivedAction(userActivities)),
  viewUserProfile: userProfile => dispatch(viewUserProfileAction(userProfile)),
  fetchUserProfile: () => dispatch(fetchUserProfileAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
