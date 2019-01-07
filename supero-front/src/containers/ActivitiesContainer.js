import { connect } from "react-redux";
import {
  activitiesReceivedAction,
  fetchActivitiesAction,
  connectedUserReceivedAction,
  changeActivePageAction,
  changeActivitiesOrderAction
} from "../actions/actions";
import ActivitiesList from "../ActivitiesList";

const mapStateToProps = state => ({
  activities: state.activities,
  loading: state.loading,
  connectedUser: state.connectedUser,
  activePage: state.activePage,
  order: state.order
});

const mapDispatchToProps = dispatch => ({
  changeActivePage: page => dispatch(changeActivePageAction(page)),
  changeActivitiesOrder: order => dispatch(changeActivitiesOrderAction(order)),
  activitiesReceived: activities =>
    dispatch(activitiesReceivedAction(activities)),
  fetchActivities: () => dispatch(fetchActivitiesAction()),
  connectedUser: connectedUser =>
    dispatch(connectedUserReceivedAction(connectedUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesList);
