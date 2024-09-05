import { useContext, useEffect, useState } from "react";
import { FormContext } from "../context/FormContext";
import useFormatPrice from "../hooks/useFormatPrice";

import { IAddOn } from "../interfaces/interfaces";

export default function AddOns() {
  const { addOns, stepsData, handleStepData, subscriptionType } =
    useContext(FormContext);
  const [selectedAddOns, setSelectedAddOns] = useState<IAddOn[]>([
    ...stepsData.Step3.addOns,
  ]);
  const { formatPrice } = useFormatPrice();

  const handleSelectAddOn =
    (id: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        setSelectedAddOns((prevSelectedAddOns) => [
          ...prevSelectedAddOns,
          addOns.find((addOn) => addOn.id === id)!,
        ]);
      } else {
        setSelectedAddOns((prevSelectedAddOns) =>
          prevSelectedAddOns.filter((addOn: IAddOn) => addOn.id !== id),
        );
      }
    };
    const handleDivClick = (id: number) => {
      setSelectedAddOns((prevSelectedAddOns) => {
        const isAlreadySelected = prevSelectedAddOns.some(
          (addOn) => addOn.id === id
        );
        if (isAlreadySelected) {
          return prevSelectedAddOns.filter((addOn) => addOn.id !== id);
        } else {
          return [...prevSelectedAddOns, addOns.find((addOn) => addOn.id === id)!];
        }
      });
    };

  useEffect(() => {
    handleStepData("Step3", { addOns: selectedAddOns });
  }, [selectedAddOns, handleStepData]);

  const isAddOnSelected = (id: number) => {
    return (
      selectedAddOns.some((addOn) => addOn.id === id) ||
      stepsData.Step3.addOns.some((addOn: IAddOn) => addOn.id === id)
    );
  };

  return (
    <div>
      {addOns.map((addOn) => (
        <div
          key={addOn.id}
          className={`mb-2 lg:mb-6 grid grid-cols-[.1fr,1fr,.3fr] items-center gap-4 rounded-md border border-lightGray p-3 ${isAddOnSelected(addOn.id) ? "border-purplishBlue bg-purplishBlue bg-opacity-10" : ""} hover:shadow-custom-shadow cursor-pointer hover:border-purplishBlue transition-all`}
          onClick={() => handleDivClick(addOn.id)}
        >
          <input
            type="checkbox"
            className="checkbox w-7"
            checked={isAddOnSelected(addOn.id)}
            onChange={handleSelectAddOn(addOn.id)}
          />
          <div>
            <h3 className="font-bold text-marineBlue">{addOn.name}</h3>
            <span className="text-sm leading-[-10px] text-coolGray">
              {addOn.description}
            </span>
          </div>
          <span className="text-sm text-purplishBlue">
            +{formatPrice(addOn.price[subscriptionType])}
          </span>
        </div>
      ))}
    </div>
  );
}
