import { Skeleton, Stack } from "@mui/material";
import React from "react";

export default function FilterLoading() {
  return (
    <Stack spacing={0.5}>
      <Skeleton variant="rounded" width={50} height={16} />
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
        <Skeleton variant="rounded" width="100%" height={50} />
        {[0, 1, 2].map((item, index) => (
          <Stack spacing={1} direction="row" key={index}>
            <Skeleton variant="rounded" width="20%" height={30} />
            <Skeleton variant="rounded" width="80%" height={30} />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
