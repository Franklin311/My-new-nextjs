async function Docs({
  params,
}: {
  params: {
    slug?: string[];
  };
}) {
  const { slug = [] } = await params;
  if (!slug || slug.length === 0) {
    return <div> Docs home page</div>;
  }

  if (slug.length === 2) {
    return (
      <h1>
        {" "}
        2 viewing docs for feature {slug[0]}
        and consept {slug[2]}
      </h1>
    );
  } else if (slug.length === 1) {
    return <h1> 1 viewing docs for feature {slug[0]} </h1>;
  }
}

export default Docs;
