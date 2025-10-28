import { TopBarLink } from "../ui/_components/TopBarLink";
import { Instagram, Twitter } from "../icons";
import { Item } from "./Item";

export const Navbar = () => {
  return (
    <nav className="bg-black border-4 border-l-[#DEDEDE] border-b-[#848484] border-r-[#848484] border-t-[#DEDEDE] w-[450px] max-h-[700px] relative z-50">
      <TopBarLink />

      <div className="px-1 py-4">
        <div className="bg-black text-white">
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
      </div>
    </nav>
  );
};
