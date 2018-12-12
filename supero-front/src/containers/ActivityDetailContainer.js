import { connect } from "react-redux";
import {
  activityReceivedAction,
  fetchActivityAction
} from "../actions/actions";
import ActivityDetail from "../ActivityDetail";

const mapStateToProps = state => ({
  activity: state.activity,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  activityReceived: activity => dispatch(activityReceivedAction(activity)),
  fetchActivity: () => dispatch(fetchActivityAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityDetail);
