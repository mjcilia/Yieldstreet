import React from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Checkbox,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../store/store.hooks";
import {
  selectSurveyFavorites,
  selectSurveyMeta,
  updateSurveyFavorites,
} from "../../../store/survey";
import {
  ISurveyDataFavorites,
  ISurveyMeta,
} from "../../../store/survey/survey.state";

const YSurveyStep3 = (): JSX.Element => {
  const dispatch = useAppDispatch();

  /**
   * Assign name and email via selectSurveyFavorites Selector
   *
   * @constant {ISurveyDataFavorites} book
   * @constant {ISurveyDataFavorites} colors
   */
  const { book, colors }: ISurveyDataFavorites = useAppSelector(
    selectSurveyFavorites
  );

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
   * @returns {void}
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    const data = { book, colors, ...{ [id]: value } };
    dispatch(updateSurveyFavorites(data));
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
    dispatch(updateSurveyFavorites(data));
  };

  /**
   * Renders renderTextField
   *
   * @function renderInput
   * @returns {JSX.Element}
   */
  const renderTextField = (): JSX.Element => {
    return (
      <TextField
        required
        error={errors.favorites}
        id="book"
        label="Favorite Book"
        value={book}
        placeholder="Your Favorite Book Here"
        variant="filled"
        sx={{ width: "100%" }}
        onChange={handleChange}
      />
    );
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
        <FormLabel>Favorite Colors</FormLabel>
        <FormGroup row>
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
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid item lg={6} md={12} sm={12}>
          {renderTextField()}
        </Grid>
        <Grid item lg={6} md={12} sm={12}>
          {renderMultiInputChecbox()}
        </Grid>
        <Grid item sm={12}>
          {errors.favorites && (
            <Typography paragraph variant="body1" sx={{ color: "#d32f2f" }}>
              Favorite Book and Favorite Colors are both required.
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default YSurveyStep3;
