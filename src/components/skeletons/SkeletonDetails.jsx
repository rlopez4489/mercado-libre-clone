import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonDetails = () => {
  return (
    <div className="container-item-detail">
      <div className="container-img-description skeleton-container-img">
        <div className="container-img-detail">
          <Skeleton className="img-detail skeleton-img-size" />
        </div>
        <div className="container-description skeleton-container-description">
          <Skeleton className="title-description size-title-skeleton" />
        </div>
      </div>
      <div className="container-detail skeleton-container-detail">
        <Skeleton className="condition_solds skeleton-size-sold" />
        <Skeleton className="title-detail skeleton-title-detail" />
        <Skeleton className="price skeleton-price-detail" />

        <div className="btn-container">
          <Skeleton className="skeleton-btn-detail" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonDetails;
