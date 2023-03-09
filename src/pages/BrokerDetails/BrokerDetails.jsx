import React from "react";
import Header from "../../components/Header/Header";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "../BrokerDetails/BrokerDetailsStyle.css";

export default function BrokerDetails() {
  return (
    <>
      <Header />
      <div className="brokerDetailsWrapper">
        <div>
          <div className="borrowerDetails">Borrower Details</div>
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
          <div className="borrowerDetailsDescription">
            Please enter the details of property that borrower want to make the
            home loan for
          </div>
          <div className="detailsCustomWrapper">
            <TextField
              id="standard-basic"
              label="Property Address"
              variant="outlined"
              className="topDetailsInput"
            />
            <TextField
              id="standard-basic"
              label="Property Estimated Value"
              variant="outlined"
            />
          </div>
        </div>

        <div>
          <div className="borrowerDetails">Loan Details</div>
          <div className="borrowerDetailsDescription">
            Please enter the details of loan that borrower want to lend
          </div>
          <div className="detailsCustomWrapper">
            <TextField
              id="standard-basic"
              label="Lending amount"
              variant="outlined"
              className="topDetailsInput"
            />
            <TextField
              id="standard-basic"
              label="Lending Period"
              variant="outlined"
            />
          </div>
        </div>

        <div>
          <div className="borrowerDetails">Broker Details</div>
          <div className="borrowerDetailsDescription">
            Please enter the details of Broker who will be paid commission to
          </div>
          <div className="brokerDetailsCover">
            <div className="brokerDetailsContentWrapper">
              <div className="brokerDetailSubtitle">Broker Name</div>
              <TextField id="standard-basic" variant="outlined" />
            </div>
            <div className="brokerDetailsContentWrapper">
              <div className="brokerDetailSubtitle">Broker ID</div>
              <TextField id="standard-basic" variant="outlined" />
            </div>
            <div className="brokerDetailsContentWrapper">
              <div className="brokerDetailSubtitle">Aggregator Name</div>
              <TextField id="standard-basic" variant="outlined" />
            </div>
          </div>
        </div>

        <div className="brokerDetailBtnWraper">
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
