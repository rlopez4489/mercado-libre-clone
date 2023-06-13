import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { formatMoney } from "../../helpers/helpers";

const ProductCard = ({ src, title, price, location, currency_id, onClick }) => {
  return (
    <div onClick={onClick} className="card-container">
      <div className="container-img">
        <img className="product-img" src={src} />
      </div>
      <div>
        <span className="product-price">
          {currency_id === "ARS" ? "$" : currency_id} {formatMoney(price)}
        </span>

        <h2 className="product-title">{title} </h2>
        <span className="product-location">{location} </span>
      </div>
    </div>
  );
};

export default ProductCard;
