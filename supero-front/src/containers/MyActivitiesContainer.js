import { connect } from "react-redux";
import MyActivities from "../MyActivities";

const mapStateToProps = state => ({
  connectedUserActivities: state.connectedUserActivities
});

export default connect(mapStateToProps)(MyActivities);
