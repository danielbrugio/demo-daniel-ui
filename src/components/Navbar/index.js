import React from "react";
import "./styles.css";
import Logo from "../assets/DanielUI.jpg";
import { Link, useLocation } from "react-router-dom";

const routes = [
  { url: "/gettingstarted", name: "Getting Started" },
  { url: "/autocomplete", name: "Autocomplete" },
  { url: "/button", name: "Button" },
  { url: "/numberinput", name: "NumberInput" },
  { url: "/select", name: "Select" },
  { url: "/textinput", name: "TextInput" },
  { url: "/theming", name: "Theming" }
];
export const Navbar = () => {
  const location = useLocation();

  const currentlyActiveTab = (url) => {
    return url === location.pathname;
  };

  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="" />
      <ul className="navbar__list">
        {routes.map((route) => {
          return (
            <li key={route.url}>
              <Link
                to={route.url}
                className={currentlyActiveTab(route.url) && "active"}
              >
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
