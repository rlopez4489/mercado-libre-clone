import React from "react";
import notResults from "../../assets/images/ilustrations/undraw_searching_re_3ra9.svg";

const SearchIlustration = () => {
  return (
    <div className="home-container">
      <div className="img-container-home">
        <img className="img-home" src={notResults} />
      </div>
      <div>
        <h1 className="title">
          No hay publicaciones que coincidan con tu búsqueda
        </h1>
        <h2 className="subtitle">
          Por favor, revisá la ortografía de la palabra y Utilizá palabras más
          genéricas o menos palabras.
        </h2>
      </div>
    </div>
  );
};

export default SearchIlustration;
