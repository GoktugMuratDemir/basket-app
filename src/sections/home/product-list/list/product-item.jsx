import { Avatar, Paper, Stack, Typography, Button } from "@mui/material";
import React from "react";
import { fDateTime } from "../../../../utils/formatTime";
import { useRenderBasket } from "../../../../context/basket-context";
import { useRenderPagination } from "../../../../context/pagination-context";
import { fTrCurrency } from "../../../../utils/fTrCurrency";
import { useNavigate } from "react-router-dom";
import useResponsive from "../../../../hooks/useResponsive";

export default function ProductItem({ item }) {
  const { addItemToBasket } = useRenderBasket();
  const { scrollToTop, scrollToBottom } = useRenderPagination();

  const isMobile = useResponsive("down", "sm");

  const navigate = useNavigate();

  return (
    <Paper
      variant="elevation"
      elevation={3}
      sx={{
        p: 2,
        cursor: "pointer",
        height: 1,
        "&:hover": {
          background: "#eee",
          transition: "all 0.5s ease",
        },
      }}
      onClick={() => navigate(`/detail/${item.id}`)}
    >
      <Stack direction="column" justifyContent="space-between" height="100%">
        <Avatar
          alt={item.name}
          src={item.image}
          variant="rounded"
          sx={{
            width: 1,
            height: 150,
          }}
        />
        <Stack height={60}>
          <Typography variant="caption">{fDateTime(item.createdAt)}</Typography>
          <Typography variant="caption">{`${item.brand} - ${item.model}`}</Typography>
        </Stack>
        <Typography
          variant="subtitle2"
          color="#2A59FE"
          fontWeight="bold"
          height={30}
        >
          {fTrCurrency(parseFloat(item.price))}
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          height={42}
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {item.name}
        </Typography>
        <Button
          variant="contained"
          sx={{ background: "#2A59FE", textTransform: "none" }}
          onClick={(event) => {
            event.stopPropagation();
            addItemToBasket(item.id);
            isMobile ? scrollToBottom() : scrollToTop();
          }}
        >
          <Typography variant="body1" color="white">
            Add To Cart
          </Typography>
        </Button>
      </Stack>
    </Paper>
  );
}
