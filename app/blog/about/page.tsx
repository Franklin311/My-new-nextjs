import Link from "next/link";
import { Reviews, ProductsData } from "@/app/_components/reviews";
import { Suspense } from "react";
const About = () => {
  return (
    <>
      {/* <Reviews />
      <ProductsData /> */}
      <Suspense fallback={<div> review is Loading...</div>}>
        <Reviews />
      </Suspense>

      <Suspense fallback={<div> ProductsData is Loading...</div>}>
        <ProductsData />
      </Suspense>
      <div> You are in About page </div>
      <Link href="/blog"> navigate to blog </Link>
    </>
  );
};

export default About;
