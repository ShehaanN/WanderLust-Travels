"use client";

import About from "@/components/about";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Services from "@/components/services";

const page = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
      </main>
    </>
  );
};

export default page;
