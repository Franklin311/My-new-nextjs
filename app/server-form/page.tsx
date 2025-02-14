"use client";
import { Button } from "../core/components/ui/button";
import { Input } from "../core/components/ui/input";
import { Submit } from "../core/components/ui/submitButton";

import { useActionState } from "react";

import { FormState, createProduct } from "../actions/products";

export default function AddProduct() {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, inPending] = useActionState(
    createProduct,
    initialState
  );

  return (
    <div>
      <h1>Add Product</h1>
      <form action={formAction} method="post">
        <div>
          <Input type="text" name="productName" placeholder="Product Name" />
          {state?.errors.productName && (
            <div className="text-red-500">{state?.errors.productName}</div>
          )}
        </div>
        <div>
          <Input type="text" name="price" placeholder="Price" />
          {state?.errors.price && (
            <div className="text-red-500">{state?.errors.price}</div>
          )}
        </div>
        <Submit />
      </form>
    </div>
  );
}
