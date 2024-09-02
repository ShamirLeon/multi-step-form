import { createContext } from "react";
import { IContext } from "../interfaces/interfaces";

const initialContext: IContext = {
  steps: [],
  plans: [],
  addOns: [],
  currentStep: { id: 0, title: "", name: "", label: "", description: "" },
  setCurrentStep: () => {},
  errorForm: true,
  setErrorForm: () => {},
  stepsData: {
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
  },
  subscriptionType: "monthly",
  setSubscriptionType: () => {},
  nextStep: () => {},
  handleStepData: () => {},
};

export const FormContext = createContext(initialContext);