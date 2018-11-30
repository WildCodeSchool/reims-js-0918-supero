import { connect } from "react-redux";
import App from "./App";
import {
  activitiesReceivedAction,
  fetchActivitiesAction
} from "../actions/actions";

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
  mapDispatchToProps,
  mapStateToProps
)(App);
