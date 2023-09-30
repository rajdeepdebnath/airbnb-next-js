import Image from "next/image";
import NavSearch from "./NavSearch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { MenuIcon } from "lucide-react";
import LoginModal from "./auth/LoginModal";
import SignupModal from "./auth/SignupModal";

const Navbar = () => {
  return (
    <div className="hidden fixed top-0 left-0 w-full h-12 sm:flex items-center justify-between px-5 py-8 border border-gray-300">
      <div>
        <Image src="/images/logo.png" alt="" width={120} height={120} />
      </div>
      <div>
        <NavSearch />
      </div>
      <div className="flex space-x-1 text-sm text-gray-900">
        <span>Add your home</span>
        <Popover>
          <PopoverTrigger asChild>
            <MenuIcon />
          </PopoverTrigger>
          <PopoverContent className="mr-3">
            <ul>
              <LoginModal />
              <SignupModal />
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
