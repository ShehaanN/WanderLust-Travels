const About = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-600 text-center text-pretty">
            About WanderLust Travels
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Since 2010, WanderLust Travels has been curating extraordinary
            travel experiences rooted in the beauty, culture, and hospitality of
            Sri Lanka. What began as a small Sri Lankan agency passionate about
            sharing the island&apos;s wonders has grown into a global travel
            service trusted by adventurers, honeymooners, families, and
            explorers worldwide.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With a team of seasoned travel specialists and local experts, we
            combine authentic Sri Lankan hospitality with international travel
            standards. Whether you dream of pristine beaches, misty mountains,
            historic cities, or global adventures, we design each journey with
            care, precision, and heart.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-gray-400">
            <h3 className="text-2xl font-bold mb-3 text-blue-600">150+</h3>
            <p className="text-gray-600">
              Trusted Local & International Partners
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-gray-400">
            <h3 className="text-2xl font-bold mb-3 text-blue-600">40K+</h3>
            <p className="text-gray-600">Happy Travelers Worldwide</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-gray-400">
            <h3 className="text-2xl font-bold mb-3 text-blue-600">24/7</h3>
            <p className="text-gray-600">Dedicated Global Travel Assistance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
