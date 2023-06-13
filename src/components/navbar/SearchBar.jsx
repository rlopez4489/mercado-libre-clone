import React from "react";
import searchIcon from "../../assets/images/icons/ic_Search.png";

const SearchBar = ({ value, setValue, onSubmit }) => {
  return (
    <>
      <input
        className="input-search"
        type="search"
        placeholder="Nunca dejes de buscar"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && onSubmit()}
      />
      <button
        onClick={() => onSubmit()}
        type="submit"
        className="search-button"
      >
        <img src={searchIcon} alt="Buscar" />
      </button>
    </>
  );
};

export default SearchBar;
