import CharactersList from "../components/characters/CharactersList";
import Pagination from "../components/pagination/Pagination";

export default function Characters() {
  return (
    <>
      <section className="container w-96 md:w-max mx-auto py-8">
        <h1 className="my-4 font-bold text-2xl">Personagens</h1>
        <CharactersList />
        <div className="flex justify-center my-4">
          <Pagination />
        </div>
      </section>
    </>
  );
}
