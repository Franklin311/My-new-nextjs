import Link from "next/link";

export default function f1Component() {
  return (
    <div>
      fl component
      <div>
        <Link href="/f1/f2"> navigate f2</Link>
      </div>
    </div>
  );
}
