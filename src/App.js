// src/App.js
import React from "react";
import "./App.css";
import LayoutMain from "./Layouts/Main";
import { ProductRenderDataProvider } from "./context/product-context";

function App() {
  return (
    <ProductRenderDataProvider>
      <LayoutMain />
    </ProductRenderDataProvider>
  );
}

export default App;
