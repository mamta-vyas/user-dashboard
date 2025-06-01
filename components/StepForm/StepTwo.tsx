// src/components/StepForm/StepTwo.tsx
import React from "react";

interface StepTwoProps {
  data: {
    name: string;
    email: string;
    street: string;
    city: string;
    zip: string;
  };
  updateData: (fields: Partial<StepTwoProps["data"]>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ data, updateData, nextStep, prevStep }) => {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-semibold mb-4">Step 2: Address Info</h2>
      <input
        type="text"
        placeholder="Street"
        value={data.street}
        onChange={(e) => updateData({ street: e.target.value })}
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        placeholder="City"
        value={data.city}
        onChange={(e) => updateData({ city: e.target.value })}
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        placeholder="ZIP Code"
        value={data.zip}
        onChange={(e) => updateData({ zip: e.target.value })}
        className="border p-2 w-full mb-4"
      />
      <div className="flex gap-2">
        <button onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 rounded">
          Back
        </button>
        <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
