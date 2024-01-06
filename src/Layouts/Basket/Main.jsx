import React from "react";
import { useRenderBasket } from "../../context/basket-context";
import { Paper, Stack, Typography } from "@mui/material";
import BasketList from "./List/basket-list";
import Checkout from "./Checkout/Checkout";
import useResponsive from "../../hooks/useResponsive";

export default function BasketMain() {
  const { basketItems } = useRenderBasket();
  const isMobile = useResponsive("down", "sm");
  return (
    <Stack spacing={2} sx={{ mb: isMobile ? 10 : 0 }}>
    <Stack spacing={0.5}>
      <Typography variant="caption">Cart</Typography>
      {basketItems.length === 0 ? (
        <Paper elevation={3} variant="elevation" sx={{ p: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Empty Basket
          </Typography>
        </Paper>
      ) : (
        <BasketList />
      )}
    </Stack>
    <Checkout />
  </Stack>
  );
}
