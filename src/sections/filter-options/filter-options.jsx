import { Stack } from "@mui/material";
import React from "react";
import SortByFilter from "./sort-by/sort-by-filter";

export default function FilterOptionsView() {
  return (
    <Stack spacing={3}>
      <SortByFilter />
    </Stack>
  );
}
