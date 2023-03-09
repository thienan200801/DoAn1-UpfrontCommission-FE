import React from "react";
import Header from "../../components/Header/Header";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "../ApplicationDetails/ApplicationDetailsStyle.css";

export default function BrokerDetails() {
  return (
    <>
      <Header />
      <div className="brokerDetailsWrapper">
        <div>
          <div className="borrowerDetails">Application Details</div>
          <div className="detailsCustomWrapper">
            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">Created day</div>
              <div className="propertyDetailsContent">
                93 Alfred Street, Cocklebiddy, Western Australia
              </div>
            </div>

            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">Status</div>
              <div className="propertyDetailsContent">$ 50000000</div>
            </div>

            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">Application ID</div>
              <div className="propertyDetailsContent">$ 50000000</div>
            </div>

            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">Name</div>
              <div className="propertyDetailsContent">$ 50000000</div>
            </div>

            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">Date of birth</div>
              <div className="propertyDetailsContent">$ 50000000</div>
            </div>

            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">Email</div>
              <div className="propertyDetailsContent">$ 50000000</div>
            </div>
            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">Phone number</div>
              <div className="propertyDetailsContent">$ 50000000</div>
            </div>
            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">Current address</div>
              <div className="propertyDetailsContent">$ 50000000</div>
            </div>
            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">Temporary address</div>
              <div className="propertyDetailsContent">$ 50000000</div>
            </div>
            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">Total salary per year</div>
              <div className="propertyDetailsContent">$ 50000000</div>
            </div>
            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">
                Savings amount in account
              </div>
              <div className="propertyDetailsContent">$ 50000000</div>
            </div>
            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">Tax number</div>
              <div className="propertyDetailsContent">$ 50000000</div>
            </div>
            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">Offset account ID</div>
              <div className="propertyDetailsContent">$ 50000000</div>
            </div>
            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">Property address</div>
              <div className="propertyDetailsContent">$ 50000000</div>
            </div>
            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">
                Property estimated Value
              </div>
              <div className="propertyDetailsContent">$ 50000000</div>
            </div>
            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">Lending amount</div>
              <div className="propertyDetailsContent">$ 50000000</div>
            </div>
            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">Loan period</div>
              <div className="propertyDetailsContent">$ 50000000</div>
            </div>
            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">Fixed rate per year</div>
              <div className="propertyDetailsContent">$ 50000000</div>
            </div>
            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">Broker name</div>
              <div className="propertyDetailsContent">$ 50000000</div>
            </div>
            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">Broker ID</div>
              <div className="propertyDetailsContent">$ 50000000</div>
            </div>
            <div className="applicationDetailsWrapper">
              <div className="brokerDetailSubtitle">Aggregator name</div>
              <div className="propertyDetailsContent">$ 50000000</div>
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
