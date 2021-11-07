import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SURVEY_NAMESPACE, AppState } from "../store.state";
import {
  initialState,
  ISurveyState,
  ISurveyContent,
  ISurveyDataIdentity,
  ISurveyDataDetails,
  ISurveyDataFavorites,
  ISurveyData,
} from "./survey.state";

/**
 * selectSurvey Selector
 *
 * @function selectSurvey
 * @param { AppState } state
 * @returns ISurveyState
 */
export const selectSurvey = (state: AppState): ISurveyState =>
  state[SURVEY_NAMESPACE];

export const selectSurveyData = (state: AppState): ISurveyData =>
  state[SURVEY_NAMESPACE].data;

/**
 * selectContent Selector
 *
 * @function selectContent
 * @param { AppState } state
 * @returns ISurveyContent
 */
export const selectContent = (state: AppState): ISurveyContent =>
  state[SURVEY_NAMESPACE].content;

/**
 * selectActiveStep Selector
 *
 * @function selectActiveStep
 * @param { AppState } state
 * @returns { number }
 */
export const selectActiveStep = (state: AppState): number =>
  state[SURVEY_NAMESPACE].meta.activeStep;

/**
 * selectStepIdentity Selector
 *
 * @function selectStepIdentity
 * @param { AppState } state
 * @returns { ISurveyDataIdentity }
 */
export const selectStepIdentity = (state: AppState): ISurveyDataIdentity =>
  state[SURVEY_NAMESPACE].data.identity;

/**
 * selectStepDetails Selector
 *
 * @function selectStepDetails
 * @param { AppState } state
 * @returns { ISurveyDataDetails }
 */
export const selectStepDetails = (state: AppState): ISurveyDataDetails =>
  state[SURVEY_NAMESPACE].data.details;

/**
 * selectStepFavorites Selector
 *
 * @function selectStepFavorites
 * @param { AppState } state
 * @returns { ISurveyDataFavorites }
 */
export const selectStepFavorites = (state: AppState): ISurveyDataFavorites =>
  state[SURVEY_NAMESPACE].data.favorites;

/**
 * @constant { Slice } surveySlice
 */
export const surveySlice = createSlice({
  name: SURVEY_NAMESPACE,
  initialState,
  reducers: {
    updateStepIdentity: (
      state: ISurveyState,
      action: PayloadAction<ISurveyDataIdentity>
    ) => {
      state.data.identity = action.payload;
    },
    updateStepDetails: (
      state: ISurveyState,
      action: PayloadAction<ISurveyDataDetails>
    ) => {
      state.data.details = action.payload;
    },
    updateStepFavorites: (
      state: ISurveyState,
      action: PayloadAction<ISurveyDataFavorites>
    ) => {
      state.data.favorites = action.payload;
    },
    nextStep: (state: ISurveyState) => {
      state.meta.activeStep += 1;
    },
    prevStep: (state: ISurveyState) => {
      state.meta.activeStep -= 1;
    },
  },
});
