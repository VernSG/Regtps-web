import { AuroraBackgroundDemo } from "@/components/aurora";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <>
    <AuroraBackgroundDemo />  
    </>
  )
}