import { connect } from "react-redux";
import { connectedUserReceivedAction } from "../actions/actions";
import MyAccount from "../form-myAccount/MyAccount";
import { load } from "../form-myAccount/account";

const mapStateToProps = state => ({
  userProfile: state.userProfile,
  loading: state.loading,
  connectedUser: state.connectedUser,
  initialValues: state.account.connectedUser
});

const mapDispatchToProps = dispatch => ({
  getConnectedUser: connectedUser =>
    dispatch(connectedUserReceivedAction(connectedUser)),
  TESTOHEY: connectedUser => dispatch(load(connectedUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAccount);
