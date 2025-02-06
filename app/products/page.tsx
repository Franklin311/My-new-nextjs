import Link from "next/link";

async function products() {
  return (
    <>
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
