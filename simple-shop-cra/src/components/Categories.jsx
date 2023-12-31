import React from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import "../styles/Categories.scss";

/// tutaj bede pobieral kategorie z bazy dabych
const categories = [
  { title: "All", cName: "all-category", path: "/products/" },
  { title: "Guns", cName: "guns-category", path: "/products/Guns" },
  { title: "Special", cName: "special-category", path: "/products/Special" },
  { title: "Other", cName: "other-category", path: "/products/Other" },
];

const Categories = ({ icon, showHideMenu }) => {
  const [isShowed, setShow] = React.useState();

  const showCategories = () => {
    setShow(!isShowed);
  };

  const allCategories = categories.map((category, index) => {
    return (
      <li className={`categories-list__category`} key={index}>
        <NavLink
          to={category.path}
          className={category.cName + " " + "categories-list__category-link"}
          onClick={showHideMenu && showCategories}
          exact
          activeClassName="categories-list__category-link--active"
        >
          {category.title}
        </NavLink>
      </li>
    );
  });

  return (
    <div className="categories">
      <p className="categories-text" onClick={showCategories}>
        {icon ? icon : null}
        Categories
      </p>
      <ul
        className={
          isShowed ? "categories-list" : `categories-list categories-list--hide`
        }
      >
        {allCategories}
      </ul>
    </div>
  );
};

export default Categories;
