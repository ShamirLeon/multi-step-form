import { useContext } from "react";

import { FormContext } from "../context/FormContext";

export default function Steps() {
  const { steps, currentStep, setCurrentStep, isConfirmed } =
    useContext(FormContext);
  const isDisabled = (stepId: number) => {
    return currentStep.id < stepId;
  };
  return (
    <div className="relative lg:rounded-[12px] lg:overflow-hidden lg:w-[18rem] lg:h-full">
      <div className="absolute top-0 z-0 h-[100%] w-full">
        <img
          src="./images/bg-sidebar-desktop.svg"
          className="hidden md:block w-full h-full object-cover"
          alt="sidebar background desktop"
        />
        <img
          src="./images/bg-sidebar-mobile.svg"
          className="block md:hidden object-cover w-full h-[200%]"
          alt="sidebar background mobile"
        />
      </div>

      <div className="relative z-10 flex justify-center gap-4 py-10 lg:flex-col lg:h-full lg:justify-start lg:p-8 lg:gap-6">
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
                <span className="text-coolGray text-sm">{step.title.toUpperCase()}</span>
                <h2 className="text-white font-bold">{step.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
