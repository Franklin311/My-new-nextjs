export default async function Childrens({ params }: Props) {
  console.log("params ", await params);
  const childName = await params?.childrens;

  return (
    <div>
      <h1>Childrens</h1>
      {childName === "leo" ? <div> 100000</div> : <div> no sothu</div>}
    </div>
  );
}
