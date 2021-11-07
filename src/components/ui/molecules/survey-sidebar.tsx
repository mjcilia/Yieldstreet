import React from "react";
import { Box, Typography } from "@mui/material";
import { YSurveyLogo } from "../atoms";

export type YSurveySidebarProps = {
  activeStep: number;
  steps: Array<string>;
  content: {
    heading: string;
    subHeading: string;
  };
};

const YSurveySidebar = ({
  activeStep,
  steps,
  content,
}: YSurveySidebarProps): JSX.Element => {
  /**
   * @constant {string} heading
   * @constant {string} subHeading
   */
  const { heading, subHeading } = content;

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
        {heading}
      </Typography>
      <Typography paragraph variant="body2">
        {subHeading}
      </Typography>
    </Box>
  );
};

export default YSurveySidebar;
