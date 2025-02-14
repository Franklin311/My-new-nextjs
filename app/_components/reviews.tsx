const Reviews = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return (
    <div>
      <h1>Reviews</h1>
      <p>These are the reviews</p>
    </div>
  );
};

const ProductsData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return (
    <div>
      <h1>ProductsData</h1>
      <p>These are the ProductsData</p>
    </div>
  );
};

export { Reviews, ProductsData };
