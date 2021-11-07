import React from "react";
import {
  Box,
  Grid,
  TextField,
  Checkbox,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../store/store.hooks";
import {
  selectStepFavorites,
  updateStepFavorites,
} from "../../../store/survey";
import { ISurveyDataFavorites } from "../../../store/survey/survey.state";

const YSurveyStep3 = (): JSX.Element => {
  const dispatch = useAppDispatch();

  /**
   * Assign name and email via selectStepFavorites Selector
   *
   * @constant {ISurveyDataFavorites} book
   * @constant {ISurveyDataFavorites} colors
   */
  const { book, colors }: ISurveyDataFavorites =
    useAppSelector(selectStepFavorites);

  /**
   * Handles Input Changes and Updates State
   * via useAppDispatch
   *
   * @function handleChange
   * @param e {React.ChangeEvent<HTMLInputElement>}
   * @returns {void}
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    const data = { book, colors, ...{ [id]: value } };
    dispatch(updateStepFavorites(data));
  };

  /**
   * Handles Checkbox Changes and Updates State
   * via useAppDispatch
   *
   * @function handleCheckboxChange
   * @param e {React.ChangeEvent<HTMLInputElement>}
   * @returns {void}
   */
  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name } = e.target;
    const colorSelection = { ...colors, ...{ [name]: !(colors as any)[name] } };
    const data = { book, colors: colorSelection };
    dispatch(updateStepFavorites(data));
  };

  /**
   * Renders Multi Input Checkbox
   *
   * @function renderSelect
   * @returns {JSX.Element}
   */
  const renderMultiInputChecbox = (): JSX.Element => {
    return (
      <FormControl required>
        <FormLabel>Favorite Color</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={colors.red}
                onChange={handleCheckboxChange}
                name="red"
              />
            }
            label="Red"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={colors.green}
                onChange={handleCheckboxChange}
                name="green"
              />
            }
            label="Green"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={colors.blue}
                onChange={handleCheckboxChange}
                name="blue"
              />
            }
            label="Blue"
          />
        </FormGroup>
      </FormControl>
    );
  };

  return (
    <Box component="form">
      <Grid container spacing={0} sx={{ height: "100%" }}>
        <Grid item sx={{ mt: 2 }} sm={12}>
          <TextField
            required
            id="book"
            label="Favorite Book"
            value={book}
            placeholder="Your Favorite Book Here"
            variant="filled"
            sx={{ width: "60%" }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sx={{ mt: 2 }} sm={12}>
          {renderMultiInputChecbox()}
        </Grid>
      </Grid>
    </Box>
  );
};

export default YSurveyStep3;
