import { Avatar, Grid, Stack, Typography, Button } from "@mui/material";
import React from "react";
import _ from "lodash";
import { useRenderProductData } from "../../context/product-context";
import { useParams } from "react-router-dom";
import { fTrCurrency } from "../../utils/fTrCurrency";
import { useRenderBasket } from "../../context/basket-context";

export default function DetailView() {
  const { id } = useParams();
  const { resDataAllProduct } = useRenderProductData();
  const { addItemToBasket } = useRenderBasket();

  const selectedItem = _.find(resDataAllProduct, { id: id }) || null;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Avatar
          variant="rounded"
          src={selectedItem?.image}
          alt={selectedItem?.name}
          sx={{ width: 1, height: 1 }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Stack spacing={2}>
          <Typography variant="h4">
            {selectedItem?.name}
          </Typography>
          <Typography variant="h4">
            {fTrCurrency(parseFloat(selectedItem?.price))}
          </Typography>
          <Button variant="text"  onClick={(event) => {
            event.stopPropagation()
            addItemToBasket(selectedItem?.id)
          } }>
            Add to Cart
          </Button>

          <Typography variant="body2">{selectedItem?.description}</Typography>
        </Stack>

      </Grid>
    </Grid>
  );
}
