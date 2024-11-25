"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import regtps from "../assets/images/regrowtopia.png";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import { Button } from "./ui/moving-border";
import Link from "next/link";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <Image
          src={regtps}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          <h1>best growtopia private server.</h1>
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          And this, is chemical burn.
        </div>
        <Link href="/join">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Join Now!
          </button>
        </Link>
      </motion.div>
    </AuroraBackground>
  );
}
