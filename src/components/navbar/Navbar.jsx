import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    navigate(`items?search=${value}`);
  };

  return (
    <div className="nav-container">
      <div className="nav-container-items">
        <Logo />
        <SearchBar onSubmit={onSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
};

export default Navbar;
