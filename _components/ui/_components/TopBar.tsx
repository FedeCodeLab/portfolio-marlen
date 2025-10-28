import { Cancel } from "@/_components/icons";
import Image from "next/image";

export const TopBar = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-between bg-[#01017B] dark:bg-[#5E17EB] px-3 py-1">
      <div className="flex items-center gap-2">
        <Image src="/bloc2.png" alt="cmd-icon" height={24} width={20} />
        <p className="h-6">{title}</p>
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
