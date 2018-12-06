import React, { Component } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { Input } from "reactstrap";

const provider = new OpenStreetMapProvider();

class AddressInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      adressQuery: "",
      resultOpen: false
    };
  }

  handleInput = event => {
    const request = event.target.value;
    provider
      .search({ query: request !== "" ? request + ", France" : request })
      .then(results => {
        this.setState({
          result: results.slice(0, 5),
          resultOpen: true,
          adressQuery: request
        });
      });
  };

  render() {
    return (
      <div className="adresse-input">
        <Input
          className="Form-Input"
          onChange={event => this.handleInput(event)}
          placeholder={this.props.label}
          type={this.props.type}
          value={
            this.props.adressSelected.label
              ? this.props.adressSelected.label
              : this.props.value
          }
        />
        {this.props.touched && this.props.error && (
          <span>{this.props.error}</span>
        )}

        {this.state.resultOpen && (
          <div className="adresse-result">
            {this.state.result.map((address, index) => (
              <p
                className="text-truncate"
                key={index}
                onClick={() => this.props.selectAddress(address)}
              >
                {address.label}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default AddressInput;
