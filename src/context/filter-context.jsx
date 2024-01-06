/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRenderProductData } from "./product-context";
import _ from "lodash";
import { useRenderPagination } from "./pagination-context";
import useResponsive from "../hooks/useResponsive";

const RenderDataContext = createContext();

export function useRenderFiltered() {
  return useContext(RenderDataContext);
}

export function FilterProvider({ children }) {
  const { resDataAllProduct, setResDataAllFilterProduct } =
    useRenderProductData();
  const { setCurrentPage, scrollToTop } = useRenderPagination();
  const isMobile = useResponsive("down", "sm");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);

  useEffect(() => {
    // Call the filtering function when selectedBrands or selectedModels change
    filterProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBrands, selectedModels]);

  const filterProducts = () => {
    // Check if both selectedBrands and selectedModels arrays are not empty
    if (selectedBrands.length > 0 && selectedModels.length > 0) {
      // Use lodash intersection to find common elements in arrays
      const filteredProducts = _.filter(
        resDataAllProduct,
        (product) =>
          _.includes(selectedBrands, product.brand) &&
          _.includes(selectedModels, product.model)
      );
      setResDataAllFilterProduct(filteredProducts);
    } else if (selectedBrands.length > 0) {
      // If only selectedBrands is selected
      const filteredProducts = _.filter(resDataAllProduct, (product) =>
        _.includes(selectedBrands, product.brand)
      );
      setResDataAllFilterProduct(filteredProducts);
    } else if (selectedModels.length > 0) {
      // If only selectedModels is selected
      const filteredProducts = _.filter(resDataAllProduct, (product) =>
        _.includes(selectedModels, product.model)
      );
      setResDataAllFilterProduct(filteredProducts);
    } else {
      // If no filters selected, set the original data
      setResDataAllFilterProduct(resDataAllProduct);
    }

    setCurrentPage(1);
    !isMobile && scrollToTop();
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
