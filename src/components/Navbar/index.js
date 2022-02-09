import React from "react";
import "./styles.css";
import Logo from "../assets/DanielUI.jpg";
import { NavLink } from "react-router-dom";


export const Navbar = () => {

  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="" />
      <ul className="navbar__list">
      <li>
        <NavLink to="/gettingstarted">Getting Started</NavLink>
      </li>
      <li>
        <NavLink to="/autocomplete">Autocomplete</NavLink>
      </li>
      <li>
        <NavLink to="/button">Button</NavLink>
      </li>
      <li>
        <NavLink to="/numberinput">Number Input</NavLink>
      </li>
      <li>
        <NavLink to="/select">Select</NavLink>
      </li>
      <li>
        <NavLink to="/textinput">Text Input</NavLink>
      </li>
      <li>
        <NavLink to="/theming">Theming</NavLink>
      </li>
      </ul>
    </div>
  );
};
