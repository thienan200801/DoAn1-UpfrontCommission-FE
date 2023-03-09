import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Header from "../../components/Header/Header";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "../IdentityNumber/IdentityNumberStyle.css";

export default function IdentityNumber() {
  return (
    <>
      <Header />
      <div className="identityWrapper">
        <div className="title">Borrower Identity number</div>
        <div className="subtitle">
          Please enter the borrower identity number
        </div>
        <div className="labelIdentityNumber">Borrower Identity Number</div>
        <TextField
          id="outlined-basic"
          variant="outlined"
          className="customIdentityInput"
        />
        <div className="identityBtnWraper">
          <Stack spacing={2} direction="row">
            <Button variant="outlined" className="btn1">
              Cancel
            </Button>
            <Button variant="contained" className="btn2">
              Next
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
}
