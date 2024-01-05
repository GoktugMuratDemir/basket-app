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
  const [resDataAllProduct, setResDataAllProduct] = useState(null);
  const [resDataAllFilterProduct, setResDataAllFilterProduct] = useState(null);

  async function fetchAllDataProduct() {
    try {
      setLoading(true); // Veri çekimi başladığında loading'i true yap
      const { data } = await WebServices.getAllProducts();
      setResDataAllProduct(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Veri çekimi tamamlandığında loading'i false yap
    }
  }
  
  useEffect(() => {
    fetchAllDataProduct();
  }, []);

  useEffect(() => {
    if (resDataAllProduct) {
      setResDataAllFilterProduct(resDataAllProduct);
    }
  }, [resDataAllProduct]);

  const value = {
    loading,
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
