import { Cancel } from "@/_components/icons";
import Image from "next/image";
import Link from "next/link";

export const TopBarLink = () => {
  return (
    <div className="flex items-center justify-between bg-[#01017B] dark:bg-[#5E17EB] px-3 py-1">
      <div className="flex items-center gap-2">
        <Image src="/cmd.png" alt="cmd-icon" height={20} width={24} />
        <Link href={"/"} className="font-semibold text-[18px] underline">
          Volver al Inicio
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <span className="bg-[#BFBFBF] text-black dark:bg-black dark:text-white border-2 border-l-[#FFFFFF] border-t-[#FFFFFF] border-r-[#848484] border-b-[#848484]">
          <Cancel />
        </span>
        <span className="bg-[#BFBFBF] text-black dark:bg-black dark:text-white border-2 border-l-[#FFFFFF] border-t-[#FFFFFF] border-r-[#848484] border-b-[#848484]">
          <Cancel />
        </span>
        <span className="bg-[#BFBFBF] text-black dark:bg-black dark:text-white border-2 border-l-[#FFFFFF] border-t-[#FFFFFF] border-r-[#848484] border-b-[#848484]">
          <Cancel />
        </span>
      </div>
    </div>
  );
};
