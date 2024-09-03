import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { IAddOn } from "../interfaces/interfaces";

export default function useFormatPrice() {
  const { subscriptionType } = useContext(FormContext);

  const formatPrice = (price: number) => {
    return `$${price}/${subscriptionType === "monthly" ? "mo" : "yr"}`;
  };

  const totalPrice = (planPrice: number, addOns: IAddOn[]) => {
    const total =
      planPrice +
      addOns.reduce((acc, addOn) => acc + addOn.price[subscriptionType], 0);
    return formatPrice(total);
  };

  return { formatPrice, totalPrice };
}
