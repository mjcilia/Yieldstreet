import { ISurveyState } from "./survey/survey.state";

export const SURVEY_NAMESPACE = "SURVEY";

export interface AppState {
  [SURVEY_NAMESPACE]: ISurveyState;
}
