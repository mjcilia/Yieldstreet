import React from "react";
import { Grid } from "@mui/material";
import {
  YSurveySidebar,
  YSurveyStep1,
  YSurveyStep2,
  YSurveyStep3,
  YSurveyStep4,
  YSurveyNavigation,
} from "../molecules";
import YSurveyWizard from "../molecules/survey-wizard";
import { ColumnWrapper } from "./survey.style";

const YSurvey = (): JSX.Element => {
  return (
    <Grid container spacing={0} sx={{ height: "100%", overflowY: "auto" }}>
      <Grid item sx={{ p: 4 }} md={4} sm={4} xs={12}>
        <YSurveySidebar />
        <YSurveyNavigation />
      </Grid>
      <Grid item md={8} sm={8} xs={12}>
        <ColumnWrapper className="alternate">
          <YSurveyWizard>
            <YSurveyStep1 />
            <YSurveyStep2 />
            <YSurveyStep3 />
            <YSurveyStep4 />
          </YSurveyWizard>
        </ColumnWrapper>
      </Grid>
    </Grid>
  );
};

export default YSurvey;
