import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import useFormatPrice from "../hooks/useFormatPrice";

import { IPlan } from "../interfaces/interfaces";

export default function Plans() {
  const [planSelected, setPlanSelected] = useState<IPlan | null>(null);
  const { formatPrice } = useFormatPrice();
  const {
    plans,
    subscriptionType,
    setSubscriptionType,
    stepsData,
    handleStepData,
    error,
  } = useContext(FormContext);

  const switchSubscriptionType = () => {
    setSubscriptionType(subscriptionType === "monthly" ? "yearly" : "monthly");
    handleStepData("Step2", {
      plan: planSelected || {},
      subscriptionType: subscriptionType === "monthly" ? "yearly" : "monthly",
    });
  };

  const handleSelectPlan = (plan: IPlan) => {
    setPlanSelected(plan);
    handleStepData("Step2", { id: 2, plan, subscriptionType });
  };

  return (
    <div>
      <section className="lg:mb-4 lg:flex lg:w-full lg:justify-between lg:gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`mb-4 flex items-center gap-4 rounded-md border border-lightGray p-4 ${planSelected?.id == plan.id || stepsData.Step2.plan.id == plan.id ? "border-purplishBlue bg-purplishBlue bg-opacity-10" : ""} cursor-pointer transition-all hover:border-purplishBlue hover:shadow-custom-shadow lg:flex-1 lg:flex-col lg:items-start lg:gap-6 short:gap-2 short:py-3`}
            onClick={() => handleSelectPlan(plan)}
          >
            <img src={`./images/icon-${plan.icon}.svg`} alt="" />
            <div>
              <h3 className="text-lg font-bold text-marineBlue">{plan.name}</h3>
              <span className="text-coolGray">
                {formatPrice(plan.price[subscriptionType])}
              </span>
            </div>
          </div>
        ))}
      </section>
      <div className="flex justify-center gap-4 rounded-md bg-purplishBlue bg-opacity-10 py-4">
        <span
          className={`${subscriptionType == "monthly" ? "text-marineBlue" : "text-coolGray"} transition-colors`}
        >
          Monthly
        </span>
        <div
          className={`relative basis-12 rounded-full bg-marineBlue px-1`}
          onClick={switchSubscriptionType}
        >
          <div
            className={`my-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 ${subscriptionType == "yearly" ? "translate-x-6" : "translate-x-0"}`}
          ></div>
        </div>
        <span
          className={`${subscriptionType == "yearly" ? "text-marineBlue" : "text-coolGray"} transition-colors`}
        >
          Yearly
        </span>
      </div>
      {error.step_id === 2 && (
        <span className="mt-4 block text-sm text-strawberryRed">
          {error.message}
        </span>
      )}
    </div>
  );
}
