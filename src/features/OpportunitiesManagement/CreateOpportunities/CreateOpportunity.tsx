import { useState } from "react";
import './CreateOpportunity.css';
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const CreateOpportunity=()=> {
  const [data, setData] = useState({
    opportunity_name: "",
    account_name: "",
    opportunity_amount: "",
    expected_close_date:"",
    probability: "",
    next_step: "",
    campaign: "",
    assigned_to:"",
    date_created: "",
    date_modified:""
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});
  
  const makeRequest = (formData:any) => {
    console.log("Form Submitted", formData);
  };

  const handleNextStep = (newData:any, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData:any) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} errors={errors} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  console.log("data", data);

  return <div className="App">{steps[currentStep]}</div>;
}
export default CreateOpportunity;
