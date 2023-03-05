import React from "react";
import LoginBG from "../../assets/loginBG.png";
import Header from "../../components/Header/Header";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "./LoginStyle.css";

export default function Login() {
  return (
    <>
      <Header />
      <div className="loginContainer">
        {/* <img src={LoginBG} alt="Background" className="loginBG" /> */}
        <div className="loginForm">
          <div className="welcome">Welcome</div>
          <div className="title">LOGIN TO THE BROKER PORTAL</div>
          <div className="formContainer">
            <TextField
              className="username"
              label="Username"
              variant="outlined"
            />
            <TextField
              className="password"
              label="Password"
              variant="outlined"
            />
          </div>
          <FormGroup className="saveUsername">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Save my username"
            />
          </FormGroup>

          <Stack spacing={2} direction="row">
            <Button variant="contained">Login</Button>
          </Stack>
        </div>
      </div>
    </>
  );
}
