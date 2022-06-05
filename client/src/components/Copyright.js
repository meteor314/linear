import { Typography, Link } from "@mui/material";
import React from "react";

const Copyright = () => {
  return (
    <Typography variant="subtitle1" color="text.secondary">
      Copyright © 2022{" "}
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" color="inherit">
        Linear
      </Link>
    </Typography>
  );
};

export default Copyright;
