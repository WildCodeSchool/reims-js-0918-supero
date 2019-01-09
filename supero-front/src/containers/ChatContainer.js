import { connect } from "react-redux";
import Chat from "../Chat";

const mapStateToProps = state => ({
  connectedUser: state.connectedUser
});

export default connect(mapStateToProps)(Chat);
