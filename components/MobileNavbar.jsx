import { Search, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import React from "react";

const MobileNavbar = () => {
  return (
    <div className="sm:hidden fixed top-0 left-0 w-full h-16 p-2 border-b border-gray-300 flex">
      <Image src="/images/logo-sm.png" alt="" width={120} height={120} />
      <div className="border border-gray-300 w-full h-12 rounded-full text-sm flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <Search size={20} color="#9a9a9a" />
          <div className="flex flex-col text-xs">
            <div className="font-bold">Anywhere</div>
            <div className="flex gap-1">
              <span>Any week</span>
              <span>|</span>
              <span>Add guests</span>
            </div>
          </div>
        </div>
        <SlidersHorizontal />
      </div>
    </div>
  );
};

export default MobileNavbar;
