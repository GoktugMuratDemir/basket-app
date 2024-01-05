import React from "react";
import { useRenderBasket } from "../../context/basket-context";
import { Paper, Stack, Typography } from "@mui/material";
import BasketList from "./List/basket-list";
import Checkout from "./Checkout/Checkout";
import { useRenderProductData } from "../../context/product-context";
import FilterLoading from "../../components/skeleton-templates/filter-loading";
import useResponsive from "../../hooks/useResponsive";

export default function BasketMain() {
  const { basketItems } = useRenderBasket();
  const { loading } = useRenderProductData();
  const isMobile = useResponsive("down", "sm");
  return (
    <>
      {loading ? (
        <FilterLoading />
      ) : (
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
      )}
    </>
  );
}
