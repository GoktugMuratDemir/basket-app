/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useState } from "react";


const RenderDataContext = createContext();

export function useRenderPagination() {
  return useContext(RenderDataContext);
}

export function PaginationProvider({ children }) {
    const [currentPage, setCurrentPage] = useState(1); 
    const handleChangePage = (event, value) => {
        setCurrentPage(value);
      };


  const value = {
    currentPage,
    setCurrentPage,
    handleChangePage,
  };

  return (
    <RenderDataContext.Provider value={value}>
      {children}
    </RenderDataContext.Provider>
  );
}
