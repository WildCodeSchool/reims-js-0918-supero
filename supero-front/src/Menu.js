import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./Menu.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

const Menu = () => {
  return (
    <div className="menu-container">
      <div>
        <FontAwesomeIcon className="close-menu-icon" icon="times" />
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
        <button className="close-menu-button">Fermer le menu</button>
      </div>
    </div>
  );
};

export default Menu;
