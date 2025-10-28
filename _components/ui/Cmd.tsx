import { TopBar } from "./_components/TopBar";
import { ReactNode } from "react";

export const Cmd = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#BFBFBF] dark:bg-black border-4 border-l-[#DEDEDE] border-b-[#848484] border-r-[#848484] border-t-[#DEDEDE]">
      <TopBar title="Bloc de Notas" />
      <div className="px-1 py-4">
        <div className="bg-white text-black dark:bg-black dark:text-white border-2 px-2 py-1 border-[#848484]">
          {children}
        </div>
      </div>
    </div>
  );
};
