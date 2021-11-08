import React, { useState, useEffect, Fragment } from "react";
import { Box, Modal, Fade, Typography } from "@mui/material";
import { YSurvey } from "../ui";
import { ModalWrapper } from "./main.style";
import { useAppSelector } from "../../store/store.hooks";
import { selectSurveyMeta } from "../../store/survey";
import { ISurveyMeta } from "../../store/survey/survey.state";

const MainTemplate = (): JSX.Element => {
  const [surveyOpen, setSurveyOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setSurveyOpen(true), 1500);
  }, []);

  /**
   * Assign isSubmitted via selectSurveyMeta Selector
   *
   * @constant {boolean} isSubmitted
   */
  const { isSubmitted }: ISurveyMeta = useAppSelector(selectSurveyMeta);

  /**
   * Renders Main Modal
   *
   * @function renderModal
   * @returns {JSX.Element}
   */
  const renderModal = (): JSX.Element => {
    return (
      <Box>
        {!isSubmitted && (
          <Modal open={surveyOpen}>
            <Fade in>
              <ModalWrapper>
                <YSurvey />
              </ModalWrapper>
            </Fade>
          </Modal>
        )}
      </Box>
    );
  };

  return (
    <Fragment>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography paragraph variant="body1">
          {isSubmitted
            ? "Form Already Submitted"
            : "Modal Opening in 2 Seconds"}
        </Typography>
      </Box>
      {renderModal()}
    </Fragment>
  );
};

export default MainTemplate;
