// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Container, Grid } from "@mui/material";
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
      <Container maxWidth="xl" sx={{mt:5}}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <AppRoutes />
          </Grid>
          <Grid item xs={12} md={3}>
            <BasketMain />
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default LayoutMain;
