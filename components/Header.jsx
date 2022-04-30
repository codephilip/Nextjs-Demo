import Image from "next/image";
import Link from "next/link";
import react, {useState} from "react";
import { useRouter } from "next/router";

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
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
  return (
    <nav class="bg-beige shadow dark:bg-gray-800 shadow-md">
        <div class="container px-6 py-3 mx-auto md:flex">
            <div class="flex items-center justify-between">
                <div>
                    <a class="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                    <Image alt="" src="/icon.png" width={30} height={50} layout="fixed" />
                    </a>
                </div>
                
                
                <div class="flex md:hidden">
                  <button class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" className="hover:text-orange" onClick={() => setVisibility(!visibility)}>
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                  </button>
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
                
                <div class="relative">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>

                    <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search"/>
                </div>
            </div>
        </div>
        <div>
              {
            visibility?<NavBarMenu/>:null
          }
        </div>
    </nav>
/* <header className="sticky z-50 top-0 bg-white flex items-center p-2 lg:px-5 shadow-md">
	<div className="container flex justify-between h-16 mx-auto flex items-center">
		<div className="flex">
        <Link href="/">
          <a class="flex-shrink-0" >
            <Image alt="" src="/icon.png" width={30} height={50} layout="fixed" />
          </a>
        </Link>
        <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <Link href="/">
            <a  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-orange-400">
              <HeaderIcon Icon={HomeIcon} title="Home" />
            </a>
          </Link>

          <Link href="/team">
            <a className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-orange-400">
              <HeaderIcon Icon={UserGroupIcon} title="The Team" />
            </a>
          </Link>

          
          <Link href="/products">
            <a  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-orange-400">
              <HeaderIcon Icon={ChevronDoubleDownIcon} title="Services" />
            </a>
          </Link>
        </div>
      </div>
		</div>
		<div className="flex items-center">
      
        <div className="flex ml-10 item-center rounded-full bg-grey-100 p-2">
          <SearchIcon className="h-6 text-grey-500 flex-shrink" />
          <input
            className="hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none"
            type="text"
            placeholder="Search Services"
          />
        </div>
        </div>
	</div>
</header> */
  );
};

export default Header;
