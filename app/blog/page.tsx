import Link from "next/link";

const Blog = ({ params }: any) => {
  return (
    <>
      <div> my first blog {params.id} 00</div>
      <Link href="/"> navigate to Home router page </Link> <br></br>
      <Link href="/blog/about"> navigate to About page </Link>
    </>
  );
};

export default Blog;
