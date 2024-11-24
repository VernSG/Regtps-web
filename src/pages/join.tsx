import { FeaturesSectionDemo } from "@/components/feature";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { OrbitingCirclesDemo } from "@/components/circles";

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
      <div className="">
        <OrbitingCirclesDemo />
      </div>
      <div id="feature">
        <FeaturesSectionDemo />
      </div>
    </>
  );
}
