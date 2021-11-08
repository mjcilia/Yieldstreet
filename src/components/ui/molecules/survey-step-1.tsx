import React from "react";
import { Box, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useAppSelector, useAppDispatch } from "../../../store/store.hooks";
import {
  selectSurveyIdentity,
  selectSurveyMeta,
  updateSurveyIdentity,
} from "../../../store/survey";
import {
  ISurveyDataIdentity,
  ISurveyMeta,
} from "../../../store/survey/survey.state";

const YSurveyStep1 = (): JSX.Element => {
  const dispatch = useAppDispatch();

  /**
   * Assign name and email via selectSurveyIdentity Selector
   *
   * @constant {string} name
   * @constant {string} email
   */
  const { name, email }: ISurveyDataIdentity =
    useAppSelector(selectSurveyIdentity);

  /**
   * Assign errors via selectSurveyMeta
   *
   * @constant {string} errors
   */
  const { errors }: ISurveyMeta = useAppSelector(selectSurveyMeta);

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
    dispatch(updateSurveyIdentity(data));
  };

  return (
    <Box component="form">
      <Grid container spacing={0} sx={{ height: "100%" }}>
        <Grid item sm={12} sx={{ minHeight: 40 }}>
          {errors.identity && (
            <Typography paragraph variant="body1" sx={{ color: "#d32f2f" }}>
              Email Address is not valid.
            </Typography>
          )}
        </Grid>
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
            error={errors.identity}
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
