import React, { useEffect, useState } from "react";
import ContainerProducts from "../components/layout/ContainerProducts";
import { searchItems } from "../api/api";
import { useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../components/cards/ProductCard";
import MainLayout from "../components/layout/MainLayout";

const ResultsPage = () => {
  const [productList, setProductList] = useState();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search");
  const navigate = useNavigate();
  useEffect(() => {
    const onSubmit = async () => {
      try {
        const results = await searchItems(searchTerm);
        console.log(results);
        setProductList(results);
      } catch (error) {
        console.error("Error al buscar:", error);
      }
    };
    onSubmit();
  }, [searchTerm]);

  return (
    <MainLayout>
      <ContainerProducts>
        {productList?.map(
          ({ id, thumbnail, title, price, address, currency_id }) => (
            <ProductCard
              key={id}
              src={thumbnail}
              title={title}
              price={price}
              location={address?.city_name}
              currency_id={currency_id}
              onClick={() => navigate(`${id}`)}
            />
          )
        )}
      </ContainerProducts>
    </MainLayout>
  );
};

export default ResultsPage;
