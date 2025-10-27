import { TopBar } from "./TopBar";
import { Item } from "./Item";
import { Instagram, Twitter } from "../icons/Icons";

export const Navbar = () => {
  return (
    <nav className="border-t border-l border-r bg-black border-white w-[450px] max-h-[700px] relative z-50">
      <TopBar />

      <div className="py-6">
        <ul className="flex items-center justify-center flex-col">
          <Item href="/sobre-mi">Sobre mí</Item>
          <Item href="/poesia">Poesía</Item>
          <Item href="/poesia-digital">Poesía Digital</Item>
          <Item href="/prensa">Prensa</Item>
          <Item href="/proyectos">Otros Proyectos</Item>
        </ul>

        <ul className="flex items-center justify-center gap-4">
          <Item href="https://instagram.com/">
            <Instagram size={40} />
          </Item>
          <Item href="https://twitter.com/">
            <Twitter size={40} />
          </Item>
        </ul>
      </div>
    </nav>
  );
};
