import { ChevronRight } from "lucide-react";
import Navbar from "./navbar";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
      id="home"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/travel2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="absolute top-0 left-0 right-0 z-40 w-full">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-pretty">
          WanderLust Travels
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
          Discover Beyond Borders
        </p>

        <Button
          onClick={() => {
            console.log("Explore Destinations clicked");
          }}
          label="Explore Destinations"
          icon={<ChevronRight className="w-5 h-5" />}
        />
      </div>
    </section>
  );
};

export default Hero;
