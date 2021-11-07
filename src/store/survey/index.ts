import { surveySlice } from "./survey.slice";

// Todo Actions
export const {
  updateStepIdentity,
  updateStepDetails,
  updateStepFavorites,
  nextStep,
  prevStep,
} = surveySlice.actions;

// Todo Selectors
export {
  selectContent,
  selectActiveStep,
  selectStepDetails,
  selectStepIdentity,
  selectStepFavorites,
} from "./survey.slice";

// Todo Reducer
export default surveySlice.reducer;
