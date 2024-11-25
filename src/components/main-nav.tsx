import Image from "next/image";
import Link from "next/link";

export default function MainNav() {
  return (
    <div className="hidden md:flex">
      <nav className="flex items-center gap-3 lg:gap-4 ml-8">
        <p className="mr-3">|</p>
        <Link href="#howtoplay" className="font-bold">
          How to play
        </Link>
        <Link href="/about" className="font-bold">
          Role
        </Link>
        <Link href="/contact" className="font-bold">
          Contact
        </Link>
      </nav>
    </div>
  );
}
