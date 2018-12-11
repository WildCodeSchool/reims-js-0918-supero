import React from "react";
import { Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import "./Header.css";
import { Nav, NavItem, NavLink } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { faTimes, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes, faAngleLeft);

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
            color="faded"
            className="fixed-top d-flex justify-content-between"
            dark
          >
            {!this.props.activitiesView ? (
              <Link to="ActivitiesList">
                <FontAwesomeIcon
                  onClick={this.toggleNavbar}
                  style={{ fontSize: "28px", color: "rgba(255,255,255,0.5" }}
                  icon="angle-left"
                />
              </Link>
            ) : (
              <Link to="ActivitiesList">
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              </Link>
            )}
            <h2>{this.props.title}</h2>
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
