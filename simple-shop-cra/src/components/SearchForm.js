import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass as SearchIcon } from "@fortawesome/free-solid-svg-icons";

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <label className="search-form__label" htmlFor="search-product"></label>
      <div className="input-container">
        <input
          className="input-container__input"
          type="text"
          placeholder="Find your item..."
        />
        <button className="input-container__btn">
          <FontAwesomeIcon icon={SearchIcon} />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
