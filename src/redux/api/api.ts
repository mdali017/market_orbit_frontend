import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    // baseUrl: "https://moniharcineplexpimainapi.icicle.dev/api",
  }),
  tagTypes: ["Products", "Categories", "ShowTime"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
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

    // getTodaysReport: builder.query({
    //   query: (payload) => {
    //     return {
    //       url: `todays-report?show_date=${payload.show_date}`,
    //       method: "GET",
    //     };
    //   },
    //   providesTags: ["Bookings"],
    // }),
    // getCurrentShowReport: builder.query({
    //   query: (payload) => {
    //     // console.log(payload, 79);
    //     return {
    //       url: `todays-current-report?show_date=${payload.show_date}&show_time_id=${payload.show_time_id}`,
    //       method: "GET",
    //     };
    //   },
    //   providesTags: ["Bookings"],
    // }),
    // updateBooking: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/seatUpdate/${id}`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["Bookings"],
    // }),
    // addShowTime: builder.mutation({
    //   query: (data) => ({
    //     url: "/showTime",
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${localStorage.getItem(
    //         "moniharcinema_token"
    //       )}`,
    //     },
    //     body: data,
    //   }),
    //   invalidatesTags: ["Bookings"],
    // }),
    // getAllShowTime: builder.query({
    //   query: () => ({
    //     url: `/showTime`,
    //     method: "GET",
    //   }),
    //   invalidatesTags: ["ShowTime"],
    // }),
    // deleteShowTime: builder.mutation({
    //   query: (id) => ({
    //     url: `/deleteShowTime`, // Ensure your backend route is correct here
    //     method: "delete",
    //     body: { id }, // Pass the ID of the movie to be deleted
    //   }),
    //   invalidatesTags: ["ShowTime"], // To refetch movies after deletion
    // }),
    // updateShowTime: builder.mutation({
    //   query: ({ id }) => ({
    //     url: `/show-time-update/${id}`,
    //     method: "POST",
    //   }),
    //   invalidatesTags: ["ShowTime"],
    // }),
    // updateMovie: builder.mutation({
    //   query: ({ id, data }) => {
    //     console.log(data, id);
    //     return {
    //       url: `/movie-update/${id}`,
    //       method: "POST",
    //       body: data,
    //     };
    //   },
    //   invalidatesTags: ["Movies"],
    // }),
    // getAllShowMovie: builder.query({
    //   query: () => ({
    //     url: `/showMovie`,
    //     method: "GET",
    //   }),
    //   invalidatesTags: ["Movies"],
    // }),
    // deleteMovie: builder.mutation({
    //   query: (id) => ({
    //     url: `/deleteMovie`, // Ensure your backend route is correct here
    //     method: "delete",
    //     body: { id }, // Pass the ID of the movie to be deleted
    //   }),
    //   invalidatesTags: ["Movies"], // To refetch movies after deletion
    // }),
    // getFilteredBookings: builder.query({
    //   query: ({ showDate, showTimeId, seatTypeId }) => ({
    //     url: "/bookings",
    //     method: "GET",
    //     params: {
    //       show_date: showDate,
    //       show_time_id: showTimeId,
    //       seat_type_id: seatTypeId,
    //     },
    //   }),
    //   providesTags: ["Bookings"],
    // }),
    // addBooking: builder.mutation({
    //   query: (data) => ({
    //     url: "/bookings",
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["Bookings"],
    // }),
    // getSoldReport: builder.query({
    //   query: ({ showDate, show_time_id, seat_type_id }) => ({
    //     url: "/sold_report",
    //     method: "GET",
    //     params: {
    //       show_date: showDate,
    //       show_time_id: show_time_id,
    //       seat_type_id: seat_type_id,
    //     },
    //   }),
    //   providesTags: ["Bookings"],
    // }),
    // getCurrentReports: builder.query({
    //   query: (payload) => {
    //     // console.log(payload);
    //     return {
    //       url: `/current-report?show_date=${payload?.show_date}&show_time_id=${payload?.show_time_id}`,
    //       method: "GET",
    //     };
    //   },
    //   providesTags: ["Bookings"],
    // }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAllFollowedShopProductsQuery,
  useGetAllProductCategoriesQuery,
} = baseApi;
