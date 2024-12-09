import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    // baseUrl: "https://moniharcineplexpimainapi.icicle.dev/api",
  }),
  tagTypes: ["Products", "Categories", "FlashSaleProducts", "Shops"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    getAllFollowedShopProducts: builder.query({
      query: ({ shopId, customerId }) => ({
        url: `http://localhost:5000/api/v1/followed-shop/${shopId}/${customerId}`,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    getAllProductCategories: builder.query({
      query: () => {
        return {
          url: `/categories`,
          method: "GET",
        };
      },
      providesTags: ["Categories"],
    }),
    getAllFlashSaleProducts: builder.query({
      query: () => {
        return {
          url: `/flash-sale`,
          method: "GET",
        };
      },
      providesTags: ["FlashSaleProducts"],
    }),
    getAllRelatedProductsByCategory: builder.query({
      query: (categoryId) => {
        return {
          url: `/products/related-products/${categoryId}`,
          method: "GET",
        };
      },
      providesTags: ["Products"],
    }),
    getSingleShop: builder.query({
      query: (shopId) => {
        return {
          url: `/shop/${shopId}`,
          method: "GET",
        };
      },
      providesTags: ["Shops"],
    }),
    getAllProductsByShop: builder.query({
      query: (shopId) => {
        return {
          url: `/products/shop/${shopId}`,
          method: "GET",
        };
      },
      providesTags: ["Products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useGetAllFollowedShopProductsQuery,
  useGetAllProductCategoriesQuery,
  useGetAllFlashSaleProductsQuery,
  useGetAllRelatedProductsByCategoryQuery,
  useGetSingleShopQuery,
  useGetAllProductsByShopQuery,
} = baseApi;
