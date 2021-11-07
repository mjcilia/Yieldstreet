import React, { Fragment } from "react";
import { useAppSelector } from "../../../store/store.hooks";
import { selectContent, selectActiveStep } from "../../../store/survey";
import { ISurveyContent } from "../../../store/survey/survey.state";
import { YSurveyStepper } from ".";

type YSurveyWizardProps = {
  children: JSX.Element[];
};

const YSurveyWizard = ({ children }: YSurveyWizardProps): JSX.Element => {
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

  return (
    <Fragment>
      <YSurveyStepper activeStep={activeStep} steps={steps} />
      {children.map(
        (child: JSX.Element, index: number) =>
          activeStep === index && <div key={index}>{child}</div>
      )}
    </Fragment>
  );
};

export default YSurveyWizard;
