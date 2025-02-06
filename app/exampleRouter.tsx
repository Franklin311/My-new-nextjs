"use client";

import { useRouter } from "next/navigation";

export default function ExRouter() {
  const router = useRouter();

  const navigate = () => {
    router.push("/blog");
  };

  return (
    <button onClick={navigate}>
      {" "}
      click to navigate to blog using "useRouter"{" "}
    </button>
  );
}
