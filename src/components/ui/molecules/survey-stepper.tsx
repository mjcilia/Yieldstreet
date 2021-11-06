import React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";

export type YSurveyStepperProps = {
  activeStep: number;
  steps: Array<string>;
};

const YSurveyStepper = ({
  activeStep,
  steps,
}: YSurveyStepperProps): JSX.Element => {
  return (
    <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
      {steps.map((step): JSX.Element => {
        return (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default YSurveyStepper;
