import { useContext } from "react";

import { FormContext } from "../context/FormContext";

export default function Steps() {
  const { steps, currentStep, setCurrentStep, isConfirmed } =
    useContext(FormContext);
  const isDisabled = (stepId: number) => {
    return currentStep.id < stepId;
  };
  return (
    <div className="relative lg:h-full lg:w-[18rem] lg:overflow-hidden lg:rounded-[12px]">
      <div className="absolute top-0 z-0 h-[100%] w-full">
        <img
          src="./images/bg-sidebar-desktop.svg"
          className="hidden h-full w-full object-cover md:block"
          alt="sidebar background desktop"
        />
        <img
          src="./images/bg-sidebar-mobile.svg"
          className="block h-[200%] w-full object-cover md:hidden"
          alt="sidebar background mobile"
        />
      </div>

      <div className="relative z-10 flex justify-center gap-4 py-10 lg:h-full lg:flex-col lg:justify-start lg:gap-6 lg:p-8 short:py-5">
        {steps.map((step) => {
          return (
            <div key={step.id} className="lg:flex lg:items-center lg:gap-4">
              <button
                disabled={isDisabled(step.id) || isConfirmed}
                className={`h-9 w-9 rounded-full border border-white font-bold md:hover:border-lightBlue md:hover:bg-lightBlue md:hover:text-marineBlue ${currentStep.id == step.id ? "bg-lightBlue text-marineBlue" : "text-white"}`}
                onClick={() => setCurrentStep(step)}
              >
                {step.id}
              </button>
              <div className="hidden lg:block">
                <span className="text-sm text-coolGray">
                  {step.title.toUpperCase()}
                </span>
                <h2 className="font-bold text-white">{step.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
