// "use client";
import Link from "next/link";
import { Metadata } from "next";
// import { useRouter } from "next/router";

type Props = {
  params: {
    productId: string;
  };
};

// export const generateMetadata = async ({
//   params,
// }: Props): Promise<Metadata> => {
//   const { productId } = await params;
//   const title = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`iPhone ${productId}`);
//     }, 1000);
//   });
//   return {
//     title: `Product ${title}`,
//   };
// };

// // above and below both are same to set the title
// export const generateMetadata = async ({ params }: Props) => {
//   const { productId } = await params;
//   const title = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`iPhone ${productId}`);
//     }, 1000);
//   });
//   return {
//     title: `Product ${title}`,
//   };
// };

export default async function ProductDetails({ params }: Props) {
  //   const router = useRouter();
  //   console.log("router ", router.query.slug);
  // Ensure params is awaited
  const { productId } = await params;
  console.log("params ", await params);

  //   const product = await fetchProductDetails(productId);

  return (
    <div>
      <h1>Details about product {productId}</h1>
      <p>
        <Link href="/products"> Back to product page</Link>
      </p>
    </div>
  );
}

// export default function ProductDetails() {
//   return (
//     <div>
//       <h1>Details about product </h1>
//       <p>
//         <Link href="/products"> Back to product page</Link>
//       </p>
//     </div>
//   );
// }

// async function fetchProductDetails(productId: string) {
//   const res = await fetch(`https://api.example.com/products/${productId}`);
//   return res.json();
// }
