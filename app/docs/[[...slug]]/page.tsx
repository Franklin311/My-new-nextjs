interface DocsProps {
  params: { slug?: string[] };
}

export default function Docs({ params }: DocsProps) {
  const { slug = [] } = params; // ✅ Remove await, params is not a Promise

  if (slug.length === 0) {
    return <div>Docs home page</div>;
  }

  if (slug.length === 2) {
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }

  return null;
}
