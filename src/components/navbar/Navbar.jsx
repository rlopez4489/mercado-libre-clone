import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setValue(
      location.pathname === "/" ? "" : sessionStorage.getItem("searchValue")
    );
    document.title = `Mercado Libre Argentina - Envíos Gratis en el día`;
  }, [location.pathname]);

  const onSubmit = async () => {
    sessionStorage.setItem("searchValue", value);
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
