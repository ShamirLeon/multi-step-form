import { useContext } from "react";

import { FormContext } from "../context/FormContext";

export default function Steps() {
  const { steps, currentStep, setCurrentStep } = useContext(FormContext);
  return (
    <div className="relative">
      <img
        src="./images/bg-sidebar-mobile.svg"
        className="absolute top-0 z-0 h-[200%] w-full object-cover"
      />
      <div className="relative z-10 flex justify-center gap-4 py-10">
        {steps.map((step) => {
          return (
            <div key={step.id}>
              <button
                className={`h-9 w-9 rounded-full border border-white font-bold hover:border-lightBlue hover:bg-lightBlue hover:text-marineBlue ${currentStep.id == step.id ? "bg-lightBlue text-marineBlue" : "text-white"}`}
                onClick={() => setCurrentStep(step)}
              >
                {step.id}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
