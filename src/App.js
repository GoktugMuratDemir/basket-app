// src/App.js
import React from "react";
import "./App.css";
import LayoutMain from "./Layouts/Main";
import { ProductRenderDataProvider } from "./context/product-context";
import { PaginationProvider } from "./context/pagination-context";
import { BasketProvider } from "./context/basket-context";

function App() {
  return (
    <ProductRenderDataProvider>
      <PaginationProvider>
        <BasketProvider>
          <LayoutMain />
        </BasketProvider>
      </PaginationProvider>
    </ProductRenderDataProvider>
  );
}

export default App;
