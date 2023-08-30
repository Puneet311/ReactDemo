import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

class Navbar extends Component {
  constructor() {
    super();
    this.state = { openMenu: false };
  }

  handleMenu = () => {
    this.setState({
      openMenu: !this.state.openMenu,
    });
  };
  renderList() {
    const list = [
      { name: "Home", key: "home", icon: "fa fa-home" },
      { name: "About", key: "about", icon: "fa fa-user" },
      { name: "Skills", key: "skill", icon: "fa fa-book" },
      { name: "Projects", key: "projects", icon: "fa fa-briefcase" },
      { name: "Contact", key: "contact", icon: "fa fa-address-book" },
    ];
    const element = list.map((item) => (
      <li className="list-item" key={item.key}>
        <NavLink
          to={item.key}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <i className={item.icon} aria-hidden="true"></i>
          {item.name}
        </NavLink>
      </li>
    ));
    return element;
  }

  render() {
    return (
      <div className="nav-container">
        <div className="logo">
          <h1>PUNEET</h1>
        </div>
        <div
          className={this.state.openMenu ? "list-container" : "hide-container"}
        >
          <ul className="list">{this.renderList()}</ul>
        </div>
        <div className="menu-icon">
          {this.state.openMenu ? (
            <i
              class="fa fa-times"
              onClick={() => this.handleMenu()}
              aria-hidden="true"
            ></i>
          ) : (
            <i
              className="fa fa-bars"
              onClick={() => this.handleMenu()}
              aria-hidden="true"
            ></i>
          )}
        </div>
        <div></div>
      </div>
    );
  }
}

export default Navbar;
