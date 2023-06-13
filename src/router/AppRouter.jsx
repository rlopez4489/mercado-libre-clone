import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ResultsPage from "../pages/ResultsPage";
import Navbar from "../components/navbar/Navbar";
import DetailsPage from "../pages/DetailsPage";

const AppRouter = () => {
  const [productList, setProductList] = useState([]);
  return (
    <>
      {" "}
      <Navbar productList={productList} setProductList={setProductList} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<ResultsPage />} />
        <Route path="/items/:id" element={<DetailsPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
