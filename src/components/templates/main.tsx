import React from "react";
import { Box, Modal, Fade } from "@mui/material";
import { YSurvey } from "../ui";
import { ModalWrapper } from "./main.style";

const MainTemplate = (): JSX.Element => {
  return (
    <Box>
      <Modal open>
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
