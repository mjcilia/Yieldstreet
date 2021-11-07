import React from "react";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../../store/store.hooks";
import { selectContent, selectActiveStep } from "../../../store/survey";
import { ISurveyContent } from "../../../store/survey/survey.state";
import { YSurveyLogo } from "../atoms";

const YSurveySidebar = (): JSX.Element => {
  /**
   * Assign name and email via selectActiveStep Selector
   *
   * @constant {number} activeStep
   */
  const activeStep: number = useAppSelector(selectActiveStep);

  /**
   * Assign name and email via selectContent Selector
   *
   * @constant sidebar
   * @constant {Array<string>} steps
   */
  const { sidebar, steps }: ISurveyContent = useAppSelector(selectContent);

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
