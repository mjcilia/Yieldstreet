import React from "react";
import { Box } from "@mui/material";
import { useAppSelector } from "../../../store/store.hooks";
import {
  selectSurveyContent,
  selectSurveyActiveStep,
} from "../../../store/survey";
import { ISurveyContent } from "../../../store/survey/survey.state";
import { YSurveyStepper } from ".";

type YSurveyWizardProps = {
  children: JSX.Element[];
};

const YSurveyWizard = ({ children }: YSurveyWizardProps): JSX.Element => {
  /**
   * Assign name and email via selectSurveyActiveStep Selector
   *
   * @constant {number} activeStep
   */
  const activeStep: number = useAppSelector(selectSurveyActiveStep);

  /**
   * Assign name and email via selectSurveyContent Selector
   *
   * @constant {Array<string>} steps
   */
  const { steps }: ISurveyContent = useAppSelector(selectSurveyContent);

  return (
    <Box>
      <Box display={{ xs: "none", sm: "none", lg: "block", xl: "block" }}>
        <YSurveyStepper activeStep={activeStep} steps={steps} />
      </Box>
      {children.map(
        (child: JSX.Element, index: number) =>
          activeStep === index && <div key={index}>{child}</div>
      )}
    </Box>
  );
};

export default YSurveyWizard;
