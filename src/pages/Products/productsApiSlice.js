import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const productsAdaptor = createEntityAdapter({});

const initialState = productsAdaptor.getInitialState();

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/product",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      keepUnusedDataFor: 5,
      transformResponse: (responseData) => {
        const loadedProducts = responseData.map((product) => {
          product.id = product._id;
          return product;
        });
        return productsAdaptor.setAll(initialState, loadedProducts);
      },
      providesTags: (result, err, arg) => {
        if (result?._ids) {
          return [
            { type: "Product", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Product", id })),
          ];
        } else {
          return [{ type: "Product", id: "LIST" }];
        }
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApiSlice;

//returns the query select object
export const selectProductsResult =
  productsApiSlice.endpoints.getProducts.select();

//creates memoized selector
const selectProductsData = createSelector(
  selectProductsResult,
  (productsResult) => productsResult.data
);

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectUserIds,
} = productsAdaptor.getSelectors(
  (state) => selectProductsData(state) ?? initialState
);
