import { connect } from "react-redux";
import MyAccount from "../form-myAccount/MyAccount";
const { DateTime } = require("luxon");

const mapStateToProps = state => ({
  initialValues: {
    ...state.connectedUser,
    user_birthdate: DateTime.fromISO(state.connectedUser.user_birthdate)
      .toFormat("yyyy LL dd")
      .split(" ")
      .join("-")
  }
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAccount);
