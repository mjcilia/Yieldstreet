import React, { useState, useEffect } from "react";
import { Modal, Fade } from "@mui/material";
import { YSurvey } from "../ui";
import { ModalWrapper } from "./main.style";

const MainTemplate = (): JSX.Element => {
  const [surveyOpen, setSurveyOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setSurveyOpen(true), 1500);
  }, []);

  return (
    <Modal open={surveyOpen}>
      <Fade in>
        <ModalWrapper>
          <YSurvey />
        </ModalWrapper>
      </Fade>
    </Modal>
  );
};

export default MainTemplate;
