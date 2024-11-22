import { FeaturesSectionDemo } from "@/components/feature";
import { HeroParallaxDemo } from "@/components/hero";
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import { TailwindIndicator } from '@/components/tailwind-indicator';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Regtps',
  description: 'Growtopia private server',
};

export default function Join() {
  return (
    <>
      <Header />
      <TailwindIndicator />
      <HeroParallaxDemo />
      <FeaturesSectionDemo />
    </>
  );
}
