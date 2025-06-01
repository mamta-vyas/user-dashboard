import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string; 
  street: string;
  city: string;
  zip: string;
}

interface FormContextType {
  data: FormData;
  updateData: (fields: Partial<FormData>) => void;
  step: number;
  setStep: (step: number) => void;
}

const defaultData: FormData = {
  name: "",
  email: "",
  phone: "", 
  street: "",
  city: "",
  zip: "",
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<FormData>(defaultData);
  const [step, setStep] = useState(1);

  const updateData = (fields: Partial<FormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  useEffect(() => {
  const saved = localStorage.getItem("userForm");
  if (saved) {
    setData(JSON.parse(saved));
  }
}, []);

useEffect(() => {
  localStorage.setItem("userForm", JSON.stringify(data));
}, [data]);


  return (
    <FormContext.Provider value={{ data, updateData, step, setStep }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
