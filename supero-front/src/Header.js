import React from "react";
import { Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import "./Header.css";
import { Nav, NavItem, NavLink } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, withRouter } from "react-router-dom";
import { toastr } from "react-redux-toastr";
import ComeFromTransparent from "./Animations/ComeFromTransparent";
import ComeFromLeft from "./Animations/ComeFromLeft";
import { faTimes, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import BounceEffect from "./Animations/BounceEffect";

library.add(faTimes, faAngleLeft);

class Header extends React.Component {
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

  disconnect() {
    localStorage.removeItem("superoUser");
    toastr.success("Succès", "Déconnection Réussie");
    this.props.history.push("/");
  }
  render() {
    return (
      <div className={this.props.activitiesView && "addHeightOnHeader"}>
        {this.state.collapsed ? (
          <Navbar
            color="faded"
            className="fixed-top d-flex justify-content-between"
            dark
          >
            {!this.props.activitiesView ? (
              this.props.redirection ? (
                <div style={{ width: "38px" }} />
              ) : (
                <FontAwesomeIcon
                  onClick={this.props.goBack}
                  style={{ fontSize: "28px", color: "rgba(255,255,255,0.5" }}
                  icon="angle-left"
                />
              )
            ) : (
              <Link to="ActivitiesList">
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              </Link>
            )}
            <ComeFromTransparent delay={50}>
              <h2>{this.props.title}</h2>
            </ComeFromTransparent>
            <NavbarBrand href="/" className="mr-auto">
              Supero
            </NavbarBrand>
          </Navbar>
        ) : (
          <div className="menu-container">
            <div>
              <div className="menu-user-container">
                <BounceEffect delay={100}>
                  <div className="avatar rounded-circle">
                    <img
                      src={`${process.env.REACT_APP_API}/images/${
                        this.props.connectedUser.user_photo
                      }`}
                      alt="avatar"
                      align="bottom"
                      style={{
                        height: "120px",
                        width: "120px",
                        objectFit: "cover"
                      }}
                    />
                  </div>
                </BounceEffect>
                <ComeFromTransparent delay={150}>
                  <p className="pseudo">
                    {this.props.connectedUser.user_pseudo}
                  </p>
                </ComeFromTransparent>
              </div>
              <FontAwesomeIcon
                onClick={this.toggleNavbar}
                className="close-menu-icon"
                icon="times"
              />
              <Nav navbar>
                <NavItem>
                  <ComeFromLeft delay={250}>
                    <Link
                      className="nav-link"
                      to={`/UserProfile/${this.props.connectedUser.user_id}`}
                    >
                      Mon Compte
                    </Link>
                  </ComeFromLeft>
                </NavItem>
                <NavItem>
                  <ComeFromLeft delay={350}>
                    <Link className="nav-link" to={`/MyActivities`}>
                      Mes activités
                    </Link>
                  </ComeFromLeft>
                </NavItem>
                <NavItem>
                  <ComeFromLeft delay={450}>
                    <NavLink href="#">Notification</NavLink>
                  </ComeFromLeft>
                </NavItem>
                <NavItem>
                  <ComeFromLeft delay={550}>
                    <NavLink href="#">Aide et assistance</NavLink>
                  </ComeFromLeft>
                </NavItem>
                <NavItem>
                  <ComeFromLeft delay={650}>
                    <NavLink onClick={() => this.disconnect()}>
                      Déconnexion
                    </NavLink>
                  </ComeFromLeft>
                </NavItem>
              </Nav>
              <ComeFromTransparent delay={750}>
                <button
                  onClick={this.toggleNavbar}
                  className="close-menu-button"
                >
                  Fermer le menu
                </button>
              </ComeFromTransparent>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Header);
