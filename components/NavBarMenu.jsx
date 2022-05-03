import React from 'react';

import Link from "next/link";
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


const NavBarMenu = () => {
    return (
     <div>
        <div>
          <ul class="right-0 md:hidden text-right space-y-5 px-5 transition-top">
            <li>
                <Link href="/">
                    <a  className="text-base font-medium text-gray-700 transition-colors duration-200 transform rounded hover:text-gray-100 md:mx-2 hover:text-orange-400">
                      Home
                    </a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/team">
                      <a className=" text-base font-medium text-gray-700 transition-colors duration-200 transform rounded  hover:text-orange-400">
                        The Team
                      </a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/products">
                      <a  className=" text-base font-medium text-gray-700 transition-colors duration-200 transform rounded md:mx-2 hover:text-orange-400">
                        Services
                      </a>
                    </Link>
                    </li>
                    <div class="relative px-5">
                    <span class="absolute inset-y-0 left-5 flex items-center pl-3">
                        <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>

                    <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search"/>
                </div>
                <br/>
            </ul>
        </div>
     </div>
    );
  };
  
  export default NavBarMenu;