import React from "react";
const SearchForm = () => {
  return (
    <form className="search-form">
      <label className="search-form__label" htmlFor="search-product">
        <input className="search-form__input" type="text" />
      </label>
      <button className="search-form__btn"></button>
    </form>
  );
};

export default SearchForm;
