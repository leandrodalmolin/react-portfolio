import React from "react";
import { Menu } from "../ui/Menu";

export const SideBar = React.forwardRef(({ onCloseSidebar }, ref) => {
  return (
    <div ref={ref} className="fixed w-screen h-screen bg-zinc-900 backdrop-filter backdrop-blur-sm bg-opacity-95 z-10 flex items-center justify-center text-center md:hidden">
      <Menu className="text-4xl font-bold flex flex-col gap-4" onLinkClick={onCloseSidebar} />
    </div>
  );
});