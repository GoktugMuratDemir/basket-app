import { Avatar, Paper, Stack, Typography, Button } from "@mui/material";
import React from "react";
import { fDateTime } from "../../../../utils/formatTime";
import { useRenderBasket } from "../../../../context/basket-context";
import { fTrCurrency } from "../../../../utils/fTrCurrency";
import { useNavigate } from "react-router-dom";

export default function ProductItem({ item }) {
  const { addItemToBasket } = useRenderBasket();

  const navigate = useNavigate();
  
  return (
    <Paper variant="elevation" elevation={3} sx={{ p: 2, cursor:"pointer" }} onClick={()=>navigate(`/detail/${item.id}`)}>
      <Stack spacing={2} height="100%">
        <Avatar
          alt={item.name}
          src={item.image}
          variant="rounded"
          sx={{
            width: 1,
            height: 150,
          }}
        />
        <Typography variant="subtitle1">{fDateTime(item.createdAt)}</Typography>
        <Typography variant="subtitle1">{fTrCurrency(parseFloat(item.price))}</Typography>
        <Typography variant="subtitle1">{item.name}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => {
            event.stopPropagation()
            addItemToBasket(item.id)
          } }
        >
          Add To Card
        </Button>
      </Stack>
    </Paper>
  );
}
