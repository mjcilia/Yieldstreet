import React from "react";
import { Box, Modal, Fade } from "@mui/material";
import { YSurveySignupContainer } from "../containers";
import { ModalWrapper } from "./main.style";

const MainTemplate = (): JSX.Element => {
  return (
    <Box>
      <Modal open>
        <Fade in>
          <ModalWrapper>
            <YSurveySignupContainer />
          </ModalWrapper>
        </Fade>
      </Modal>
    </Box>
  );
};

export default MainTemplate;
