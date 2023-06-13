import React from "react";

const ProductCard = ({ src, title, price, location, currency_id, onClick }) => {
  return (
    <div onClick={onClick} className="card-container">
      <div>
        <img className="product-img" src={src} />
      </div>
      <div>
        <span className="product-price">
          {currency_id === "ARS" && "$"} {price}{" "}
        </span>
        <h2 className="product-title">{title} </h2>
        <span className="product-location">{location} </span>
      </div>
    </div>
  );
};

export default ProductCard;
