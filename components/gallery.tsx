import Image from "next/image";

const Gallery = () => {
  const destinations = [
    {
      title: "Unawatuna",
      image: "/galary7.jpg",
    },
    {
      title: "Ella",
      image: "/4-Nine-Arche-Bridge.jpg",
    },
    {
      title: "Sigiriya",
      image: "/gallery1-2-4-1.jpg",
    },
    {
      title: "Kandy",
      image: "/tourist-attractions-in-sri-lanka.jpg",
    },
    {
      title: "Sinharaja",
      image: "/forest-jungle-waterfall-nature-green.jpg",
    },
    {
      title: "Colombo",
      image: "/port-city-marina-promenade-1280x765.jpeg",
    },
    {
      title: "Galle",
      image: "/Galle-1024x768.jpg",
    },
    {
      title: "Jaffna",
      image: "/Jaffna.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-600 text-center text-pretty">
          Featured Destinations
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-4/3 cursor-pointer"
            >
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.title}
                fill
                sizes="max-width: 100vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-end p-6">
                <h3 className="text-xl font-bold text-white text-balance">
                  {destination.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
