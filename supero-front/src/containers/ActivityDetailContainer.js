import { connect } from "react-redux";
import {
  activityDetailReceivedAction,
  fetchActivityDetailAction
} from "../actions/actions";
import ActivityDetail from "../ActivityDetail";

const mapStateToProps = state => ({
  activityDetail: state.activityDetail,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  activityDetailReceived: activity =>
    dispatch(activityDetailReceivedAction(activity)),
  fetchActivity: () => dispatch(fetchActivityDetailAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityDetail);
