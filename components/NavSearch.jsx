import { Search } from "lucide-react";
import React from "react";

const NavSearch = () => {
  return (
    <div className="text-sm text-gray-900 flex items-center border p-2 rounded-2xl space-x-2">
      <span>Anywhere</span>
      <span>|</span>
      <span>Any week</span>
      <span>|</span>
      <span>Add guests</span>
      <div className="p-1 rounded-full bg-red-500">
        <Search size={11} color="white" />
      </div>
    </div>
  );
};

export default NavSearch;
