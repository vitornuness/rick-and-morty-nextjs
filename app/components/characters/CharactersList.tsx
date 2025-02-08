"use client";

import { charactersApi } from "@/app/features/services/CharactersService";
import { AppState } from "@/app/features/store";
import { useSelector } from "react-redux";

export default function CharactersList() {
  const page = useSelector((state: AppState) => state.pagination.page);
  const { data } = charactersApi.useFetchAllQuery({
    page: page,
  });

  return (
    <>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-2">
        {data?.results.map((char) => (
          <div key={char.id} className="border shadow rounded">
            <div className="p-4 transition duration-500 hover:scale-110 hover:bg-green-400">
              <p>{char.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
