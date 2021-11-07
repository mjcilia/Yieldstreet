import React from "react";
import { Box, Grid, TextField } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../store/store.hooks";
import { selectStepIdentity, updateStepIdentity } from "../../../store/survey";
import { ISurveyDataIdentity } from "../../../store/survey/survey.state";

const YSurveyStep1 = (): JSX.Element => {
  const dispatch = useAppDispatch();

  /**
   * Assign name and email via selectStepIdentity Selector
   *
   * @constant {ISurveyDataIdentity} name
   * @constant {ISurveyDataIdentity} email
   */
  const { name, email }: ISurveyDataIdentity =
    useAppSelector(selectStepIdentity);

  /**
   * Handles Input Changes and Updates State
   * via useAppDispatch
   *
   * @function handleChange
   * @param e {React.ChangeEvent<HTMLInputElement>}
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    const data = { name, email, ...{ [id]: value } };
    dispatch(updateStepIdentity(data));
  };

  return (
    <Box component="form">
      <Grid container spacing={0} sx={{ height: "100%" }}>
        <Grid item sx={{ mt: 2 }} sm={12}>
          <TextField
            id="name"
            label="First Name (Optional)"
            value={name}
            placeholder="Your Name Here"
            variant="filled"
            sx={{ width: "60%" }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sx={{ mt: 2 }} sm={12}>
          <TextField
            id="email"
            label="Email (Optional)"
            value={email}
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
