import { AuroraBackgroundDemo } from "@/components/aurora";
import ButtonFunc from "@/components/ui/button";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <>
      <AuroraBackgroundDemo />
    </>
  );
}