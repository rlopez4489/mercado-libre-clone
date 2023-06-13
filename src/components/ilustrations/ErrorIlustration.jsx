import React from "react";
import notFound from "../../assets/images/ilustrations/undraw_page_not_found_re_e9o6.svg";
const ErrorIlustration = ({ errorMessage }) => {
  return (
    <div className="home-container">
      <div className="img-container-home">
        <img className="img-home" src={notFound} />
      </div>
      <div style={{ width: "500px" }}>
        <h1 className="title-error">{errorMessage}</h1>
      </div>
    </div>
  );
};

export default ErrorIlustration;
