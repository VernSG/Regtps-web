import { Apple } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MainNav() {
  return (
    <div className="hidden md:flex">
      <Link href="/">
        <Image
          src="/favicon.ico" // Path gambar relatif terhadap folder public
          alt="Logo Regtps" // Deskripsi gambar (penting untuk SEO)
          width={50} // Lebar gambar dalam piksel
          height={50} // Tinggi gambar dalam piksel
          quality={75} // Kualitas gambar (opsional, default 75)
          className="rounded-full"
        />
      </Link>
      <nav className="flex items-center gap-3 lg:gap-4 ml-8">
        <p className="mr-3">|</p>
        <Link href="/project" className="font-bold">
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
