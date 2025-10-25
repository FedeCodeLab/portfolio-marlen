import Link from "next/link";
import { Cancel } from "../icons/Icons";

export const TopBar = () => {
  return (
    <div className="bg-[#5E17EB] w-full flex items-center justify-between py-2 px-4">
      <Link href={"/"} className="font-semibold text-[18px] underline">
        Volver al Inicio
      </Link>
      <div className="size-6 bg-black text-white border border-white flex items-center justify-center">
        <span className="p-1">
          <Cancel />
        </span>
      </div>
    </div>
  );
};
