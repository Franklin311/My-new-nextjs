import Link from "next/link";
import { Suspense } from "react";
import { Reviews, ProductsData } from "../_components/reviews";
async function products() {
  return (
    <>
      <Reviews />
      <ProductsData />
      {/* <Suspense fallback={<div> review is Loading...</div>}>
        <Reviews />
      </Suspense>

      <Suspense fallback={<div> ProductsData is Loading...</div>}>
        <ProductsData />
      </Suspense> */}

      <h1>Products</h1>
      <h4>
        {" "}
        <Link href="/products/1"> procuct details 1 </Link>
      </h4>
      <h4>
        {" "}
        <Link href="/products/2"> procuct details 2 </Link>
      </h4>
      <h4>
        {" "}
        <Link href="/products/3" replace>
          {" "}
          procuct details 3{" "}
        </Link>
      </h4>
    </>
  );
}

export default products;
