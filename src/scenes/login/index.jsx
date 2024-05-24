import React from "react";
import "./LoginForm.css";
import { Box } from "@mui/material";

const Login = () => {
  return (
    <Box className="background">
      <Box className="shape"></Box>
      <Box className="shape"></Box>
      <form>
        <Box className="formContent">
          <h3>Login Here</h3>

          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />

          <Box className="buttonContainer">
            <button className="ButtonLogin" type="submit">
              Log In
            </button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
