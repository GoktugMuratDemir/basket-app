import { Grid } from "@mui/material";
import React from "react";

import FilterOptionsView from "../sections/filter-options/filter-options";
import ProductView from "../sections/product-list/view/product-view";


export default function Home() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <FilterOptionsView />
        </Grid>
        <Grid item xs={12} md={8}>
          <ProductView />
        </Grid>
      </Grid>
    </>
  );
}
