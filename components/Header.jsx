import Image from "next/image";
import Link from "next/link";
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

const Header = () => {
  const router = useRouter();
  return (
    <div classNameName="sticky z-50 top-0 bg-white flex items-center p-2 lg:px-5 shadow-md">
      <div classNameName="flex items-center">
        <Link href="/">
          <a>
            <Image alt="" src="/icon.png" width={30} height={50} layout="" />
          </a>
        </Link>

        <div classNameName="flex ml-10 item-center rounded-full bg-gray-100 p-2">
          <SearchIcon classNameName="h-6 text-gray-500 flex-shrink" />
          <input
            classNameName="flex ml-2 items-center bg-transparent outline-none"
            type="text"
            placeholder="Search Services"
          />
        </div>
      </div>

      <div classNameName="flex justify-center flex-grow">
        <div classNameName="flex space-x-6 md:space-x-2">
          <Link href="/">
            <a>
              <HeaderIcon Icon={HomeIcon} title="Home" />
            </a>
          </Link>

          <Link href="/team">
            <a>
              <HeaderIcon Icon={UserGroupIcon} title="The Team" />
            </a>
          </Link>

          <HeaderIcon Icon={ShieldCheckIcon} title="Insurance" />
          <HeaderIcon Icon={LocationMarkerIcon} title="Your Location" />
          <Link href="/products">
            <a>
              <HeaderIcon Icon={ChevronDoubleDownIcon} title="Services" />
            </a>
          </Link>
        </div>
      </div>

      <div classNameName="flex items-center sm:space-x-2 justify-end">
        <p classNameName="whitespace-nowrap font-semibold pr-3">Philip Gehde</p>
        <ViewGridIcon classNameName="icon" />

        <BellIcon classNameName="icon" />
        <ChevronDownIcon classNameName="icon" />
      </div>
    </div>
  );
};

export default Header;
