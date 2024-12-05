const TreadingSection = () => {
  return (
    <div className="bg-gray-50 py-12">
      {/* Header Section */}
      <div className="container mx-auto px-6 flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Trending
        </h1>
        <a
          href="#"
          className="text-violet-600 hover:text-violet-500 font-medium text-sm md:text-base"
        >
          View All
        </a>
      </div>

      {/* Articles Section */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Article Card */}
          {Array.from({ length: 8 }).map((_, index) => (
            <article
              key={index}
              className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Trending Article"
                className="block"
              >
                <img
                  alt="Trending Fashion"
                  className="object-cover w-full h-48"
                  src={`https://source.unsplash.com/200x200/?fashion?${
                    index + 1
                  }`}
                />
              </a>
              <div className="flex flex-col flex-1 p-4">
                <a
                  href="#"
                  className="text-xs uppercase tracking-wide font-semibold text-violet-600 hover:underline mb-1"
                >
                  Fashion
                </a>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Trending Fashion Insights #{index + 1}
                </h3>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>June {index + 1}, 2020</span>
                  <span>{index + 2}.1K views</span> {/* Corrected this line */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TreadingSection;
