import React from "react";
import Header from "../../components/Header/Header";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CheckIcon from "../../assets/CheckIcon.png";

import "../FormSuccess/FormSuccessStyle.css";

export default function BrokerDetails() {
  return (
    <>
      <Header />
      <div className="brokerDetailsWrapper">
        <div>
          <div className="borrowerDetails">Application #83749</div>
          <div className="detailsCustomWrapper">
            <div className="loanDetailsCover">
              <div className="applicationBox">
                <div className="applicationBoxLeft">
                  <img src={CheckIcon} alt="CheckIcon" className="CheckIcon" />
                </div>
                <div className="applicationBoxRight">
                  <div className="applicationBoxRightTop">
                    Borrower Identity number
                  </div>
                  <div className="applicationBoxRightBottom">
                    Please enter the borrower identity number
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="brokerDetailBtnWraper">
          <Stack spacing={2} direction="row">
            <Button variant="outlined" className="btn1">
              Back to Welcome
            </Button>
            <Button variant="contained" className="btn2">
              Go to Application Details
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
}
