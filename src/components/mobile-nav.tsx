import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MobileNav() {
  return (
    <>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="ml-5">
            <AlignJustify />
          </SheetTrigger>
          <SheetContent side="left">
            <Image
              src="/favicon.ico" // Path gambar relatif terhadap folder public
              alt="Logo Regtps" // Deskripsi gambar (penting untuk SEO)
              width={120} // Lebar gambar dalam piksel
              height={150} // Tinggi gambar dalam piksel
              quality={75} // Kualitas gambar (opsional, default 75)
            />
            <nav className="flex flex-col gap-3 lg:gap-4 mt-6">
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
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
