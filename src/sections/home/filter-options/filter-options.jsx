import { Stack } from "@mui/material";
import React from "react";
import SortByFilter from "./sort-by/sort-by-filter";
import BrandOptionsFilter from "./brands/brand-options";
import ModelOptionsFilter from "./model/model-options";

export default function FilterOptionsView() {
  return (
    <Stack spacing={3}>
      <SortByFilter />
      <BrandOptionsFilter />
      <ModelOptionsFilter />
    </Stack>
  );
}
