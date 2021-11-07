import React, { Fragment } from "react";
import { Button } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../store/store.hooks";
import {
  selectActiveStep,
  selectContent,
  nextStep,
  prevStep,
} from "../../../store/survey";
import { ISurveyContent } from "../../../store/survey/survey.state";

const YSurveyNavigation = (): JSX.Element => {
  const dispatch = useAppDispatch();

  /**
   * Assign name and email via selectActiveStep Selector
   *
   * @constant {number} activeStep
   */
  const activeStep: number = useAppSelector(selectActiveStep);

  /**
   * Assign name and email via selectContent Selector
   *
   * @constant {Array<string>} steps
   */
  const { steps }: ISurveyContent = useAppSelector(selectContent);

  const handleNext = (): void => {
    dispatch(nextStep());
  };

  const handlePrev = (): void => {
    dispatch(prevStep());
  };

  const isFirst: boolean = activeStep === 0;
  const isLast: boolean = activeStep === steps.length - 1;

  return (
    <Fragment>
      {!isLast && (
        <Button variant="contained" onClick={handleNext} sx={{ mr: 1 }}>
          Next
        </Button>
      )}
      {!isFirst && (
        <Button variant="contained" onClick={handlePrev}>
          Previous
        </Button>
      )}
    </Fragment>
  );
};

export default YSurveyNavigation;
