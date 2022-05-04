import Image from "next/image";
import Link from "next/link";
import react, {useState, useEffect} from "react";


import { useRef } from "react";
import { useRouter } from "next/router";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  XIcon,
  MenuIcon,
  FlagIcon,
  SearchIcon,
  PlayIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  LocationMarkerIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import NavBarMenu from "./NavBarMenu";

const Header = () => {
  const [visibility, setVisibility] = useState(false);
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/products-table?term=${term}`);
  };
  return (
    <nav class="md:flex justify-between items-center bg-beige shadow dark:bg-gray-800 shadow-md sticky top-0 z-20">
        
            <div class="flex items-center justify-between">
                <div>
                    <a class="p-5">
                    <Image alt="" src="/icon.png" width={30} height={50} layout="fixed" />
                    </a>
                </div>
                
                
                <div class="md:hidden flex item-center justify-between p-5">
                  
                  {visibility ? (
                  <XIcon Icon={MenuIcon} onClick={() => setVisibility(!visibility)} className="block w-10 h-10 p-1 cursor-pointer"/>
                  ) : (<MenuIcon Icon={MenuIcon} onClick={() => setVisibility(!visibility)} className="block w-10 h-10 p-1 cursor-pointer"/>)
                }
                  
                </div>
            </div>

            
            <div class="w-full md:flex md:items-center md:justify-between xs:hidden">
                <div class="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
                    
                    <Link href="/">
                    <a  className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2 hover:text-orange-400">
                      <HeaderIcon Icon={HomeIcon} title="Home" />
                    </a>
                    </Link>

                    <Link href="/team">
                      <a className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2 hover:text-orange-400">
                        <HeaderIcon Icon={UserGroupIcon} title="The Team" />
                      </a>
                    </Link>

                    
                    <Link href="/products">
                      <a  className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2 hover:text-orange-400">
                        <HeaderIcon Icon={ChevronDoubleDownIcon} title="Services" />
                      </a>
                    </Link>

                    
                </div>
                
                <div class="relative px-5">
                    <span class="absolute inset-y-0 left-5 flex items-center pl-3">
                        <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>

                    <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search"/>
                </div>
            </div>
        
        <div>
              {
            visibility?<NavBarMenu/>:null
          }
        </div>
    </nav>
  );
};

export default Header;
