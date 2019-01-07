import { connect } from "react-redux";
import {
  activitiesReceivedAction,
  fetchActivitiesAction,
  connectedUserReceivedAction
} from "../actions/actions";
import ActivitiesList from "../ActivitiesList";

const mapStateToProps = state => ({
  activities: state.activities,
  loading: state.loading,
  connectedUser: state.connectedUser
});

const mapDispatchToProps = dispatch => ({
  activitiesReceived: activities =>
    dispatch(activitiesReceivedAction(activities)),
  fetchActivities: () => dispatch(fetchActivitiesAction()),
  connectedUser: connectedUser => dispatch(connectedUserReceivedAction(connectedUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesList);
