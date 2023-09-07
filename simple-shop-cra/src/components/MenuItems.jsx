import React, { useContext } from "react";
import "../styles/MenuItems.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faRightToBracket,
  faUser,
  faUserPlus,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { UserContext } from "../Contexts/userContext";

import Categories from "./Categories";

import "../styles/MenuItems.scss";
let menuItems = [
  {
    title: "Cart",
    icon: <FontAwesomeIcon icon={faCartShopping} />,
    path: "/cart",
    cName: "menu-cart",
  },
];
const unloggedUserItems = [
  {
    title: "Login",
    icon: <FontAwesomeIcon icon={faUserPlus} />,
    path: "/login",
    cName: "menu-login",
  },
];
const loggedUserItems = [
  {
    title: "Account",
    icon: <FontAwesomeIcon icon={faUser} />,
    path: "/account",
    cName: "menu-login",
  },
  {
    title: "Logout",
    icon: <FontAwesomeIcon icon={faRightToBracket} />,
    path: "/",
    cName: "menu-signUp",
  },
];

const MenuItems = ({ showHideMenu }) => {
  const { userId, logoutUser, userCartCount } = useContext(UserContext);
  const storeItems = menuItems.map((item, index) => {
    return (
      <li key={index} className={item.cName}>
        <Link onClick={showHideMenu} to={item.path}>
          {item.icon}
          <span>{item.title}</span>
          <span className="cart-count">
            {userCartCount > 99 ? "99+" : userCartCount}
          </span>
        </Link>
      </li>
    );
  });
  const loginItems = unloggedUserItems.map((item, index) => {
    return (
      <li key={index} className={item.cName}>
        <Link onClick={showHideMenu} to={item.path}>
          {item.icon}
          <span>{item.title}</span>
        </Link>
      </li>
    );
  });
  const logoutItems = loggedUserItems.map((item, index) => {
    const handleItemOnclick = (title) => {
      if (title === "Logout") {
        logoutUser();
        showHideMenu();
      } else {
        showHideMenu();
      }
    };
    return (
      <li key={index} className={item.cName}>
        <Link onClick={() => handleItemOnclick(item.title)} to={item.path}>
          {item.icon}
          <span>{item.title}</span>
        </Link>
      </li>
    );
  });
  return (
    <ul className="menu-list">
      <li>
        <Categories
          showHideMenu={showHideMenu}
          icon={<FontAwesomeIcon className="categories-icon" icon={faTag} />}
        />
      </li>
      {storeItems}
      {userId ? logoutItems : loginItems}
    </ul>
  );
};

export default MenuItems;
