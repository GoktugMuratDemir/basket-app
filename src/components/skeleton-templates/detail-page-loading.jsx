import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

export default function DetailPageLoading() {
  return (
    <Stack
      p={2}
      mb={2}
      borderRadius={3}
      spacing={3}
      sx={{
        background: "rgba(196, 196, 196, 0.10)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Skeleton variant="rounded" width="100%" height="100%" />
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack spacing={5}>
            <Stack spacing={1.2}>
              <Skeleton variant="rounded" width="100%" height={30} />
              <Skeleton variant="rounded" width="100%" height={30} />
            </Stack>
            <Stack spacing={2}>
              <Skeleton variant="rounded" width="100%" height={50} />

              <Skeleton variant="rounded" width="100%" height={200} />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
