import { useContext } from "react";
import { FormContext } from "../context/FormContext";

/* Components Imports */
import Form from "./Form";
import Plans from "./Plans";

export default function StepCard() {
  const { currentStep, setCurrentStep, steps, errorForm, nextStep } =
    useContext(FormContext);

  const nextStepBtn = () => {
    console.log(errorForm);
    if (currentStep.id == 1 && errorForm) {
      return;
    } else {
      console.log("nextStep");
      nextStep();
    }
  };

  const goBack = () => {
    const indexPreviousStep =
      steps.findIndex(({ id }) => id == currentStep.id) - 1;
    setCurrentStep(steps[indexPreviousStep]);
  };

  return (
    <div className="px-4">
      <div className="relative z-10 rounded-md bg-white p-8">
        <h2 className="mb-3 text-3xl font-bold text-marineBlue">
          {currentStep.label}
        </h2>
        <p className="mb-3 text-lg text-coolGray">{currentStep.description}</p>
        {currentStep.id == 1 && <Form />}
        {currentStep.id == 2 && <Plans />}
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-white p-4">
        {steps.findIndex(({ id }) => id == currentStep.id) != 0 && (
          <button
            className="py-3 text-coolGray transition-all hover:text-purplishBlue"
            onClick={() => goBack()}
          >
            Go back
          </button>
        )}
        <button
          className="float-right rounded-md bg-marineBlue px-5 py-3 text-white"
          onClick={nextStepBtn}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
