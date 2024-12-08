import { useGetAllProductsQuery } from "../../../redux/api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const TrendingSection = () => {
  const { data: allProducts, isLoading } = useGetAllProductsQuery(undefined);

  // If data is loading, show a loading message or spinner
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const products = allProducts?.data || [];

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

      {/* Swiper Section */}
      <section className="container mx-auto px-6">
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 slide on small screens
            },
            768: {
              slidesPerView: 2, // 2 slides on medium screens
            },
            1024: {
              slidesPerView: 4, // 4 slides on large screens
            },
          }}
          className="mySwiper"
        >
          {/* Article Cards inside SwiperSlides */}
          {products.map((product: any) => (
            <SwiperSlide key={product.id}>
              <article className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label={`Product: ${product.name}`}
                  className="block"
                >
                  <img
                    alt={product.name}
                    className="object-cover w-full h-48"
                    src={product.images[0]} // Display the first image from the product's images array
                  />
                </a>
                <div className="flex flex-col flex-1 p-4">
                  <a
                    href="#"
                    className="text-xs uppercase tracking-wide font-semibold text-violet-600 hover:underline mb-1"
                  >
                    {/* You can use product.categoryId if you want to display the category */}
                    Category
                  </a>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.name} {/* Display the product name */}
                  </h3>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>${product.price}</span> {/* Display product price */}
                    <span>{product.ratings}⭐</span>{" "}
                    {/* Display product ratings */}
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default TrendingSection;
