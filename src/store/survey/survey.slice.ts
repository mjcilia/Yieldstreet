import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SURVEY_NAMESPACE, AppState } from "../store.state";
import {
  initialState,
  ISurveyState,
  ISurveyContent,
  ISurveyDataIdentity,
  ISurveyDataDetails,
  ISurveyDataFavorites,
} from "./survey.state";

/**
 * selectContent Selector
 *
 * @param { AppState } state
 * @returns ISurveyContent
 */
export const selectContent = (state: AppState): ISurveyContent =>
  state[SURVEY_NAMESPACE].content;

/**
 * selectActiveStep Selector
 *
 * @param { AppState } state
 * @returns { number }
 */
export const selectActiveStep = (state: AppState): number =>
  state[SURVEY_NAMESPACE].meta.activeStep;

/**
 * selectStepIdentity Selector
 *
 * @param { AppState } state
 * @returns { ISurveyDataIdentity }
 */
export const selectStepIdentity = (state: AppState): ISurveyDataIdentity =>
  state[SURVEY_NAMESPACE].data.steps.identity;

/**
 * selectStepDetails Selector
 *
 * @param { AppState } state
 * @returns { ISurveyDataDetails }
 */
export const selectStepDetails = (state: AppState): ISurveyDataDetails =>
  state[SURVEY_NAMESPACE].data.steps.details;

/**
 * selectStepFavorites Selector
 *
 * @param { AppState } state
 * @returns { ISurveyDataFavorites }
 */
export const selectStepFavorites = (state: AppState): ISurveyDataFavorites =>
  state[SURVEY_NAMESPACE].data.steps.favorites;

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
      state.data.steps.identity = action.payload;
    },
    updateStepDetails: (
      state: ISurveyState,
      action: PayloadAction<ISurveyDataDetails>
    ) => {
      state.data.steps.details = action.payload;
    },
    updateStepFavorites: (
      state: ISurveyState,
      action: PayloadAction<ISurveyDataFavorites>
    ) => {
      state.data.steps.favorites = action.payload;
    },
    nextStep: (state: ISurveyState) => {
      state.meta.activeStep += 1;
    },
    prevStep: (state: ISurveyState) => {
      state.meta.activeStep -= 1;
    },
  },
});
