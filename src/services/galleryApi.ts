import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./customBaseQuery";

export const galleryApi = createApi({
  reducerPath: "galleryApi",
  baseQuery: axiosBaseQuery({ baseUrl: "https://test-front.framework.team/" }),
  endpoints: (builder) => ({
    getPaintings: builder.query({
      query: () => ({ url: "paintings", method: "get" }),
    }),
    getAuthors: builder.query({
      query: () => ({ url: "authors", method: "get" }),
    }),
    getLocations: builder.query({
      query: () => ({ url: "locations", method: "get" }),
    }),
  }),
});

export const {
  useGetPaintingsQuery,
  useGetAuthorsQuery,
  useGetLocationsQuery,
} = galleryApi;
