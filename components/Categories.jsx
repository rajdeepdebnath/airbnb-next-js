import { categories } from "@/config/categories";
import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className="flex space-x-6 text-sm whitespace-nowrap hover:overflow-x-auto pb-4">
      {categories.map((c) => (
        <div key={c.name} className="flex flex-col items-center">
          <Image src={c.icon} width={20} height={20} alt={c.name} />
          <span>{c.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
