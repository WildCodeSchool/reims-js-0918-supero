import React, { Component } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { Input } from "reactstrap";
import { Button, InputGroup, InputGroupAddon } from "reactstrap";

const provider = new OpenStreetMapProvider();

class AddressInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      addressQuery: "",
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
          addressQuery: request
        });
      });
  };

  resetQuery = () => {
    this.setState({
      addressQuery: ""
    });
  };

  render() {
    return (
      <div className="adresse-input">
        <InputGroup>
          <Input
            className="Form-Input"
            onChange={event => this.handleInput(event)}
            placeholder={this.props.label}
            type={this.props.type}
            name={this.props.input.name}
            value={this.state.addressQuery}
          />
          {this.state.addressQuery !== "" && (
            <InputGroupAddon addonType="append">
              <Button
                className="reset-address"
                onClick={() => this.resetQuery()}
              >
                <i className="fas fa-times-circle" />
              </Button>
            </InputGroupAddon>
          )}
        </InputGroup>
        {this.props.touched && this.props.error && (
          <span>
            <i class="fas fa-exclamation-triangle" /> {this.props.error}
          </span>
        )}

        {this.state.resultOpen && (
          <div className="adresse-result">
            {this.state.result.map((address, index) => (
              <p
                className="text-truncate"
                key={index}
                onClick={() => {
                  this.props.selectAddress(address);
                  this.setState({
                    addressQuery: address.label,
                    resultOpen: false
                  });
                }}
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
