import React from "react";
import { useRenderBasket } from "../../context/basket-context";
import { Stack, Typography } from "@mui/material";
import BasketList from "./List/basket-list";
import Checkout from "./Checkout/Checkout";

export default function BasketMain() {
  const { basketItems } = useRenderBasket();
  return (
    <Stack>
      <Typography variant="h1">Cart</Typography>
      {basketItems.length === 0 ? (
        <h1>Sepetinizde Ürün Bulunmamaktadır</h1>
      ) : (
       <Stack spacing={2}>
         <BasketList />
         <Checkout />
       </Stack>
      )}
   
    </Stack>
  );
}
