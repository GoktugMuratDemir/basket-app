import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function ProductNotFound() {
  return (
    <Card elevation={3}>
      <CardMedia
        component="img"
        height="100%"
        image="/assets/empty_illustration.png"
        alt="Product Not Found"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Sorry, No Product Found Matching Your Criteria!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          We couldn't find any products that match your criteria. Please try
          another product.
        </Typography>
      </CardContent>
    </Card>
  );
}
