import { Grid } from "@mui/material";
import React from "react";

import FilterOptionsView from "../sections/home/filter-options/filter-options";
import ProductView from "../sections/home/product-list/view/product-view";


export default function Home() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <FilterOptionsView />
        </Grid>
        <Grid item xs={12} md={9}>
          <ProductView />
        </Grid>
      </Grid>
    </>
  );
}
