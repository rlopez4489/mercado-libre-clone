import React, { useEffect, useState } from "react";
import ContainerProducts from "../components/layout/ContainerProducts";
import { searchItems } from "../api/api";
import { useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../components/cards/ProductCard";
import MainLayout from "../components/layout/MainLayout";
import SkeletonCard from "../components/skeletons/SkeletonCard";

import { capitalizeFirstLetter } from "../helpers/helpers";
import ErrorIlustration from "../components/ilustrations/ErrorIlustration";
import SearchIlustration from "../components/ilustrations/SearchIlustration";

const ResultsPage = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showImgError, setShowImgError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search");
  const navigate = useNavigate();

  useEffect(() => {
    const onSubmit = async () => {
      setLoading(true);
      document.title = `${capitalizeFirstLetter(searchTerm)} | MercadoLibre`;
      try {
        const results = await searchItems(searchTerm);
        setProductList(results);
        setLoading(false);
      } catch (error) {
        setErrorMessage(error?.response?.data?.message);
        setShowImgError(true);
        setLoading(false);
      }
    };
    onSubmit();
  }, [searchTerm]);

  return (
    <MainLayout>
      <ContainerProducts>
        {loading && <SkeletonCard />}
        {!loading &&
          productList?.map(
            ({ id, thumbnail, title, price, address, currency_id }) => (
              <ProductCard
                key={id}
                src={thumbnail}
                title={title}
                price={price}
                location={address?.city_name}
                currency_id={currency_id}
                onClick={() => {
                  sessionStorage.setItem("title-tab", title);
                  navigate(`${id}`);
                }}
              />
            )
          )}
        {productList?.length === 0 && !loading && !showImgError && (
          <SearchIlustration />
        )}
        {showImgError && !loading && (
          <ErrorIlustration errorMessage={errorMessage} />
        )}
      </ContainerProducts>
    </MainLayout>
  );
};

export default ResultsPage;
