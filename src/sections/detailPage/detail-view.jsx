import { Avatar, Grid, Stack, Typography, Button, Paper } from "@mui/material";
import React from "react";
import _ from "lodash";
import { useRenderProductData } from "../../context/product-context";
import { useParams } from "react-router-dom";
import { fTrCurrency } from "../../utils/fTrCurrency";
import { useRenderBasket } from "../../context/basket-context";
import { useRenderPagination } from "../../context/pagination-context";
import useResponsive from "../../hooks/useResponsive";

export default function DetailView() {
  const { id } = useParams();
  const { resDataAllProduct } = useRenderProductData();
  const { addItemToBasket } = useRenderBasket();
  const { scrollToTop,scrollToBottom } = useRenderPagination();
  const isMobile = useResponsive("down", "sm");

  const selectedItem = _.find(resDataAllProduct, { id: id }) || null;

  return (
    <Paper elevation={3} variant="elevation" sx={{ p: 2 }}>
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
          <Stack spacing={5}>
            <Stack spacing={1.2}>
              <Typography variant="h5">{selectedItem?.name}</Typography>
              <Typography variant="h5" fontWeight="bold" color="#2A59FE">
                {fTrCurrency(parseFloat(selectedItem?.price))}
              </Typography>
            </Stack>
            <Stack spacing={2}>
              <Button
                variant="contained"
                sx={{ background: "#2A59FE", fontSize: 16 }}
                onClick={(event) => {
                  event.stopPropagation();
                  addItemToBasket(selectedItem.id);
                  
                  isMobile ? scrollToBottom() : scrollToTop();
                }}
              >
                Add To Card
              </Button>

              <Typography variant="body1">
                {selectedItem?.description}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}
