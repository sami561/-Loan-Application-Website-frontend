import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSpring = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL_SPRING }),
  reducerPath: "adminApi",
  tagTypes: ["User"],
  endpoints: (build) => ({}),
});

export const {} = apiSpring;
