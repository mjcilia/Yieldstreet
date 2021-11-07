import React, { useState, useEffect } from "react";
import { Box, Modal, Fade } from "@mui/material";
import { YSurvey } from "../ui";
import { ModalWrapper } from "./main.style";

const MainTemplate = (): JSX.Element => {
  const [surveyOpen, setSurveyOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setSurveyOpen(true), 1500);
  }, []);

  return (
    <Box>
      <Modal open={surveyOpen}>
        <Fade in>
          <ModalWrapper>
            <YSurvey />
          </ModalWrapper>
        </Fade>
      </Modal>
    </Box>
  );
};

export default MainTemplate;
