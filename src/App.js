// src/App.js
import React from "react";
import "./App.css";
import LayoutMain from "./Layouts/Main";
import { ProductRenderDataProvider } from "./context/product-context";
import { PaginationProvider } from "./context/pagination-context";

function App() {
  return (
    <ProductRenderDataProvider>
      <PaginationProvider>
        <LayoutMain />
      </PaginationProvider>
    </ProductRenderDataProvider>
  );
}

export default App;
