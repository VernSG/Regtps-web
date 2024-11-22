import Link from "next/link";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-gray-950 border-b z-50">
      <div className="h-14 container flex items-center">
        {/* Desktop */}
        <MainNav />

        {/* Mobile */}
        <MobileNav />

        {/* Desktop & Mobile */}
        <h1 className="flex items-center justify-end flex-1">
          <Link href="https://regtps-web.vercel.app">
            <Image
              src="/favicon.ico" // Path gambar relatif terhadap folder public
              alt="Logo Regtps" // Deskripsi gambar (penting untuk SEO)
              width={125} // Lebar gambar dalam piksel
              height={125} // Tinggi gambar dalam piksel
              quality={75} // Kualitas gambar (opsional, default 75)
            />
          </Link>
        </h1>
      </div>
    </header>
  );
}
