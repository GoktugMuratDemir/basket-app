/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRenderProductData } from "./product-context";
import _ from "lodash";

const RenderDataContext = createContext();

export function useRenderFiltered() {
  return useContext(RenderDataContext);
}

export function FilterProvider({ children }) {
  const { resDataAllProduct, setResDataAllFilterProduct } =
    useRenderProductData();
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);

  useEffect(() => {
    // Call the filtering function when selectedBrands or selectedModels change
    filterProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBrands, selectedModels]);

  const filterProducts = () => {
    let filteredProducts = resDataAllProduct;

    if (selectedBrands.length > 0) {
      filteredProducts = _.filter(filteredProducts, (product) =>
        _.includes(selectedBrands, product.brand)
      );
    }

    if (selectedModels.length > 0) {
      filteredProducts = _.filter(filteredProducts, (product) =>
        _.includes(selectedModels, product.model)
      );
    }

    setResDataAllFilterProduct(filteredProducts);
  };

  const value = {
    selectedBrands,
    selectedModels,
    setSelectedBrands,
    setSelectedModels,
  };

  return (
    <RenderDataContext.Provider value={value}>
      {children}
    </RenderDataContext.Provider>
  );
}
