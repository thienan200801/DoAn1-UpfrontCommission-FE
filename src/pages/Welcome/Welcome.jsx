import React from "react";
import Header from "../../components/Header/Header";
import applicationForm from "../../assets/applicationForm.png";
import applicationStatus from "../../assets/applicationStatus.png";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import "../Welcome/Welcome.css";

export default function Welcome() {
  const name = "ANDIE";

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="welcomeName">Welcome {name}</div>
        <div className="frontPage">
          <div className="question">What would you like to do today?</div>
          <div className="buttonWrapper">
            <div className="actionWrapper">
              <img src={applicationForm} className="dictation" />
              <Stack direction="row" spacing={2} className="customBtn">
                <Button variant="contained">Start new application</Button>
              </Stack>
            </div>
            <div className="actionWrapper">
              <img src={applicationStatus} className="dictation" />
              <Stack direction="row" spacing={2} className="customBtn">
                <Button variant="contained">Check application's status</Button>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
