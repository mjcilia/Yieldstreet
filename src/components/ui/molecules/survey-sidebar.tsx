import React from "react";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../../store/store.hooks";
import {
  selectSurveyContent,
  selectSurveyActiveStep,
} from "../../../store/survey";
import { ISurveyContent } from "../../../store/survey/survey.state";
import { YSurveyLogo } from "../atoms";

const YSurveySidebar = (): JSX.Element => {
  /**
   * Assign name and email via selectSurveyActiveStep Selector
   *
   * @constant {number} activeStep
   */
  const activeStep: number = useAppSelector(selectSurveyActiveStep);

  /**
   * Assign name and email via selectSurveyContent Selector
   *
   * @constant sidebar
   * @constant {Array<string>} steps
   */
  const { sidebar, steps }: ISurveyContent =
    useAppSelector(selectSurveyContent);

  /**
   * @constant { number } totalSteps
   */
  const totalSteps: number = steps.length;

  return (
    <Box>
      <YSurveyLogo />
      <Typography paragraph variant="body1" sx={{ my: 3 }}>
        Step {activeStep + 1} of {totalSteps}
      </Typography>
      <Typography paragraph variant="h4">
        {sidebar.heading}
      </Typography>
      <Typography paragraph variant="body2">
        {sidebar.subHeading}
      </Typography>
    </Box>
  );
};

export default YSurveySidebar;
