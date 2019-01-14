import { connect } from "react-redux";
import { connectedUserReceivedAction } from "../actions/actions";
import MyAccount from "../MyAccount";

const mapStateToProps = state => ({
  userProfile: state.userProfile,
  loading: state.loading,
  connectedUser: state.connectedUser
});

const mapDispatchToProps = dispatch => ({
  getConnectedUser: connectedUser =>
    dispatch(connectedUserReceivedAction(connectedUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAccount);
