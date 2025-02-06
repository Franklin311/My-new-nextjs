import { Metadata } from "next";

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <h2> Feature Products footer </h2>
    </>
  );
}
