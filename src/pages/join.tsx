import { FeaturesSectionDemo } from "@/components/feature";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { AccordionDemo } from "@/components/accordion";
import { HeroVideoDialogDemo } from "@/components/hero-video";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Regtps",
  description: "Growtopia private server",
};

export default function Join() {
  return (
    <>
      <Header />
      <TailwindIndicator />
      <div className="p-10">
        <HeroVideoDialogDemo />
      </div>
      <FeaturesSectionDemo />
    </>
  );
}
