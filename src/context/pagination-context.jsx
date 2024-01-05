/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useEffect, useState } from "react";

const RenderDataContext = createContext();

export function useRenderPagination() {
  return useContext(RenderDataContext);
}

export function PaginationProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const value = {
    currentPage,
    setCurrentPage,
    handleChangePage,
    scrollToTop
  };

  return (
    <RenderDataContext.Provider value={value}>
      {children}
    </RenderDataContext.Provider>
  );
}
