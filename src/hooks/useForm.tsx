import { useState, useEffect, useContext } from "react";
import { FormContext } from "../context/FormContext";

interface IFormProps {
  name: string;
  email: string;
  phone: string;
}

const useForm = (initialValues: IFormProps) => {
  const { setErrorForm, handleStepData } = useContext(FormContext);
  const [formData, setFormData] = useState(initialValues);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    form: "",
  });

  const validateName = (name: string) => {
    if (name.length < 2 || name.length > 50) {
      return "Name must be between 2 and 50 characters.";
    }
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    return !nameRegex.test(name)
      ? "Name can only contain letters and spaces."
      : "";
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !email.length
      ? "This field is required"
      : emailRegex.test(email)
        ? ""
        : "Invalid email address";
  };

  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^\+\d{1,3}\s\d{7,14}$/;
    return phoneRegex.test(number)
      ? ""
      : "Invalid phone number. Example: +57 123456789";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    mapErrors(name, value);
    handleStepData("Step1", formData);
  };

  const mapErrors = (name: string, value: string) => {
    setTimeout(() => {
      let error = "";
      if (name === "email") {
        error = validateEmail(value);
      } else if (name === "phone") {
        error = validatePhoneNumber(value);
      } else if (name === "name") {
        error = validateName(value);
      }
      setErrorForm(Boolean(error));
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    }, 1000);
  };

  useEffect(() => {
    if (!hasTruthtValue(formData)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        form: "Please fill in all the fields",
      }));
      setErrorForm(true);
    }
  }, [formData, setErrorForm]);

  const hasTruthtValue = (obj: object) => {
    return Object.values(obj).some((value) => Boolean(value));
  };

  return {
    formData,
    errors,
    handleChange,
  };
};

export default useForm;
