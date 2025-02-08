import { createSlice } from "@reduxjs/toolkit";

type PaginationState = {
  page: number;
  maxPages: number;
};

const initialState: PaginationState = {
  page: 1,
  maxPages: 826,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    nextPage: (state) => {
      return state.page < state.maxPages
        ? { ...state, page: state.page + 1 }
        : state;
    },
    prevPage: (state) => {
      return state.page > 1 ? { ...state, page: state.page - 1 } : state;
    },
  },
  selectors: {
    hasNextPage: (state): boolean => {
      return state.page < state.maxPages;
    },
    hasPrevPage: (state): boolean => {
      return state.page > 1;
    },
  },
});

export const { nextPage, prevPage } = paginationSlice.actions;
export const { hasNextPage, hasPrevPage } = paginationSlice.selectors;
export default paginationSlice.reducer;
