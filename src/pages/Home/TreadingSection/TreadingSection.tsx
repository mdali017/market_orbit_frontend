import { useGetAllProductsQuery } from "../../../redux/api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "../../../components/common/ProductCard/ProductCard";

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
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          {products.map((product: any) => (
            <SwiperSlide key={product.id}>
              <ProductCard item={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default TrendingSection;
