"use client";
import BankDataForm from "@/components/banckDataForm/BankDataForm";
import LoanTypesForm from "@/components/loanTypesForm/LoanTypesForm";
import LogInForm from "@/components/loginForm/LogInForm";
import React, { useState } from "react";

const StepForm = () => {
  const [step, setStep] = useState(3);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const updateFormData = (newData: any) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  switch (step) {
    case 1:
      return <LogInForm nextStep={nextStep} updateFormData={updateFormData} />;
    case 2:
      return (
        <BankDataForm
          nextStep={nextStep}
          prevStep={prevStep}
          updateFormData={updateFormData}
        />
      );
    case 3:
      return <LoanTypesForm prevStep={prevStep} formData={formData} />;

    default:
      return null;
  }
};

export default StepForm;
