import { connect } from "react-redux";
import MyAccount from "../form-myAccount/MyAccount";

const mapStateToProps = state => ({
  initialValues: state.connectedUser
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAccount);
