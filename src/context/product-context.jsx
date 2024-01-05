/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useEffect, useState } from "react";
import { WebServices } from "../services/requests";

const RenderDataContext = createContext();

export function useRenderProductData() {
  return useContext(RenderDataContext);
}

export function ProductRenderDataProvider({ children }) {
  const [resDataAllProduct, setResDataAllProduct] = useState(null);

  async function fetchAllDataProduct() {
    const {data} = await WebServices.getAllProducts();
    setResDataAllProduct(data);
  }

//   console.log(resDataAllProduct);

  useEffect(() => {
    fetchAllDataProduct();
  }, []);

  const value = {
    resDataAllProduct,
    setResDataAllProduct,
    fetchAllDataProduct,
  };

  return (
    <RenderDataContext.Provider value={value}>
      {children}
    </RenderDataContext.Provider>
  );
}
