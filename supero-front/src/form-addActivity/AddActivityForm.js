import React, { Component } from "react";
import PropTypes from "prop-types";
import SendSport from "./SendSport";
import SendPlace from "./SendPlace";
import SendInfo from "./SendInfo";

class AddActivityForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <SendSport onSubmit={this.nextPage} />}
        {page === 2 && (
          <SendPlace
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <SendInfo previousPage={this.previousPage} onSubmit={onSubmit} />
        )}
      </div>
    );
  }
}

AddActivityForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddActivityForm;
