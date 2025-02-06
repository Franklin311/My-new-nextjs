async function Reviews({
  params,
}: {
  params: {
    productId: string;
    reviewID: string;
  };
}) {
  const { productId, reviewID } = await params;
  return (
    <>
      {" "}
      Product id is {productId}. the review number is {reviewID}
    </>
  );
}

export default Reviews;
