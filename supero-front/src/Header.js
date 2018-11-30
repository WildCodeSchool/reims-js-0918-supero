import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import "./Header.css";
import { Nav, NavItem, NavLink } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

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
      <div style={{ marginBottom: "20px", height: "71px" }}>
        {this.state.collapsed ? (
          <Navbar
            color="faded"
            className="fixed-top d-flex justify-content-between"
            dark
          >
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <h2>Flux</h2>
            <NavbarBrand href="/" className="mr-auto">
              Supero
            </NavbarBrand>
          </Navbar>
        ) : (
          <div className="menu-container">
            <div>
              <FontAwesomeIcon
                onClick={this.toggleNavbar}
                className="close-menu-icon"
                icon="times"
              />
              <Nav navbar>
                <NavItem>
                  <NavLink href="#">Mon Compte</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Confidentialité</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Notification</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Aide et assistance</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Déconnexion</NavLink>
                </NavItem>
              </Nav>
              <button onClick={this.toggleNavbar} className="close-menu-button">
                Fermer le menu
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
