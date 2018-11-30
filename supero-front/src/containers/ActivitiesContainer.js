import { connect } from "react-redux";
import {
  activitiesReceivedAction,
  fetchActivitiesAction
} from "../actions/actions";
import ActivitiesList from "../ActivitiesList";

const mapStateToProps = state => ({
  activities: state.activities,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  activitiesReceived: activities =>
    dispatch(activitiesReceivedAction(activities)),
  fetchActivities: () => dispatch(fetchActivitiesAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesList);
