import React, { Fragment } from "react";
import { Button } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useAppSelector, useAppDispatch } from "../../../store/store.hooks";
import {
  selectSurveyActiveStep,
  selectSurveyContent,
  selectSurveyMeta,
  nextSurveyStep,
  prevSurveyStep,
  submitSurvey,
} from "../../../store/survey";
import {
  ISurveyContent,
  ISurveyMeta,
} from "../../../store/survey/survey.state";

const YSurveyNavigation = (): JSX.Element => {
  const dispatch = useAppDispatch();

  /**
   * Assign name and email via selectSurveyActiveStep Selector
   *
   * @constant {number} activeStep
   */
  const activeStep: number = useAppSelector(selectSurveyActiveStep);

  /**
   * Assign isValid via selectSurveyMeta Selector
   *
   * @constant {boolean} isValid
   */
  const { isValid }: ISurveyMeta = useAppSelector(selectSurveyMeta);

  /**
   * Assign name and email via selectSurveyContent Selector
   *
   * @constant {Array<string>} steps
   */
  const { steps }: ISurveyContent = useAppSelector(selectSurveyContent);

  /**
   * @function handleNext
   */
  const handleNext = () => dispatch(nextSurveyStep());

  /**
   * @function handlePrev
   */
  const handlePrev = () => dispatch(prevSurveyStep());

  /**
   * @function handleSubmit
   */
  const handleSubmit = () => dispatch(submitSurvey());

  /**
   * @constant {boolean} isFirst
   */
  const isFirst: boolean = activeStep === 0;

  /**
   * @constant {boolean} isLast
   */
  const isLast: boolean = activeStep === steps.length - 1;

  return (
    <Fragment>
      <Button
        disabled={isFirst}
        variant="contained"
        onClick={handlePrev}
        sx={{ mr: 0.5 }}
        startIcon={<ArrowBack />}
      >
        Previous
      </Button>
      {!isLast && (
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{ mr: 0.5 }}
          endIcon={<ArrowForward />}
        >
          Next
        </Button>
      )}
      {isLast && (
        <Button
          disabled={!isValid}
          color="secondary"
          variant="contained"
          onClick={handleSubmit}
          sx={{ mr: 0.5 }}
          endIcon={<ArrowForward />}
        >
          Submit
        </Button>
      )}
    </Fragment>
  );
};

export default YSurveyNavigation;
