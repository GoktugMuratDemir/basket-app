import { Stack, Typography } from "@mui/material";
import React from "react";
import SearchFilter from "./SearchFilter";
import { useRenderBasket } from "../../context/basket-context";
import { fTrCurrency } from "../../utils/fTrCurrency";

export default function HeaderMain() {
  const { totalBasketPrice} = useRenderBasket();
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row">
        <Typography variant="h4" sx={{ fontWeight: "700" }}>
          Eteration
        </Typography>
        <SearchFilter />
      </Stack>

      <Stack direction="row">
        <Typography variant="h4">{fTrCurrency(totalBasketPrice)}</Typography>
        <Typography variant="h4">Kerem</Typography>
      </Stack>
    </Stack>
  );
}
