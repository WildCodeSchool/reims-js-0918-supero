import { connect } from "react-redux";
import MyAccount from "../form-myAccount/MyAccount";
import { loadAccountAction } from "../actions/actions";

const mapStateToProps = state => ({
  userProfile: state.userProfile,
  loading: state.loading,
  connectedUser: state.connectedUser,
  initialValues: state.account.connectedUser
});

const mapDispatchToProps = dispatch => ({
  getConnectedUser: connectedUser =>
    dispatch(loadAccountAction(connectedUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAccount);
