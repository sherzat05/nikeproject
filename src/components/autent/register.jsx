import { Box, TextField } from "@mui/material";
import React from "react";

const Register = () => {
  return (
    <Box>
      <TextField>email</TextField>
      <TextField>password</TextField>
      <TextField>confirm password</TextField>
    </Box>
  );
};

export default Register;
