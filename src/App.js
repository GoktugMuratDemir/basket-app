// src/App.js
import React from "react";
import "./App.css";

import { ProductRenderDataProvider } from "./context/product-context";
import { PaginationProvider } from "./context/pagination-context";
import { BasketProvider } from "./context/basket-context";
import { SnackbarProvider } from "./components/snackbar";
import { FilterProvider } from "./context/filter-context";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <ProductRenderDataProvider>
      <PaginationProvider>
        <BasketProvider>
          <SnackbarProvider>
            <FilterProvider>
              <RouterProvider router={routes} />
            </FilterProvider>
          </SnackbarProvider>
        </BasketProvider>
      </PaginationProvider>
    </ProductRenderDataProvider>
  );
}

export default App;
