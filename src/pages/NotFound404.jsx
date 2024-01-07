// NotFound.js

import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";

const NotFound404 = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Page Not Found.
      </Typography>
      <Typography variant="body1" gutterBottom>
        We're sorry, the page you requested does not exist.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
      >
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFound404;
