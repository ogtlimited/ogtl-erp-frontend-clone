import React, { useState } from "react";

import FormOne from "./components/form-one";
import FormTwo from "./components/form-two";

const SignUp = () => {
  const [formData, setFormData] = useState([]);

  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handlePrevtStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <FormOne
      next={handleNextStep}
      setFormData={setFormData}
      formData={formData}
    />,
    <FormTwo formData={formData} previous={handlePrevtStep} />,
  ];

  return <>{steps[currentStep]}</>;
};

export default SignUp;
