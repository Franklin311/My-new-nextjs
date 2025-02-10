import Image from "next/image";
import Link from "next/link";
import ExRouter from "./exampleRouter";
import { Button } from "./core/components/ui/button";
import { Input } from "./core/components/ui/input";
import { Label } from "./core/components/ui/label";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      First NextJs App
      <Button variant="destructive">Button</Button>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <Link href="/blog"> navigate to blog page </Link>
      <ExRouter />
    </div>
  );
}
