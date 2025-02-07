import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/icon.png";
import NavBar from "../navBar/NavBar";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 bg-gray-100 shadow p-4">
        <div className="container flex justify-between items-center">
          <Link href="/">
            <Image src={logo} alt="Rick and Morty Logo" />
          </Link>
          <NavBar />
        </div>
      </header>
    </>
  );
}
