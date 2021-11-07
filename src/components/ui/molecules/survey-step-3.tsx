import React, { useState } from "react";
import Joi from "joi";
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

export interface Errors {
  book: boolean;
  colors: boolean;
}

const YSurveyStep3 = (): JSX.Element => {
  const [errors, setErrors] = useState<Errors>({
    book: false,
    colors: false,
  });

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
   * Joi Schema Object
   *
   * @constant {JoiSchema} stepSchema
   */
  const stepSchema = Joi.object({
    book: Joi.string().required(),
    colors: Joi.object({
      red: Joi.boolean().required(),
      green: Joi.boolean().required(),
      blue: Joi.boolean().required(),
    })
      .length(3)
      .required(),
  });

  const validate = () => {
    const { error } = stepSchema.validate({ book, colors });
    if (error !== undefined) {
      setErrors({ ...errors, book: true });
    } else {
      setErrors({ book: false, colors: false });
    }
  };

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
    validate();
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
    validate();
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
            error={errors.book}
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
