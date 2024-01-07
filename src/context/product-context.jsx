/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useEffect, useState } from "react";
import { WebServices } from "../services/requests";

const RenderDataContext = createContext();

export function useRenderProductData() {
  return useContext(RenderDataContext);
}

export function ProductRenderDataProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [resDataAllProduct, setResDataAllProduct] = useState(null);
  const [resDataAllFilterProduct, setResDataAllFilterProduct] = useState(null);

  // console.log(resDataAllProduct);

  async function fetchAllDataProduct() {
    try {
      setLoading(true); // Veri çekimi başladığında loading'i true yap
      const { data } = await WebServices.getAllProducts();
  
      if (data) {
        setResDataAllProduct(data);
        setResDataAllFilterProduct(data);
        setIsError(false);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }
  

  useEffect(() => {
    fetchAllDataProduct();
  }, []);

  const value = {
    loading,
    isError,
    resDataAllProduct,
    resDataAllFilterProduct,
    setResDataAllFilterProduct,
    fetchAllDataProduct,
  };

  return (
    <RenderDataContext.Provider value={value}>
      {children}
    </RenderDataContext.Provider>
  );
}
