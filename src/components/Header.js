import Image from "next/image";
import {useRouter} from 'next/router'
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";


import {  signIn, signOut ,useSession } from "next-auth/client";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
function Header() {
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header className=" sticky top-0 z-50 shadow-2xl">
      {/* Top nav */}
      <div
        className="flex item-center bg-amazon_blue
      p-1 flex-grow py-2  "
      >
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
          onClick={()=>{router.push('/')}}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            className="cursor-pointer"
            objectFit="contain"
          />
        </div>
        {/* custom search element */}
        <div
          className="hidden sm:flex  h-10 rounded-md
        bg-yellow-400 hover:bg-yellow-500 cursor-pointer
         flex-grow items-center 
         ;
            "
        >
          <input
            type="text"
            className="p-2 px-4  h-full w-6 flex-grow rounded-md focus:outline-none"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        <div
          className="text-white flex items-center
            text-sm space-x-6 mx-6 whitespace-nowrap
        "
        >
          <div onClick={signIn} className="link">
            <p className="">hello k4</p>
            <p className="font-extrabold md:text-sm">Account & lists</p>
          </div>
          <div className="link">
            <p> Returns</p>
            <p className="font-extrabold md:text-sm">&orders</p>
          </div>
          <div
          onClick={()=>router.push('/checkout')}
          className="relative link flex items-center">
            <ShoppingCartIcon className="h-10" />
            <p className="hidden mt-2 md:inline font-extrabold md:text-sm">
              Baskets
            </p>
            <span
              className="absolute top-0 right-0 md:right-10
            h-4 w-4 bg-yellow-400 text-center text-black font-bold rounded-full
            "
            >
              {items.length}
            </span>
          </div>
        </div>
      </div>

      {/* bottom nav */}

      <div
        className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light
      text-white text-sm
      "
      >
        <p className="link flex items-center">
          {" "}
          <MenuIcon className="h-6 mr-1" />
          All{" "}
        </p>
        <p className="link">Prime Videos</p>
        <p className="link">Amazons business</p>
        <p className="link">Today's Deals</p>
        <p className="hidden lg:inline-flex">Prime Videos</p>
        <p className="hidden lg:inline-flex">Buy Again</p>
        <p className="hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="hidden lg:inline-flex">Electronics</p>
      </div>
    </header>
  );
}

export default Header;
