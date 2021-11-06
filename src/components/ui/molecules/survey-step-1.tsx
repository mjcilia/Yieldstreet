import React, { useState } from "react";
import { Box, Grid, TextField } from "@mui/material";

export type YSurveyStep1Props = {
  onDataChange: Function;
};

export interface ISurveyStep {
  name: string;
  email: string;
}

const defaults: ISurveyStep = {
  name: "",
  email: "youremail@gmail.com",
};

const YSurveyStep1 = ({ onDataChange }: YSurveyStep1Props): JSX.Element => {
  const [surveyData, setSurveyData] = useState(defaults);

  /**
   * Handles Input Changes and Calls Parent Callback
   *
   * @function handleChange
   * @param e {React.ChangeEvent<HTMLInputElement>}
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setSurveyData({
      ...surveyData,
      [id]: value,
    });
    onDataChange(surveyData);
  };

  return (
    <Box component="form">
      <Grid container spacing={0} sx={{ height: "100%" }}>
        <Grid item sx={{ mt: 2 }} sm={12}>
          <TextField
            id="name"
            label="First Name"
            placeholder="Your Name Here"
            variant="filled"
            sx={{ width: "60%" }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sx={{ mt: 2 }} sm={12}>
          <TextField
            id="email"
            label="Email"
            type="email"
            placeholder="Your Email Here"
            variant="filled"
            sx={{ width: "60%" }}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default YSurveyStep1;
