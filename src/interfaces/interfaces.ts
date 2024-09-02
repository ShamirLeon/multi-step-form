export interface IContext {
  steps: IStep[];
  plans: IPlan[];
  addOns: IAddOn[];
  currentStep: IStep;
  setCurrentStep: (value: IStep) => void;
  errorForm: boolean;
  setErrorForm: (value: boolean) => void;
  stepsData: IStepsData;
  subscriptionType: "monthly" | "yearly";
  setSubscriptionType: (value: "monthly" | "yearly") => void;
  nextStep: () => void;
  handleStepData: (step: string, data: unknown) => void;
}

export interface IStep {
  id: number;
  title: string;
  name: string;
  label: string;
  description: string;
}

export interface IStep1 {
  name: string;
  email: string;
  phone: string;
}

export interface IStep2 {
  plan: IPlan;
  subscriptionType: "monthly" | "yearly";
}

export interface IStep3 {
  addOns: IAddOn[];
}

export interface IPlan {
  id: number;
  name: string;
  icon: string;
  price: {
    monthly: number;
    yearly: number;
  };
}

export interface IAddOn {
  id: number;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
}

export interface IStepsData {
  Step1: IStep1;
  Step2: IStep2;
  Step3: IStep3;
}
