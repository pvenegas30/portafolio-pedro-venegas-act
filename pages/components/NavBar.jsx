import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import Image from "next/image";
import logo from "../../public/logoBlue.png";
import logoW from "../../public/logoWhite.png";
import Link from "next/link";

export const NavBar = ({ darkOn }) => {
  let Links = [
    { name: "INICIO", link: "/home" },
    { name: "PORTAFOLIO", link: "/portofolio" },
    { name: "SERVICIOS", link: "/services" },
    { name: "CONTACTO", link: "/contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <nav
      id='nav'
      className='fixed w-full bg-white py-3 px-5 mb-3 flex justify-between dark:text-white dark:bg-black transition-all duration-500 ease-in'
    >
      <div>
        <Link className='flex flex-row' href='/home'>
          <Image
            src={logo}
            alt='logo'
            title='Pedro Venegas'
            className='w-12 h-12 object-cover md:ml-6 dark:hidden'
          />

          <Image
            src={logoW}
            alt='logoW'
            title='Pedro Venegas'
            className='w-12 h-12 object-cover hidden md:ml-6 dark:block'
          />

          <span className='flex flex-col pl-3 font-semibold '>
            <p className='text-black dark:text-white hidden md:block'>PEDRO</p>
            <p className='text-black dark:text-white hidden md:block'>VENEGAS</p>
          </span>
        </Link>
      </div>
      {/* TEXT LINKS BAR */}
      <div className='flex justify-center items-center text-right'>
        <ul
          className={`pr-8 transition-all duration-500 ease-in left-0 w-full pb-12 absolute bg-white shadow-[0px_11px_16px_0px_#5555553b] md:shadow-[0px_0px_0px_0px_000] dark:bg-black md:flex md:items-center md:z-auto z-[1] md:w-auto md:pb-0 md:static md:pl-0 ${
            open ? "top-[70px] " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className='w-full md:ml-5 text-xl md:text-lg md:my-0 my-7'
            >
              <Link
                href={link.link}
                className=' text-black hover:text-teal-400 focus:text-teal-600 dark:hover:text-teal-200 dark:focus:text-teal-400 dark:text-white duration-500'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* ICONS BAR */}
      <div className='flex items-center justify-center gap-x-5 md:mr-5'>
        <div
          className='flex items-center justify-center text-2xl'
          title='Modo Oscuro'
        >
          <BsFillMoonStarsFill
            onClick={darkOn}
            className='cursor-pointer hover:text-teal-600 transition-all duration-200 ease-in'
          />
        </div>

        <div className='flex items-center justify-center' title='Subir'>
          <a
            href='#'
            className=' text-3xl hover:text-teal-600 transition-all duration-200 ease-in'
          >
            <AiOutlineArrowUp />
          </a>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='flex items-center justify-center cursor-pointer md:hidden text-4xl hover:text-teal-600 transition-all duration-200 ease-in'
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
      </div>
    </nav>
  );
};
