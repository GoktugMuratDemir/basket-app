import React from "react";
import { useRenderBasket } from "../../../context/basket-context";
import { Button, Paper, Stack, Typography } from "@mui/material";
import { fTrCurrency } from "../../../utils/fTrCurrency";
import { useSnackbar } from "notistack";

export default function Checkout() {
  const { basketItems, totalBasketPrice } = useRenderBasket();

  const { enqueueSnackbar } = useSnackbar();

  const handleCheckout = () => {
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
    enqueueSnackbar("İşlem Başarılı");
  };

  return (
    <Stack spacing={0.5}>
      <Typography variant="caption">Checkout</Typography>
      <Paper variant="elevation" elevation={3} sx={{ p: 2 }}>
        <Stack spacing={1}>
          <Stack direction="row" spacing={1}>
            <Typography variant="subtitle2" fontWeight="bold">
              Total Price:
            </Typography>
            <Typography variant="subtitle2" fontWeight="bold" color="#2A59FE">
              {fTrCurrency(totalBasketPrice)}
            </Typography>
          </Stack>
          <Stack>
            <Button
              variant="contained"
              sx={{ background: "#2A59FE", textTransform: "none" }}
              onClick={handleCheckout}
            >
              <Typography variant="body1" color="white">
                Checkout
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
