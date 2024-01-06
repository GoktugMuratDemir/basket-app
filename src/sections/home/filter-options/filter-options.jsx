import { Stack } from "@mui/material";
import React from "react";
import SortByFilter from "./sort-by/sort-by-filter";
import BrandOptionsFilter from "./brands/brand-options";
import ModelOptionsFilter from "./model/model-options";
import FilterLoading from "../../../components/skeleton-templates/filter-loading";
import { useRenderProductData } from "../../../context/product-context";
import useResponsive from "../../../hooks/useResponsive";

export default function FilterOptionsView() {
  const { loading } = useRenderProductData();
  const isMobile = useResponsive("down", "sm");
  return (
    <Stack spacing={3} mb={!isMobile && 5}>
      {loading ? (
        <>
          <FilterLoading />
          <FilterLoading />
          <FilterLoading />
        </>
      ) : (
        <>
          <SortByFilter />
          <BrandOptionsFilter />
          <ModelOptionsFilter />
        </>
      )}
    </Stack>
  );
}
