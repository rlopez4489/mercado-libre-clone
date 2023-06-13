import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <div className="card-container">
      <div className="container-img">
        <Skeleton className="product-img size-img" />
      </div>
      <div>
        <Skeleton className="product-price price-skeleton" />

        <h2 className="product-title">
          <Skeleton className="title-skeleton" />
        </h2>
        <span className="product-location">
          <Skeleton className="product-skeleton" />
        </span>
      </div>
    </div>
  );
};

export default SkeletonCard;
