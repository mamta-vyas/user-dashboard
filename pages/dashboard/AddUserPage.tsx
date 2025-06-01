// src/pages/dashboard/AddUserPage.tsx

import React, { useState } from "react";
import StepOne from "@/components/StepForm/StepOne";
import StepTwo from "@/components/StepForm/StepTwo";
import StepThree from "@/components/StepForm/StepThree";
import { useFormContext } from "@/context/FormContext"; // ✅ import context

const AddUserPage = () => {
  const [step, setStep] = useState(1);

  // ✅ Use context instead of local state
  const { data: formData, updateData } = useFormContext();

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const submitForm = () => {
    console.log("Final form data:", formData);

    // ✅ Make sure we store it in localStorage here too (redundant but safe)
    localStorage.setItem("userForm", JSON.stringify(formData));

    alert("User data submitted!");
    window.location.href = "/dashboard"; // ✅ Redirect to dashboard after submit
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Add User</h1>

      {step === 1 && (
        <StepOne data={formData} updateData={updateData} nextStep={nextStep} />
      )}
      {step === 2 && (
        <StepTwo
          data={formData}
          updateData={updateData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <StepThree data={formData} prevStep={prevStep} submitForm={submitForm} />
      )}

      <button
        onClick={() => (window.location.href = "/dashboard")}
        className="mt-8 text-blue-600 hover:underline"
      >
        ← Back to Dashboard
      </button>
    </div>
  );
};

export default AddUserPage;
