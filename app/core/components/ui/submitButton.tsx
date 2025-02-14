"use client";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      Submit
    </Button>
  );
};

export { Submit };
