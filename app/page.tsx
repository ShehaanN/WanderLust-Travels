"use client";

import About from "@/components/about";
import Footer from "@/components/footer";
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
        <Footer />
      </main>
    </>
  );
};

export default page;
