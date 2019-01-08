import { connect } from "react-redux";
import {
  viewUserProfileAction,
  fetchUserProfileAction
} from "../actions/actions";
import UserProfile from "../UserProfile";

const mapStateToProps = state => ({
  userProfile: state.userProfile,
  loading: state.loading,
  connectedUser: state.connectedUser
});

const mapDispatchToProps = dispatch => ({
  viewUserProfile: userProfile => dispatch(viewUserProfileAction(userProfile)),
  fetchUserProfile: () => dispatch(fetchUserProfileAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
