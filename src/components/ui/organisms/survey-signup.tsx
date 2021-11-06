import React from "react";
import Grid from "@mui/material/Grid";
import { YSurveySidebar, YSurveyStepper, YSurveyStep1 } from "../molecules";
import { ColumnWrapper } from "./survey-signup.style";
import { surveyContent, surveySteps } from "./survey-signup.constants";

const YSurveySignup = (): JSX.Element => {
  const { sidebar } = surveyContent;

  const handleSurveyDataChange = (data: any) => {
    console.log(data);
  };

  return (
    <Grid container spacing={0} sx={{ height: "100%" }}>
      <Grid item sx={{ p: 4 }} md={4} sm={4} xs={12}>
        <YSurveySidebar activeStep={1} totalSteps={3} content={sidebar} />
      </Grid>
      <Grid item md={8} sm={8} xs={12}>
        <ColumnWrapper className="alternate">
          <YSurveyStepper activeStep={1} steps={surveySteps} />
          <YSurveyStep1 onDataChange={handleSurveyDataChange} />
        </ColumnWrapper>
      </Grid>
    </Grid>
  );
};

export default YSurveySignup;
