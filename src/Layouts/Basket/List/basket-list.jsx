import React from "react";
import { useRenderBasket } from "../../../context/basket-context";
import { Paper, Stack, Typography, Button } from "@mui/material";
import { fTrCurrency } from "../../../utils/fTrCurrency";

export default function BasketList() {
  const { basketItems, decrementItemToBasket, addItemToBasket } =
    useRenderBasket();
  return (
    <Paper elevation={3} variant="elevation" sx={{ p: 2 }}>
      <Stack spacing={2} sx={{maxHeight: 300, overflow:"auto"}}>
        {basketItems.map((item) => (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignContent="center"
            spacing={1}
          >
            <Stack alignItems="flex-start">
              <Typography variant="subtitle2">{item.name}</Typography>
              <Typography variant="subtitle2" fontWeight="bold" color="#2A59FE">
                {fTrCurrency(item.count * item.price)}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Button
                sx={{
                  background: "#F3F4F6",
                  borderRadius: 3,
                  width: 40,
                  height: 40,
                }}
                onClick={() => decrementItemToBasket(item.id)}
              >
                -
              </Button>
              <Typography
                variant="h5"
                fontWeight="bold"
                color="white"
                sx={{
                  background: "#2A49FE",
                  p: 2,
                }}
              >
                {item.count}
              </Typography>
              <Button
                sx={{
                  background: "#F3F4F6",
                  borderRadius: 3,
                  width: 40,
                  height: 40,
                }}
                onClick={() => addItemToBasket(item.id)}
              >
                +
              </Button>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
}
