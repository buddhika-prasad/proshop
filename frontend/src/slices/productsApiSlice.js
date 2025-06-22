// src/slices/productsApiSlice.js
import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all products
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),

    // Fetch a single product by ID
    getProductDetails: builder.query({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

// ✅ Export hooks for usage in components
export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useLazyGetProductDetailsQuery, // useful if you want to fetch manually
} = productsApiSlice;
