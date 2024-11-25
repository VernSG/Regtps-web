import Head from "next/head";
import { FeaturesSectionDemo } from "@/components/feature";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { OrbitingCirclesDemo } from "@/components/circles";
import { HowToPlayCards } from "@/components/card-android";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Regtps - Join the Adventure",
  description: "Join our Growtopia private server and start your journey now!",
};

export default function Join() {
  return (
    <>
      <Head>
        <title>Join - Regtps Growtopia Private Server</title>
        <meta
          name="description"
          content="Join our private Growtopia server and experience the fun with a great community."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Join Regtps - Growtopia Private Server"
        />
        <meta
          property="og:description"
          content="Join our private Growtopia server and experience the fun with a great community."
        />
        <meta
          property="og:image"
          content="https://regtps.my.id/og-image-join.jpg"
        />
        <link rel="canonical" href="https://regtps.my.id/join" />
      </Head>
      <Header />
      <TailwindIndicator />
      <div className="">
        <OrbitingCirclesDemo />
      </div>
      <div id="feature">
        <FeaturesSectionDemo />
      </div>
      <div id="howtoplay">
        <HowToPlayCards />
      </div>
      <Footer />
    </>
  );
}
