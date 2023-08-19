import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Mainpage = () => {
  const [titles, setTitles] = useState([]);
  console.log(titles);
  useEffect(() => {
    getTitles();
  }, []);
  const getTitles = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setTitles(json));
  };

  return (
    <Box sx={{ backgroundColor: "#f7f7f9" }}>
      {titles?.map((ele, index) => (
        <Box key={index}>
          <Typography p={1} onClick={() => {}}>
            {ele.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Mainpage;
