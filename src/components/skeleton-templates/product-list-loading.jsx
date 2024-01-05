import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

export default function ProductListLoading() {
  return (
    <>
      <Grid container spacing={2}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item,index) => (
          <Grid item xs={12} md={3} key={index}>
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
              <Skeleton variant="rounded" width="100%" height={150} />
              <Skeleton variant="rounded" width="100%" height={20} />
              <Skeleton variant="rounded" width="100%" height={20} />
              <Skeleton variant="rounded" width="100%" height={20} />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
