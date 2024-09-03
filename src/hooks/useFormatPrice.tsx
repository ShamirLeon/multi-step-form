import { useContext } from "react";
import { FormContext } from "../context/FormContext";

export default function useFormatPrice() {
  const { subscriptionType } = useContext(FormContext);

  const formatPrice = (price: number) => {
    return `$${price}/${subscriptionType === "monthly" ? "mo" : "yr"}`;
  };

  const formatMonthlyPrice = (price: number) => {
    return formatPrice(price);
  };

  const formatYearlyPrice = (price: number) => {
    return formatPrice(price * 12);
  };

  return { formatMonthlyPrice, formatYearlyPrice, formatPrice };
}
