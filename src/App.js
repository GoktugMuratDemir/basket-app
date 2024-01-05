// src/App.js
import React from "react";
import "./App.css";
import LayoutMain from "./Layouts/Main";
import { ProductRenderDataProvider } from "./context/product-context";
import { PaginationProvider } from "./context/pagination-context";
import { BasketProvider } from "./context/basket-context";
import { SnackbarProvider } from "./components/snackbar";
import { FilterProvider } from "./context/filter-context";

function App() {
  return (
    <ProductRenderDataProvider>
      <PaginationProvider>
        <BasketProvider>
          <SnackbarProvider>
            <FilterProvider>
              <LayoutMain />
            </FilterProvider>
          </SnackbarProvider>
        </BasketProvider>
      </PaginationProvider>
    </ProductRenderDataProvider>
  );
}

export default App;
