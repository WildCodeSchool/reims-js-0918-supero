import { connect } from "react-redux";
import {
  activitiesReceivedAction,
  fetchActivitiesAction,
  changeActivePageAction
} from "../actions/actions";
import ActivitiesList from "../ActivitiesList";

const mapStateToProps = state => ({
  activities: state.activities,
  loading: state.loading,
  activePage: state.activePage
});

const mapDispatchToProps = dispatch => ({
  changeActivePage: page => dispatch(changeActivePageAction(page)),
  activitiesReceived: activities =>
    dispatch(activitiesReceivedAction(activities)),
  fetchActivities: () => dispatch(fetchActivitiesAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesList);
