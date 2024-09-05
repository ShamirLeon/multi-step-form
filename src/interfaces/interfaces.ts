export interface IContext {
  steps: IStep[];
  plans: IPlan[];
  addOns: IAddOn[];
  error: {
    step_id: number;
    message: string;
  };
  setError: (value: { step_id: number, message: string } ) => void;
  currentStep: IStep;
  setCurrentStep: (value: IStep) => void;
  errorForm: boolean;
  setErrorForm: (value: boolean) => void;
  isConfirmed: boolean;
  setIsConfirmed: (value: boolean) => void;
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
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface IStep2 {
  id: number;
  plan: IPlan;
  subscriptionType: "monthly" | "yearly";
}

export interface IStep3 {
  id: number;
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
  Step4: {
    id: number;
  };
}
