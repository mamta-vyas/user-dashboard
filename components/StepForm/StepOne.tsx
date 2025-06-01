// src/components/StepForm/StepOne.tsx
import React from "react";

interface StepOneProps {
  data: {
    name: string;
    email: string;
    phone: string;
    street: string;
    city: string;
    zip: string;
  };
  updateData: (fields: Partial<StepOneProps["data"]>) => void;
  nextStep: () => void;
}

const StepOne: React.FC<StepOneProps> = ({ data, updateData, nextStep }) => {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-semibold mb-4">Step 1: Basic Info</h2>
      <input
        type="text"
        placeholder="Name"
        value={data.name}
        onChange={(e) => updateData({ name: e.target.value })}
        className="border p-2 w-full mb-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => updateData({ email: e.target.value })}
        className="border p-2 w-full mb-4"
      />
      <input
  type="text"
  placeholder="Phone"
  value={data.phone}
  onChange={(e) => updateData({ phone: e.target.value })}
  className="border p-2 w-full mb-2"
/>

      <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded">
        Next
      </button>
    </div>
  );
};

export default StepOne;
