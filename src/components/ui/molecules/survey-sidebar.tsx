import React from "react";
import { Box, Typography } from "@mui/material";
import { YLogo } from "../atoms";

export type YSurveySidebarProps = {
  activeStep: number;
  totalSteps: number;
  content: {
    heading: string;
    subHeading: string;
  };
};

const YSurveySidebar = ({
  activeStep,
  totalSteps,
  content,
}: YSurveySidebarProps): JSX.Element => {
  const { heading, subHeading } = content;

  return (
    <Box>
      <YLogo />
      <Typography paragraph variant="body1" sx={{ my: 3 }}>
        Step {activeStep} of {totalSteps}
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
