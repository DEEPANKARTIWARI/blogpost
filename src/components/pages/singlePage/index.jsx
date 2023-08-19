import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
const [details, setDetails] = useState({});

const SinglePage = ({ userid, body, title }) => {
  const [single, setSingle] = useState({
    name: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    getSingle(userid);
  }, []);
  const getSingle = (userid) => {
    fetch(`https://jsonplaceholder.typicode.com/posts${userid}`)
      .then((response) => response.json())
      .then((json) =>
        setSingle({ name: json.name, email: json.email, phone: json.phone })
      );
  };

  return (
    <Box>
      <Typography>Name:{single.name}</Typography>
      <Typograph>E-mail:{single.email}</Typograph>
      <Typograph>Phone:{single.phone}</Typograph>
      <Typograph>Title:{title}</Typograph>
      <Typograph>{body}</Typograph>
    </Box>
  );
};

export default SinglePage;
