import { createContext } from "react";
import { IContext } from "../interfaces/interfaces";

const initialContext: IContext = {
  steps: [],
  plans: [],
  addOns: [],
  currentStep: { id: 0, title: "", name: "", label: "", description: "" },
  setCurrentStep: () => {},
  errorForm: true,
  error: { step_id: 0, message: "" },
  setError: () => {},
  setErrorForm: () => {},
  isConfirmed: false,
  setIsConfirmed: () => {},
  stepsData: {
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
  },
  subscriptionType: "monthly",
  setSubscriptionType: () => {},
  nextStep: () => {},
  handleStepData: () => {},
};

export const FormContext = createContext(initialContext);
