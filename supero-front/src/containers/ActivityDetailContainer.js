import { connect } from "react-redux";
import {
  activityDetailReceivedAction,
  fetchActivityDetailAction,
  connectedUserActivitiesReceivedAction
} from "../actions/actions";
import ActivityDetail from "../ActivityDetail";

const mapStateToProps = state => ({
  activityDetail: state.activityDetail,
  loading: state.loading,
  connectedUserActivities: state.connectedUserActivities,
  connectedUser: state.connectedUser
});

const mapDispatchToProps = dispatch => ({
  activityDetailReceived: activity =>
    dispatch(activityDetailReceivedAction(activity)),
  fetchActivity: () => dispatch(fetchActivityDetailAction()),
  getConnectedUserActivities: connectedUserActivities =>
    dispatch(connectedUserActivitiesReceivedAction(connectedUserActivities))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityDetail);
