import { Camera, Compass, Globe, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Tailored Global Itineraries",
      description:
        "Personalized travel plans crafted with Sri Lankan hospitality, covering destinations across the world.",
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description:
        "Explore Sri Lanka like a local with certified guides who bring hidden gems and cultural stories to life.",
    },
    {
      icon: Camera,
      title: "Photography & Heritage Tours",
      description:
        "Capture breathtaking landscapes, historical wonders, and cultural moments with curated tour experiences.",
    },
    {
      icon: Compass,
      title: "Adventure & Nature Experiences",
      description:
        "From surfing and hiking to safari adventures, enjoy thrilling activities both in Sri Lanka and worldwide.",
    },
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-600 text-center text-pretty">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-gray-400 hover:border-blue-400 hover:shadow-2xl transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
