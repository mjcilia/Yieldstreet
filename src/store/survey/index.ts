import { surveySlice } from "./survey.slice";

// Todo Actions
export const {
  updateSurveyIdentity,
  updateSurveyDetails,
  updateSurveyFavorites,
  nextSurveyStep,
  prevSurveyStep,
  validateSurvey,
  submitSurvey,
} = surveySlice.actions;

// Todo Selectors
export {
  selectSurvey,
  selectSurveyData,
  selectSurveyMeta,
  selectSurveyContent,
  selectSurveyActiveStep,
  selectSurveyDetails,
  selectSurveyIdentity,
  selectSurveyFavorites,
} from "./survey.slice";

// Todo Reducer
export default surveySlice.reducer;
