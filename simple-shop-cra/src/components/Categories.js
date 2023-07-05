import React from "react";
import { Link } from "react-router-dom";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";

import "../styles/Categories.scss";

/// tutaj bede pobieral kategorie z bazy dabych
const categories = [
  { title: "All", cName: "all-category", path: "/products/" },
  { title: "Guns", cName: "guns-category", path: "/products/Guns" },
  { title: "Other", cName: "other-category", path: "/products/Other" },
  { title: "Special", cName: "special-category", path: "/products/Special" },
];

const Categories = ({ icon, showHideMenu }) => {
  const [isShowed, setShow] = React.useState();

  const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  const showCategories = () => {
    setShow(!isShowed);
  };

  const scrollToProducts = () => {
    if (showHideMenu) {
      showHideMenu();
    }
    showCategories();
    const offsetShift = isTabletOrDesktop ? 90 : 110;
    const productsSectionPosition =
      document.querySelector(".products-main-page").offsetTop - offsetShift;
    console.log(productsSectionPosition);
    window.scrollTo({
      top: productsSectionPosition,
      behavior: "smooth",
    });
  };

  const allCategories = categories.map((category, index) => {
    return (
      <li className={`categories-list__category`} key={index}>
        <Link
          to={category.path}
          className={category.cName}
          onClick={showHideMenu && scrollToProducts}
        >
          {category.title}
        </Link>
      </li>
    );
  });

  return (
    <div className="categories">
      <p className="categories-text" onClick={showCategories}>
        {icon ? icon : null}
        Categories:
        <BsFillCaretDownFill
          className="categories-text__arrow-icon"
          style={isShowed ? { transform: "rotate(180deg)" } : null}
        />
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
