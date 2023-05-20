"use client";

import React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);
  const currentpath = usePathname();

  return (
    <nav className="bg-dark-gray z-50">
      <div
        id="navigation-container"
        className="relative py-9 px-4 xl:px-0 max-w-6xl mx-auto my-0 flex justify-between items-center border-b border-white/10"
      >
        <div
          className="block lg:hidden"
          onClick={() => setIsMenuOpened(!isMenuOpened)}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="text-white hover:text-lamb cursor-pointer"
            height={16}
          />
        </div>
        <Image src={logo} alt="Audiophile" className="w-auto h-6" />
        <ul
          className={`hidden list-none p-0 m-0 lg:flex justify-center items-center gap-[34px]`}
        >
          <li
            className={`p-0 m-0 ${
              currentpath === "/" ? "text-lamb" : ""
            } hover:text-lamb tracking-[2px] text-xs font-bold`}
          >
            <Link href="/home" className="uppercase">
              home
            </Link>
          </li>
          <li className="p-0 m-0 hover:text-lamb tracking-[2px] text-xs font-bold">
            <Link href="/headphones" className="uppercase">
              headphones
            </Link>
          </li>
          <li className="p-0 m-0 hover:text-lamb tracking-[2px] text-xs font-bold">
            <Link href="/speakers" className="uppercase">
              speakers
            </Link>
          </li>
          <li className="p-0 m-0 hover:text-lamb tracking-[2px] text-xs font-bold">
            <Link href="/earphones" className="uppercase">
              earphones
            </Link>
          </li>
        </ul>
        <ul
          className={`${
            isMenuOpened ? "flex" : "hidden"
          }  lg:hidden flex-col gap-8 fixed left-0 top-16 right-0 bg-dark-gray z-10 p-4 shadow-lg rounded-b-2xl`}
        >
          <li
            className={`p-0 m-0 ${
              currentpath === "/" ? "text-lamb" : ""
            } hover:text-lamb tracking-[2px] font-bold`}
          >
            <Link href="/home" className="uppercase">
              home
            </Link>
          </li>
          <li className="p-0 m-0 hover:text-lamb tracking-[2px] font-bold">
            <Link href="/headphones" className="uppercase">
              headphones
            </Link>
          </li>
          <li className="p-0 m-0 hover:text-lamb tracking-[2px] font-bold">
            <Link href="/speakers" className="uppercase">
              speakers
            </Link>
          </li>
          <li className="p-0 m-0 hover:text-lamb tracking-[2px] font-bold">
            <Link href="/earphones" className="uppercase">
              earphones
            </Link>
          </li>
        </ul>
        <div>
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-white hover:text-lamb cursor-pointer"
            height={16}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
