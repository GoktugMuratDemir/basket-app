// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Grid } from "@mui/material";
import HeaderMain from "./Header/Main";
import AppRoutes from "../routes/index";
import BasketMain from "./Basket/Main";
// import { useRenderProductData } from "../context/product-context";

function LayoutMain() {

  // const { resDataAllProduct } = useRenderProductData();
  // console.log(resDataAllProduct);

  return (
    <Router>
      <HeaderMain />
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <AppRoutes />
        </Grid>
        <Grid item xs={12} md={3}>
          <BasketMain />
        </Grid>
      </Grid>
    </Router>
  );
}

export default LayoutMain;
