import React, { Fragment } from "react";
import {
  Box,
  Grid,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../store/store.hooks";
import {
  selectSurveyDetails,
  updateSurveyDetails,
} from "../../../store/survey";
import { ISurveyDataDetails } from "../../../store/survey/survey.state";

const YSurveyStep2 = (): JSX.Element => {
  const dispatch = useAppDispatch();

  /**
   * Assign age and gender via selectSurveyDetails Selector
   *
   * @constant {ISurveyDataDetails} age
   * @constant {ISurveyDataDetails} gender
   */
  const { age, gender }: ISurveyDataDetails =
    useAppSelector(selectSurveyDetails);

  /**
   * Handles Input Changes and Updates State
   * via useAppDispatch
   *
   * @function handleChange
   * @param e {SelectChangeEvent | React.ChangeEvent<HTMLInputElement>}
   */
  const handleChange = (
    e: SelectChangeEvent | React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    const data = { age, gender, ...{ [name]: value } };
    dispatch(updateSurveyDetails(data));
  };

  /**
   * Renders Select Input
   *
   * @function renderSelect
   * @returns {JSX.Element}
   */
  const renderSelect = (): JSX.Element => {
    return (
      <FormControl variant="filled" sx={{ width: "100%" }} required>
        <InputLabel id="age">Age</InputLabel>
        <Select name="age" labelId="age" value={age} onChange={handleChange}>
          <MenuItem value={20}>Over 20</MenuItem>
          <MenuItem value={30}>Over 30</MenuItem>
          <MenuItem value={40}>Over 40</MenuItem>
          <MenuItem value={50}>Over 50</MenuItem>
        </Select>
      </FormControl>
    );
  };

  /**
   * Renders Radio Input
   *
   * @function renderRadio
   * @returns {JSX.Element}
   */
  const renderRadio = (): JSX.Element => {
    return (
      <Fragment>
        <InputLabel id="select-age">Gender *</InputLabel>
        <RadioGroup row name="gender" value={gender} onChange={handleChange}>
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
          <FormControlLabel value="Other" control={<Radio />} label="Other" />
        </RadioGroup>
      </Fragment>
    );
  };

  return (
    <Box component="form">
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid item lg={6} md={12} sm={12}>
          {renderSelect()}
        </Grid>
        <Grid item lg={6} md={12} sm={12}>
          {renderRadio()}
        </Grid>
      </Grid>
    </Box>
  );
};

export default YSurveyStep2;
