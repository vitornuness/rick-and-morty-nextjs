"use client";

import {
  hasNextPage,
  hasPrevPage,
  nextPage,
  prevPage,
} from "@/app/features/slicers/PaginationSlice";
import { AppDispatch, AppState } from "@/app/features/store";
import { useDispatch, useSelector } from "react-redux";

export default function Pagination() {
  const page = useSelector((state: AppState) => state.pagination.page);
  const isNextPageAvaible = useSelector(hasNextPage);
  const isPrevPageAvaible = useSelector(hasPrevPage);
  const dispatch: AppDispatch = useDispatch();

  const handleNextPage = () => dispatch(nextPage());
  const handlePrevPage = () => dispatch(prevPage());

  return (
    <>
      <div className="flex items-center gap-2">
        <button
          className="px-4 py-2 border bg-gray-600 rounded text-stone-50 
            disabled:opacity-40 disabled:cursor-not-allowed"
          onClick={handlePrevPage}
          disabled={!isPrevPageAvaible}
        >
          Prev
        </button>
        <span className="font-bold text-2xl mx-4">{page}</span>
        <button
          className="px-4 py-2 border bg-gray-600 rounded text-stone-50 
            disabled:opacity-40 disabled:cursor-not-allowed"
          onClick={handleNextPage}
          disabled={!isNextPageAvaible}
        >
          Next
        </button>
      </div>
    </>
  );
}
