"use server"

import { redirect } from "next/navigation";
export type Errors = {
  [key: string]: string;
  // productName?: string;
  // price?: string;
};

export type FormState = {
  errors: Errors;
};


export async function createProduct(prevState:FormState, formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const productName = formData.get("productName");
    const price = formData.get("price");

    const errors: Errors = {};
    if (!productName) {
      errors.productName = "Product Name is required";
    }
    if (!price) {
      errors.price = "Price is required";
    }
    if (Object.keys(errors).length) {
      return { errors };
    }
    console.log("formData", formData);
  }