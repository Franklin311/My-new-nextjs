import Link from "next/link";

const About = () => {
  return (
    <>
      <div> You are in About page </div>
      <Link href="/blog"> navigate to blog </Link>
    </>
  );
};

export default About;
