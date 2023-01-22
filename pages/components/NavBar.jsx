import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import logo from "../../public/logoBlue.png";
import { AiOutlineArrowUp } from "react-icons/ai";

export const NavBar = ({ setDarkMode, darkMode }) => {
  return (
    <nav
      id='nav'
      className='fixed w-full bg-white py-3 px-5 mb-12 flex justify-between dark:text-white dark:bg-black'
    >
      <Image
        src={logo}
        alt='logo'
        className='w-12 h-12 object-cover md:ml-10'
      />
      <p className='text-black'>PEDRO VENEGAS</p>
      <ul className='flex items-center md:mr-5'>
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className='cursor-pointer text-2xl'
          />
        </li>
        <li className='ml-8 cursor-pointer text-2xl'>
          <a href='#' className='transition-all ease-in duration-300'>
            <AiOutlineArrowUp />
          </a>
        </li>
      </ul>
    </nav>
  );
};
