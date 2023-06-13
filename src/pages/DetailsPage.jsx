import React, { useEffect, useState } from "react";
import { getItemDescription, getItemDetails } from "../api/api";
import { useParams } from "react-router-dom";
import ContainerProducts from "../components/layout/ContainerProducts";
import MainLayout from "../components/layout/MainLayout";
import SkeletonDetails from "../components/skeletons/SkeletonDetails";
import {
  capitalizeFirstLetter,
  formatMoney,
  separateWithLineBreak,
} from "../helpers/helpers";
import ErrorIlustration from "../components/ilustrations/ErrorIlustration";

const DetailsPage = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState();
  const [productDescription, setProductDescription] = useState();
  const [loading, setLoading] = useState(false);
  const [showImgError, setShowImgError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getItemData = async () => {
      document.title = `${capitalizeFirstLetter(
        sessionStorage.getItem("title-tab")
      )} | MercadoLibre`;
      setLoading(true);
      try {
        const data = await getItemDetails(id);

        setProductDetail(data);

        setLoading(false);
      } catch (error) {
        console.error("Error al obtener la descripción del artículo:", error);
        setErrorMessage(error?.response?.data?.message);
        setShowImgError(true);
        setLoading(false);
      }
    };
    const getItemDataDescription = async () => {
      try {
        const description = await getItemDescription(id);

        setProductDescription(description);

        setLoading(false);
      } catch (error) {
        console.error("Error al obtener la descripción del artículo:", error);
        setErrorMessage(error?.response?.data?.message);
        setShowImgError(true);
        setLoading(false);
      }
    };
    getItemData();
    getItemDataDescription();
  }, [id]);

  const sold_quantity_value =
    Number(productDetail?.sold_quantity) > 1
      ? `${productDetail?.sold_quantity} Vendidos`
      : `${productDetail?.sold_quantity} Vendido`;

  return (
    <MainLayout>
      <ContainerProducts>
        {loading && <SkeletonDetails />}
        {!loading && !showImgError && (
          <>
            <div className="container-item-detail">
              <div className="container-img-description">
                <div className="container-img-detail">
                  <img
                    className="img-detail"
                    src={productDetail?.pictures[0]?.secure_url}
                  />
                </div>
                <div className="container-description">
                  <h2 className="title-description">
                    Descripción del producto
                  </h2>
                  <p className="text-description">
                    {" "}
                    {separateWithLineBreak(productDescription?.plain_text)}{" "}
                  </p>
                </div>
              </div>
              <div className="container-detail">
                <span className="condition_solds">
                  {productDetail?.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                  {sold_quantity_value}
                </span>
                <h1 className="title-detail">{productDetail?.title} </h1>
                <span className="price">
                  {productDetail?.currency_id === "ARS"
                    ? "$"
                    : productDetail?.currency_id}{" "}
                  {formatMoney(productDetail?.price)}{" "}
                </span>
                <div className="btn-container">
                  <button className="btn-buy">Comprar</button>
                </div>
              </div>
            </div>
            <div className="container-description-mobile">
              <h2 className="title-description">Descripción del producto</h2>
              <p className="text-description">
                {" "}
                {separateWithLineBreak(productDescription?.plain_text)}{" "}
              </p>
            </div>
          </>
        )}
        {showImgError && !loading && (
          <ErrorIlustration errorMessage={errorMessage} />
        )}
      </ContainerProducts>
    </MainLayout>
  );
};

export default DetailsPage;
