"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [forClient, setforClient] = useState(true);

  return (
    <>
      <Header forClient={forClient} setforClient={setforClient}/>
      <div
        class={`min-h-screen transition-colors duration-300 ${
          forClient ? "bg-white" : "bg-gradient-to-b from-black to-zinc-900"
        }`}
      >
        <Hero forClient={forClient} setforClient={setforClient} />
      </div>
    </>
  );
}
