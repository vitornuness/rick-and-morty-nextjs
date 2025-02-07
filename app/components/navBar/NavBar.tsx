import NavLink from "../navLink/NavLink";

export default function NavBar() {
  return (
    <>
      <nav className="flex gap-4">
        <NavLink href="/">Início</NavLink>
        <NavLink href="/characters">Personagens</NavLink>
      </nav>
    </>
  );
}
