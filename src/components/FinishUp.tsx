import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import useFormatPrice from "../hooks/useFormatPrice";

export default function FinishUp() {
  const { stepsData, subscriptionType, steps, setCurrentStep } =
    useContext(FormContext);
  const { formatPrice, totalPrice } = useFormatPrice();

  const capitalizeFirstLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const changePlan = () => {
    const planStep = steps.find((step) => step.id === stepsData.Step2.id);
    if (planStep) {
      setCurrentStep(planStep);
    }
  };

  return (
    <div className="">
      <section>
        <div className="rounded-md bg-pastelBlue bg-opacity-30 p-4">
          <div className="flex items-center justify-between border-b-[1px] border-b-coolGray pb-2">
            <div>
              <h2 className="font-bold text-marineBlue">
                {stepsData.Step2.plan.name} (
                {capitalizeFirstLetter(stepsData.Step2.subscriptionType)})
              </h2>
              <button className="text-coolGray underline" onClick={changePlan}>
                Change
              </button>
            </div>
            <span className="font-bold">
              {formatPrice(stepsData.Step2.plan.price[subscriptionType])}
            </span>
          </div>
          <div>
            {stepsData.Step3.addOns.map((addOn) => (
              <div
                key={addOn.id}
                className="mt-2 flex items-center justify-between gap-4"
              >
                <span className="text-coolGray">{addOn.name}</span>
                <span>+{formatPrice(addOn.price[subscriptionType])}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between px-4 py-6">
          <span className="text-coolGray">
            Total (per {subscriptionType == "monthly" ? "month" : "year"})
          </span>
          <span className="text-lg font-bold text-purplishBlue">
            {" "}
            {totalPrice(
              stepsData.Step2.plan.price[subscriptionType],
              stepsData.Step3.addOns,
            )}{" "}
          </span>
        </div>
      </section>
      <section></section>
    </div>
  );
}
