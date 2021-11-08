import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ValidationResult } from "joi";
import { SURVEY_NAMESPACE, AppState } from "../store.state";
import {
  initialState,
  ISurveyState,
  ISurveyContent,
  ISurveyDataIdentity,
  ISurveyDataDetails,
  ISurveyDataFavorites,
  ISurveyData,
  ISurveyMeta,
} from "./survey.state";
import {
  surveyIdentitySchema,
  surveyFavoritesSchema,
  surveySchema,
} from "./survey.schema";
import { transformObjectToArray } from "./survey.utils";

/**
 * selectSurvey Selector
 *
 * @function selectSurvey
 * @param { AppState } state
 * @returns ISurveyState
 */
export const selectSurvey = (state: AppState): ISurveyState =>
  state[SURVEY_NAMESPACE];

/**
 * selectSurveyData Selector
 *
 * @function selectSurveyData
 * @param { AppState } state
 * @returns ISurveyData
 */
export const selectSurveyData = (state: AppState): ISurveyData =>
  state[SURVEY_NAMESPACE].data;

/**
 * selectSurveyMeta Selector
 *
 * @function selectSurveyMeta
 * @param { AppState } state
 * @returns ISurveyMeta
 */
export const selectSurveyMeta = (state: AppState): ISurveyMeta =>
  state[SURVEY_NAMESPACE].meta;

/**
 * selectSurveyContent Selector
 *
 * @function selectSurveyContent
 * @param { AppState } state
 * @returns ISurveyContent
 */
export const selectSurveyContent = (state: AppState): ISurveyContent =>
  state[SURVEY_NAMESPACE].content;

/**
 * selectSurveyActiveStep Selector
 *
 * @function selectSurveyActiveStep
 * @param { AppState } state
 * @returns { number }
 */
export const selectSurveyActiveStep = (state: AppState): number =>
  state[SURVEY_NAMESPACE].meta.activeStep;

/**
 * selectSurveyIdentity Selector
 *
 * @function selectSurveyIdentity
 * @param { AppState } state
 * @returns { ISurveyDataIdentity }
 */
export const selectSurveyIdentity = (state: AppState): ISurveyDataIdentity =>
  state[SURVEY_NAMESPACE].data.identity;

/**
 * selectSurveyDetails Selector
 *
 * @function selectSurveyDetails
 * @param { AppState } state
 * @returns { ISurveyDataDetails }
 */
export const selectSurveyDetails = (state: AppState): ISurveyDataDetails =>
  state[SURVEY_NAMESPACE].data.details;

/**
 * selectSurveyFavorites Selector
 *
 * @function selectSurveyFavorites
 * @param { AppState } state
 * @returns { ISurveyDataFavorites }
 */
export const selectSurveyFavorites = (state: AppState): ISurveyDataFavorites =>
  state[SURVEY_NAMESPACE].data.favorites;

/**
 * Reducer Updates are done via Immer as to safeguard immutability
 * https://github.com/immerjs/immer
 *
 * @constant { Slice } surveySlice
 */
export const surveySlice = createSlice({
  name: SURVEY_NAMESPACE,
  initialState,
  reducers: {
    updateSurveyIdentity: (
      state: ISurveyState,
      action: PayloadAction<ISurveyDataIdentity>
    ) => {
      // Update Store
      state.data.identity = action.payload;
      // Data Validation and Set Errors
      const { error }: ValidationResult = surveyIdentitySchema.validate(
        action.payload
      );
      state.meta.errors.identity = error ? true : false; // eslint-disable-line no-unneeded-ternary
    },
    updateSurveyDetails: (
      state: ISurveyState,
      action: PayloadAction<ISurveyDataDetails>
    ) => {
      state.data.details = action.payload;
    },
    updateSurveyFavorites: (
      state: ISurveyState,
      action: PayloadAction<ISurveyDataFavorites>
    ) => {
      // Update Store
      state.data.favorites = action.payload;

      // Data Validation and Set Errors
      const { book, colors }: ISurveyDataFavorites = action.payload;
      const colorsArray = transformObjectToArray(colors);
      const { error }: ValidationResult = surveyFavoritesSchema.validate({
        book,
        colors: colorsArray,
      });
      state.meta.errors.favorites = error ? true : false; // eslint-disable-line no-unneeded-ternary
    },
    nextSurveyStep: (state: ISurveyState) => {
      state.meta.activeStep += 1;
    },
    prevSurveyStep: (state: ISurveyState) => {
      state.meta.activeStep -= 1;
    },
    validateSurvey: (state: ISurveyState) => {
      const { identity, details, favorites } = state.data;
      const colorsArray = transformObjectToArray(favorites.colors);
      const { error }: ValidationResult = surveySchema.validate({
        identity,
        details,
        favorites: {
          book: favorites.book,
          colors: colorsArray,
        },
      });
      state.meta.isValid = error ? false : true; // eslint-disable-line no-unneeded-ternary
    },
    submitSurvey: (state: ISurveyState) => {
      state.meta.isSubmitted = true;
    },
  },
});
