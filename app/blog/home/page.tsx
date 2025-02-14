
"use client";
import { Button } from "@/app/core/components/ui/button";
import Link from "next/link";

const Home = ({ params }: any) => {

  const handleClick = () => {
    alert("clicked");
    throw new Error("Error from Home page");
  }

  return (
    <>
      <Button onClick={handleClick}> click</Button>
      <div> my first Home {params.id} 00</div>
      <Link href="/"> navigate to Home router page </Link> <br></br>
      <Link href="/Home/about"> navigate to About page </Link>
    </>
  );
};

export default Home;

