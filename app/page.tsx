"use client";

import About from "@/components/about";
import Hero from "@/components/hero";
import Services from "@/components/services";

const page = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
      </main>
    </>
  );
};

export default page;
