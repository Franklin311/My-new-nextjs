"use client";
import { Button } from "../core/components/ui/button";
import Link from "next/link";

const Blog = ({ params }: any) => {

  const handleClick = () => {
    alert("clicked");
  }

  return (
    <>
      <Button onClick={handleClick}> click</Button>
      <div> my first blog {params.id} 00</div>
      <Link href="/"> navigate to Home router page </Link> <br></br>
      <Link href="/blog/about"> navigate to About page </Link>
    </>
  );
};

export default Blog;
