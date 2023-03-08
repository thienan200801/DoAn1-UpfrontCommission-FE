import React from "react";
import Header from "../../components/Header/Header";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InforIcon from "../../assets/InforIcon.png";

import "../SomethingWentWrong/SomethingWentWrongStyle.css";

export default function SomethingWentWrong() {
  return (
    <>
      <Header />
      <div className="errorWrapper">
        <div className="mainContentCover">
          <img src={InforIcon} alt="InforIcon" className="InforIcon" />
          <div className="errorTitle">Something went wrong</div>
          <div className="errorDescription">
            Sorry, we had a problem loading this page. Please try again shortly
          </div>
          <div className="errorBtnWrapper">
            <Stack spacing={2} direction="row">
              <Button variant="outlined">Refresh</Button>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}
