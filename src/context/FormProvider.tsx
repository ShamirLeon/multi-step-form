import { useState } from "react";
import { FormContext } from "./FormContext";

import { IPlan, IStep, IStepsData, IAddOn } from "../interfaces/interfaces";

import data from "../data/steps.json";

export default function FormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const steps: IStep[] = [...data.steps];
  const plans: IPlan[] = [...data.plans];
  const addOns: IAddOn[] = [...data.addOns];
  const [currentStep, setCurrentStep] = useState<IStep>(steps[0]);
  const [subscriptionType, setSubscriptionType] = useState<
    "monthly" | "yearly"
  >("monthly");
  const [errorForm, setErrorForm] = useState(true);
  const [stepsData, setStepsData] = useState<IStepsData>({
    Step1: {
      name: "",
      email: "",
      phone: "",
    },
    Step2: {
      plan: { id: 0, name: "", icon: "", price: { monthly: 0, yearly: 0 } },
      subscriptionType: "monthly",
    },
    Step3: {
      addOns: [],
    },
  });

  const nextStep = () => {
    setCurrentStep(
      steps[steps.findIndex(({ id }) => id === currentStep.id) + 1],
    );
  };

  const handleStepData = (step: string, data: unknown) => {
    setStepsData((prev) => ({
      ...prev,
      [step]: data,
    }));
  };

  return (
    <FormContext.Provider
      value={{
        /* States */
        steps,
        plans,
        addOns,
        currentStep,
        subscriptionType,
        errorForm,
        stepsData,
        /* Set States */
        setCurrentStep,
        setSubscriptionType,
        setErrorForm,
        /* Functions */
        nextStep,
        handleStepData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}