// src/App.js
import React from "react";
import "./App.css";
import LayoutMain from "./Layouts/Main";
import { ProductRenderDataProvider } from "./context/product-context";
import { PaginationProvider } from "./context/pagination-context";
import { BasketProvider } from "./context/basket-context";
import { SnackbarProvider } from './components/snackbar';

function App() {
  return (
    <ProductRenderDataProvider>
      <PaginationProvider>
        <BasketProvider>
          <SnackbarProvider>

          <LayoutMain />
          </SnackbarProvider>
        </BasketProvider>
      </PaginationProvider>
    </ProductRenderDataProvider>
  );
}

export default App;
