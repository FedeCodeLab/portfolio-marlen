import { Cancel } from "@/_components/icons/Icons";
import { ReactNode } from "react";

export const WindowsDark = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-black border-4 border-l-[#DEDEDE] border-b-[#848484] border-r-[#848484] border-t-[#DEDEDE]">
      <div className="flex items-center justify-between bg-[#5E17EB] px-3 py-1">
        <p>Bloc de notas</p>
        <div className="flex items-center gap-2">
          <span className="bg-black text-white border-2 border-l-[#FFFFFF] border-t-[#FFFFFF] border-r-[#848484] border-b-[#848484]">
            <Cancel />
          </span>
          <span className="bg-black text-white border-2 border-l-[#FFFFFF] border-t-[#FFFFFF] border-r-[#848484] border-b-[#848484]">
            <Cancel />
          </span>
          <span className="bg-black text-white border-2 border-l-[#FFFFFF] border-t-[#FFFFFF] border-r-[#848484] border-b-[#848484]">
            <Cancel />
          </span>
        </div>
      </div>
      <div className="px-1 py-4">
        <div className="bg-black border-2 px-2 py-1 border-[#848484] text-white">
          {children}
        </div>
      </div>
    </div>
  );
};
