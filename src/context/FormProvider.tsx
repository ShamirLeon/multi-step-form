import { useCallback, useEffect, useState } from "react";
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
  const [error, setError] = useState({ step_id: 0, message: "" });
  const [errorForm, setErrorForm] = useState(true);
  const [stepsData, setStepsData] = useState<IStepsData>({
    Step1: {
      id: 1,
      name: "",
      email: "",
      phone: "",
    },
    Step2: {
      id: 2,
      plan: { id: 0, name: "", icon: "", price: { monthly: 0, yearly: 0 } },
      subscriptionType: "monthly",
    },
    Step3: {
      id: 3,
      addOns: [],
    },
    Step4: {
      id: 4,
    },
  });
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {}, [stepsData.Step3]);

  const nextStep = () => {
    setCurrentStep(
      steps[steps.findIndex(({ id }) => id === currentStep.id) + 1],
    );
  };

  const handleStepData = useCallback(
    (step: string, data: unknown) => {
      setStepsData((prev) => ({
        ...prev,
        [step]: data,
      }));
    },
    [setStepsData],
  );

  return (
    <FormContext.Provider
      value={{
        /* States */
        steps,
        plans,
        addOns,
        currentStep,
        subscriptionType,
        error,
        errorForm,
        stepsData,
        isConfirmed,
        /* Set States */
        setCurrentStep,
        setSubscriptionType,
        setErrorForm,
        setIsConfirmed,
        setError,
        /* Functions */
        nextStep,
        handleStepData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
