import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Mainpage = () => {
  const [titles, setTitles] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getTitles();
  }, []);
  const getTitles = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setTitles(json));
  };

  return (
    <Box sx={{ backgroundColor: "#f7f7f7", p: 2 }}>
      {titles?.map((ele, index) => (
        <Box key={index}>
          <Typography
            sx={{
              backgroundColor: "white",
              width: "75%",
              ml: "12.5%",
              borderRadius: "15px",
              "&:hover": {
                backgroundColor: "lightgray",
              },
            }}
            p={2}
            my={1}
            onClick={() => navigate("/Single", { state: ele })}
          >
            {ele.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Mainpage;
