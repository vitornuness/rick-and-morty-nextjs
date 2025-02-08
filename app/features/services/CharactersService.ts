import { Character } from "@/app/models/Character";
import { PaginationRequest } from "@/app/models/PaginationRequest";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type PaginationResult = {
  results: Character[];
};

export const charactersApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/character",
  }),
  endpoints: (builder) => ({
    fetchAll: builder.query<PaginationResult, PaginationRequest>({
      query: (arg) => {
        const { page = 1 } = arg;
        return {
          url: "/",
          params: {
            page,
          },
        };
      },
    }),
  }),
});
