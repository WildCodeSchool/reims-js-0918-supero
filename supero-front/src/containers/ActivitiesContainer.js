import { connect } from "react-redux";
import {
  activitiesReceivedAction,
  fetchActivitiesAction,
  connectedUserReceivedAction,
  changeActivePageAction,
  changeActivitiesOrderAction,
  connectedUserActivitiesReceivedAction
} from "../actions/actions";
import ActivitiesList from "../ActivitiesList";

const mapStateToProps = state => ({
  activities: state.activities,
  loading: state.loading,
  connectedUser: state.connectedUser,
  activePage: state.activePage,
  order: state.order,
  userActivities: state.userActivities
});

const mapDispatchToProps = dispatch => ({
  changeActivePage: page => dispatch(changeActivePageAction(page)),
  changeActivitiesOrder: order => dispatch(changeActivitiesOrderAction(order)),
  activitiesReceived: activities =>
    dispatch(activitiesReceivedAction(activities)),
  fetchActivities: () => dispatch(fetchActivitiesAction()),
  getConnectedUser: connectedUser =>
    dispatch(connectedUserReceivedAction(connectedUser)),
  getUserActivities: userActivities =>
    dispatch(connectedUserActivitiesReceivedAction(userActivities))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesList);
