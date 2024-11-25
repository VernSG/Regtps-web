import Head from "next/head";
import { AuroraBackgroundDemo } from "@/components/aurora";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <Head>
        <title>Regtps - Growtopia Private Server</title>
        <meta
          name="description"
          content="Join our Growtopia private server for the best adventure experience. Play with friends!"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Regtps - Growtopia Private Server" />
        <meta
          property="og:description"
          content="Join our Growtopia private server for the best adventure experience. Play with friends!"
        />
        <meta property="og:image" content="https://regtps.my.id/og-image.jpg" />
        <link rel="canonical" href="https://regtps.my.id" />
      </Head>
      <AuroraBackgroundDemo />
    </>
  );
}
