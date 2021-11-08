import React from "react";
import { Button, Stack } from "@mui/material";
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
    <Stack spacing={1} direction="row">
      <Button
        disabled={isFirst}
        variant="contained"
        onClick={handlePrev}
        sx={{ mb: 0.5 }}
        startIcon={<ArrowBack />}
      >
        Previous
      </Button>
      {!isLast && (
        <Button
          variant="contained"
          onClick={handleNext}
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
          endIcon={<ArrowForward />}
        >
          Submit
        </Button>
      )}
    </Stack>
  );
};

export default YSurveyNavigation;
