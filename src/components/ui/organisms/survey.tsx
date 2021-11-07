import React from "react";
import Grid from "@mui/material/Grid";
import { useAppSelector } from "../../../store/store.hooks";
import { selectContent, selectActiveStep } from "../../../store/survey";
import { ISurveyContent } from "../../../store/survey/survey.state";
import {
  YSurveySidebar,
  YSurveyStepper,
  YSurveyStep1,
  YSurveyStep2,
} from "../molecules";
import { ColumnWrapper } from "./survey.style";

const YSurvey = (): JSX.Element => {
  /**
   * Assign Content via selectContent Selector
   *
   * @constant {ISurveyContent} content
   */
  const content: ISurveyContent = useAppSelector(selectContent);
  const { sidebar, steps } = content;

  const activeStep: number = useAppSelector(selectActiveStep);

  return (
    <Grid container spacing={0} sx={{ height: "100%" }}>
      <Grid item sx={{ p: 4 }} md={4} sm={4} xs={12}>
        <YSurveySidebar
          activeStep={activeStep}
          steps={steps}
          content={sidebar}
        />
      </Grid>
      <Grid item md={8} sm={8} xs={12}>
        <ColumnWrapper className="alternate">
          <YSurveyStepper activeStep={activeStep} steps={steps} />
          {activeStep === 0 && <YSurveyStep1 />}
          {activeStep === 1 && <YSurveyStep2 />}
        </ColumnWrapper>
      </Grid>
    </Grid>
  );
};

export default YSurvey;
