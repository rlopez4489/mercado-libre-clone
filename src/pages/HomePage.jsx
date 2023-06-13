import React from "react";
import ContainerProducts from "../components/layout/ContainerProducts";
import MainLayout from "../components/layout/MainLayout";
import startBuy from "../assets/images/ilustrations/undraw_shopping_bags_b0o1.svg";

const HomePage = () => {
  return (
    <MainLayout>
      {" "}
      <ContainerProducts>
        {" "}
        <div className="home-container">
          <div className="img-container-home">
            <img className="img-home" src={startBuy} />
          </div>
          <div>
            <h1 className="title">
              ¡Descubre un universo de ofertas en línea AHORA!{" "}
            </h1>
            <h2 className="subtitle">
              ¡Te invitamos a disfrutar el placer de comprar desde casa con tan
              solo un clic!
            </h2>
          </div>
        </div>{" "}
      </ContainerProducts>
    </MainLayout>
  );
};

export default HomePage;
