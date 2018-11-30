import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import "./Header.css";
import Menu from "./Menu";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        {this.state.collapsed ? (
          <Navbar
            sticky-top
            color="faded"
            className="d-flex justify-content-between"
            dark
          >
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <h2>Flux</h2>
            <NavbarBrand href="/" className="mr-auto">
              Supero
            </NavbarBrand>
          </Navbar>
        ) : (
          <Menu />
        )}
      </div>
    );
  }
}
