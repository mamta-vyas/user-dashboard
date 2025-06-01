// src/components/StepForm/StepThree.tsx
import React from "react";
import toast from "react-hot-toast";

interface StepThreeProps {
  data: {
    name: string;
    email: string;
    phone: string; 
    street: string;
    city: string;
    zip: string;
  };
  prevStep: () => void;
  submitForm: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({ data, prevStep, submitForm }) => {
  const handleSubmit = () => {
    console.log("Final Form Data:", data);
    toast.success("User data submitted successfully!");
    submitForm();
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-semibold mb-4">Step 3: Confirm</h2>
      <pre className="bg-gray-100 p-4 rounded mb-4 text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
      <div className="flex gap-2">
        <button onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 rounded">
          Back
        </button>
        <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepThree;
