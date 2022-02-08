import React from "react";
import "./styles.css";
import Logo from '../assets/DanielUI.jpg'
import { Link, useLocation } from "react-router-dom";
//import { GiHamburgerMenu } from "react-icons/gi";
//import { useOnClickOutside } from "../../hooks/useOnClickOutside";

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
  //const navbarRef = useRef(null);
  const location = useLocation();
  //const [navBar, setNavBar] = useState(false);

  /*  const toggleNavbar = () => {
    setNavBar(!navBar);
  }; */

  //const closeNavbar = () => setNavBar(false);

  //useOnClickOutside(navbarRef, navBar, closeNavbar);

  const currentlyActiveTab = (url) => {
    return url === location.pathname;
  };

  /* useEffect(() => {
    closeNavbar();
  }, [location.pathname]); */

  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="" />
      <ul
        /* className={navBar ? "navbar__list active" : "navbar__list"}
        ref={navbarRef} */
        className="navbar__list"
      >
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
      {/* <button onClick={toggleNavbar} className="navbar-toggle">
        <GiHamburgerMenu className="navbar-toggle-button" size={25} />
      </button> */}
    </div>
  );
};
