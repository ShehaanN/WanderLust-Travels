import { ChevronRight, SquareArrowOutUpRight } from "lucide-react";
import Navbar from "./navbar";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

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
          <span className="text-orange-400">W</span>anderLust Travels
        </h1>
        <p className="text-md  italic md:text-2xl mb-8 text-yellow-200 text-balance">
          Authentic experiences, expertly planned — from Sri Lanka’s shores to
          the world’s wonders.
        </p>
        <div className="flex flex-col gap-7 w-fit mx-auto ">
          <Button
            onClick={() => {
              router.push("/booking");
            }}
            type="button"
            label="Book Now"
            icon={<SquareArrowOutUpRight className="w-4 h-4" />}
            className="sm:hidden gap-2 sm:py-3 sm:px-5 px-3 py-2 text-[1.1rem] "
          />

          <Button
            onClick={() => {
              router.push("#gallery");
            }}
            type="button"
            label="Explore Destinations"
            icon={<ChevronRight className="w-5 h-5" />}
            className="gap-2 sm:py-3 sm:px-5 px-3 py-2 bg-transparent sm:bg-orange-600 border-2 border-orange-600"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
