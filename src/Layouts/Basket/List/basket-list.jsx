import React from "react";
import { useRenderBasket } from "../../../context/basket-context";
import { Grid, Paper, Stack, Typography, Button } from "@mui/material";
import { fTrCurrency } from "../../../utils/fTrCurrency";

export default function BasketList() {
  const { basketItems,decrementItemToBasket,addItemToBasket } = useRenderBasket();
  return (
    <Paper elevation={3} variant="elevation">
      {basketItems.map((item) => (
        <Grid container spacing={2} key={item.id}>
          <Grid item xs={6}>
            <Stack>
              <Typography variant="subtitle1" color="initial">
                {item.name}
              </Typography>
              <Typography variant="subtitle1" color="initial">
                {fTrCurrency(item.count * item.price)}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row">
              <Button variant="text" onClick={()=>decrementItemToBasket(item.id)}>-</Button>
              <Typography variant="h1">{item.count}</Typography>
              <Button variant="text" onClick={()=>addItemToBasket(item.id)}>+</Button>
            </Stack>
          </Grid>
        </Grid>
      ))}
    </Paper>
  );
}
