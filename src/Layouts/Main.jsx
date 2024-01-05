// src/App.js
import React from "react";
import { Outlet } from "react-router-dom";

import { Container, Grid } from "@mui/material";
import HeaderMain from "./Header/Main";
import BasketMain from "./Basket/Main";
// import { useRenderProductData } from "../context/product-context";

function LayoutMain() {
  // const { resDataAllProduct } = useRenderProductData();
  // console.log(resDataAllProduct);

  return (
    <>
      <HeaderMain />
      <Container maxWidth="xl" sx={{ mt: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <Outlet />
          </Grid>
          <Grid item xs={12} md={3}>
            <BasketMain />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default LayoutMain;
