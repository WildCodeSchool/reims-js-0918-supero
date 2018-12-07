import { connect } from "react-redux";
import { selectAddressAction } from "../actions/actions";
import { reduxForm } from "redux-form";
import SendPlace from "./SendPlace";
import validate from "./validate";

const mapStateToProps = state => ({
  addressSelected: state.selectAddress
});

const mapDispatchToProps = dispatch => ({
  selectAddress: address => dispatch(selectAddressAction(address))
});

const SendPlaceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SendPlace);

export default reduxForm({
  form: "addactivity", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SendPlaceContainer);
