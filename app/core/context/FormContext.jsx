"use client";

import { createContext, useContext, useState } from "react";

// Create a context for the form
const FormContext = createContext();

// Create a form context provider
export const FromProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  const updateForm = (data) => {
    setFormData((pre) => {
      return { ...pre, ...data };
    });
  };

  const resetForm = () => {
    setFormData({});
  };

  // Return the provider with the form data and the update function
  return (
    <FormContext.Provider value={{ formData, updateForm, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};

export function useFromContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
}
