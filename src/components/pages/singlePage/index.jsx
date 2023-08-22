import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

const SinglePage = ({ userid, body, title }) => {
  const { state } = useLocation();

  const [single, setSingle] = useState({
    name: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    getSingle(state.userId);
  }, []);
  const getSingle = (userid) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
      .then((response) => response.json())
      .then((json) =>
        setSingle({ name: json.name, email: json.email, phone: json.phone })
      );
  };

  return (
    <Box>
      <Box
        sx={{
          position: "absolute",
          width: "50%",
          top: "25%",
          left: "25%",
          transform: "-50% -50%",
          backgroundColor: "white",
          borderRadius: "15px",
          p: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid lightgray",
          }}
        >
          <Box p={2} textAlign={"start"}>
            <Typography>Name:{single.name}</Typography>
            <Typography>Phone:{single.phone}</Typography>
          </Box>
          <Typography>E-mail : {single.email}</Typography>
        </Box>

        <Typography sx={{ marginTop: 2, fontWeight: "100px" }}>
          Title : {state.title}
        </Typography>
        <Typography sx={{ marginTop: 2 }}>{state.body}</Typography>
        <button>
          <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        </button>
      </Box>
    </Box>
  );
};

export default SinglePage;
