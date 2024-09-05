import { useContext } from "react";
import useForm from "../hooks/useForm";
import { FormContext } from "../context/FormContext";

const Form = () => {
  const { stepsData } = useContext(FormContext);

  const { formData, handleChange, errors } = useForm(stepsData.Step1);

  return (
    <div className="">
      <form action="">
        <div className="form-group">
          <label htmlFor="name" className="">
            <span className="form-label">Name</span>
            <span className="float-right inline-block text-strawberryRed">
              {errors.name}
            </span>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name || stepsData.Step1.name}
              placeholder="e.g Stephen King"
              className={`inputs ${errors.name ? "border-strawberryRed text-strawberryRed placeholder:text-strawberryRed" : ""}`}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="">
            <span className="form-label">Email Address</span>
            <span className="float-right inline-block text-strawberryRed">
              {errors.email}
            </span>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email || stepsData.Step1.email}
              placeholder="e.g. stephenking@lorem.com"
              className={`inputs ${errors.email ? "border-strawberryRed text-strawberryRed placeholder:text-strawberryRed" : ""}`}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="">
            <span className="form-label">Phone Number</span>
            <span className="float-right inline-block text-strawberryRed">
              {errors.phone}
            </span>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone || stepsData.Step1.phone}
              placeholder="e.g +1 234 657 890"
              className={`inputs ${errors.phone ? "border-strawberryRed text-strawberryRed placeholder:text-strawberryRed" : ""}`}
              onChange={handleChange}
            />
          </label>
        </div>

        <span className="text-sm text-strawberryRed">{errors.form}</span>
      </form>
    </div>
  );
};

export default Form;
