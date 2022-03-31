import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  SHoppingCartIcon,
} from "@heroicons/react/outline";
import {signIn, signOut, useSession} from "next-auth/react";

const Header = () => {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 px-6">
          <div className="link" onClick={signIn}>
            <p>Hello, Pedro</p>
            <p className="font-extrabold text-base md:text-sm">
              Account & Lists
            </p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold text-base md:text-sm">& Orders</p>
          </div>
          <div className="relative flex items-center flex-row whitespace-nowrap link">
            <span className="absolute top-0 right-0 md:right-8 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold text-base md:text-sm mt-2">
              Cart
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center font-extrabold">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <div className="hidden lg:inline-flex space-x-3">
          <p className="link">Electronics</p>
          <p className="link">Fool & Grocery</p>
          <p className="link">Prime</p>
          <p className="link">Buy Again</p>
          <p className="link">Shopper Toolkit</p>
          <p className="link">Health & Personal Care</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
