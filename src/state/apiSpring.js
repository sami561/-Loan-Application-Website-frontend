import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSpring = createApi({
  reducerPath: "SpringApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL_SPRING,
    prepareHeaders: (headers, { getState }) => {
      // Attempt to get the token from the Redux state (if it's stored there)
      const token = getState().auth.token; // Ensure this path to the token in the state is correct

      // If using localStorage instead, you might use:
      // const token = localStorage.getItem('token');

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Governorate"],
  endpoints: (build) => ({
    getGovernorate: build.query({
      query: () => "api/v1/gouvernorat/all",
      providesTags: ["Governorate"],
    }),
  }),
});

export const { useGetGovernorateQuery } = apiSpring;
