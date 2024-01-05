import { Avatar, Container, Stack, Typography } from "@mui/material";
import React from "react";
import SearchFilter from "./SearchFilter";
import { useRenderBasket } from "../../context/basket-context";
import { fTrCurrency } from "../../utils/fTrCurrency";
import useResponsive from "../../hooks/useResponsive";
import { useNavigate } from "react-router-dom";

export default function HeaderMain() {
  const { totalBasketPrice } = useRenderBasket();

  const isMobile = useResponsive("down", "sm");
  const navigate = useNavigate();

  return (
    <Stack sx={{ background: "#2A59FE" }}>
      <Container maxWidth="xl">
        <Stack
          direction={isMobile ? "column" : "row"}
          justifyContent="space-between"
          alignItems="center"
          spacing={isMobile ? 2 : 0}
          pb={isMobile && 2}
        >
          <Stack direction="row" alignItems="center" spacing={4}>
            <Typography
              variant="h5"
              color="white"
              sx={{ fontWeight: "900", cursor: "pointer" }}
              onClick={() => navigate(`/`)}
            >
              Eteration
            </Typography>
            <SearchFilter />
          </Stack>

          <Stack direction="row" alignItems="center" spacing={4}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar
                variant="square"
                src="/assets/Portfeil.svg"
                alt=""
                sx={{ width: 24, height: 24 }}
              />
              <Typography variant="h6" color="white">
                {fTrCurrency(totalBasketPrice)}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar
                variant="square"
                src="/assets/Profile.svg"
                alt=""
                sx={{ width: 24, height: 24 }}
              />
              <Typography variant="h6" color="white">
                Kerem
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
