import LightBox from "../components/lightBox/LightBox";
import rickAndMorty from "@/assets/rick_and_morty.png";
import rick from "@/assets/rick.png";
import morty from "@/assets/morty.png";

export default function Home() {
  return (
    <>
      <section className="container w-96 mx-auto mt-32">
        <div>
          <LightBox
            src={rickAndMorty}
            alt="Rick and Morty saindo de um portal verde."
          />
        </div>
        <div className="flex flex-col gap-32 my-32">
          <div className="flex justify-between items-center">
            <p className="w-96">
              <span className="font-bold">Rick Sanchez</span> é um cientista
              louco e amoral que, após desaparecer por 20 anos, retorna para a
              sua familia e começa a sair em aventuras fatais e em grande parte,
              traumatizantes, com seu neto, Morty Smith.
            </p>
            <LightBox
              src={rick}
              alt="Rick está voltado para esquerda e babando."
            />
          </div>
          <div className="flex justify-between items-center">
            <LightBox
              src={morty}
              alt="Morty está voltado para a direita e surpreso."
            />
            <p className="w-96">
              <span className="font-bold">Morty Smith</span> é neto de Rick
              Sanchez e frequentemente é forçado a acompanhá-lo em suas várias
              desventuras.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
