import React from "react";
import Header from "../../components/Header/Header";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "../ConfirmApplication/ConfirmApplicationStyle.css";

export default function BrokerDetails() {
  return (
    <>
      <Header />
      <div className="brokerDetailsWrapper">
        <div>
          <div className="borrowerDetails">Confirm application</div>
          <div className="borrowerDetailsDescription">
            Please check the details of the person who apply for a home loan. If
            any fields are incorrect, please connect Customer Center
          </div>
          <div className="borrowerDetailsInput">
            <TextField id="standard-basic" label="Name" variant="standard" />
            <TextField
              id="standard-basic"
              label="Date of birth"
              variant="standard"
            />
            <TextField id="standard-basic" label="Email" variant="standard" />
            <TextField
              id="standard-basic"
              label="Phone number"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Current address"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Temporary address"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Total salary per year"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Savings amount in account"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Tax number"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Offset account ID"
              variant="standard"
            />
          </div>
        </div>

        <div>
          <div className="borrowerDetails">Property Details</div>
          <div className="detailsCustomWrapper">
            <div className="brokerDetailsContentWrapper">
              <div className="brokerDetailSubtitle">Property Address</div>
              <div className="propertyDetailsContent">
                93 Alfred Street, Cocklebiddy, Western Australia
              </div>
            </div>
            <div className="brokerDetailsContentWrapper">
              <div className="brokerDetailSubtitle">
                Property Estimated Value
              </div>
              <div className="propertyDetailsContent">$ 50000000</div>
            </div>
          </div>
        </div>

        <div>
          <div className="borrowerDetails">Loan Details</div>
          <div className="detailsCustomWrapper">
            <div className="brokerDetailsContentWrapper">
              <div className="brokerDetailSubtitle">Lending amount</div>
              <div className="loanDetailsContent">$ 50000000</div>
            </div>
            <div className="loanDetailsCover">
              <div className="brokerDetailSubtitle">Loan Period</div>
              <div className="loanDetailsBox">
                <div className="loanDetailsBoxLeft">
                  <div className="loanDetailsBoxLeftTop">5 years</div>
                  <div className="loanDetailsBoxLeftBottom">Loan period</div>
                </div>
                <div className="loanDetailsBoxRight">
                  <div className="loanDetailsBoxRightTop">15%</div>
                  <div className="loanDetailsBoxRightBottom">
                    Fixed rate per year
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="borrowerDetails">Broker Details</div>
          <div className="borrowerDetailsDescription">
            Please enter the details of Broker who will be paid commission to
          </div>
          <div className="brokerDetailsContentWrapper">
            <div className="brokerDetailSubtitle">Broker Name</div>
            <div>Christ James Hans</div>
          </div>
          <div className="brokerDetailsContentWrapper">
            <div className="brokerDetailSubtitle">Broker ID</div>
            <div>HSL628369</div>
          </div>
          <div className="brokerDetailsContentWrapper">
            <div className="brokerDetailSubtitle">Aggregator Name</div>
            <div>Australian Mortgage Brokers</div>
          </div>
        </div>

        <div className="brokerDetailBtnWraper">
          <Stack spacing={2} direction="row">
            <Button variant="outlined">Cancel</Button>
            <Button variant="contained">Next</Button>
          </Stack>
        </div>
      </div>
    </>
  );
}
