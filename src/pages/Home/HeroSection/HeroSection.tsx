import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = () => {
  const articles = [
    {
      img: "https://images.pexels.com/photos/7481668/pexels-photo-7481668.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Elevate Your Style",
      date: "June 1, 2024",
      views: "2.1K views",
      category: "Fashion Trends",
    },
    {
      img: "https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Urban Chic Essentials",
      date: "June 2, 2024",
      views: "2.2K views",
      category: "Streetwear",
    },
    {
      img: "https://images.pexels.com/photos/11091412/pexels-photo-11091412.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Minimalist Wardrobe",
      date: "June 3, 2024",
      views: "2.3K views",
      category: "Style Guide",
    },
    {
      img: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Sustainable Fashion",
      date: "June 4, 2024",
      views: "2.4K views",
      category: "Eco Trends",
    },
    {
      img: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Sustainable Fashion",
      date: "June 4, 2024",
      views: "2.4K views",
      category: "Eco Trends",
    },
  ];

  return (
    <div className="bg-neutral-50 py-4">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Featured Image Section */}
        <div className="relative group overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            alt="Featured Fashion"
            className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-6">
            <h2 className="text-white text-3xl font-bold drop-shadow-lg">
              Latest Fashion Insights
            </h2>
          </div>
        </div>

        {/* Slider Section */}
        <div className="w-full mt-9">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            // navigation
            className="modern-slider"
          >
            {Array.from({ length: Math.ceil(articles.length / 4) }).map(
              (_, i) => (
                <SwiperSlide key={i}>
                  <div className="grid grid-cols-2 gap-6">
                    {articles.slice(i * 4, i * 4 + 4).map((article, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-2"
                      >
                        <div className="relative">
                          <img
                            src={article.img}
                            alt={article.title}
                            className="w-full h-40 object-cover"
                          />
                          <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded-full">
                            {article.category}
                          </span>
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                            {article.title}
                          </h3>
                          <div className="flex justify-between text-neutral-500 text-sm">
                            <span>{article.date}</span>
                            <span>{article.views}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
