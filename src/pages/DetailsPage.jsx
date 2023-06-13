import React, { useEffect, useState } from "react";
import { getItemDescription } from "../api/api";
import { useParams } from "react-router-dom";
import ContainerProducts from "../components/layout/ContainerProducts";
import MainLayout from "../components/layout/MainLayout";

const DetailsPage = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState();

  useEffect(() => {
    const getItemDetails = async () => {
      try {
        const description = await getItemDescription(id);
        console.log("Descripción del artículo:", description);
        setProductDetail(description);

        // Hacer algo con la descripción
      } catch (error) {
        console.error("Error al obtener la descripción del artículo:", error);
        // Manejar el error de solicitud
      }
    };
    getItemDetails();
  }, [id]);

  return (
    <MainLayout>
      <ContainerProducts>
        <div>
          <div>
            <img src={productDetail?.pictures[0]?.secure_url} />
          </div>
          <div></div>
        </div>
      </ContainerProducts>
    </MainLayout>
  );
};

export default DetailsPage;
