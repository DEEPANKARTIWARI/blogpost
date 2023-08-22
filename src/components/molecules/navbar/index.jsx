import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const NavbarComponent = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ backgroundColor: "White" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "50%",
          p: 2,
          height: "50px",
        }}
      >
        <Typography p={1}>Deepankar Tiwari</Typography>
        <Button onClick={() => navigate("/")}>Home</Button>
      </Box>
    </Box>
  );
};

export default NavbarComponent;
