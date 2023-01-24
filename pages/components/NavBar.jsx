import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import logo from "../../public/logoBlue.png";
import { AiOutlineArrowUp } from "react-icons/ai";

export const NavBar = ({ setDarkMode, darkMode }) => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <nav
      id='nav'
      className='fixed w-full bg-white py-3 px-5 mb-3 flex justify-between dark:text-white dark:bg-black'
    >
      <div className='flex'>
        <Image
          src={logo}
          alt='logo'
          title='Pedro Venegas'
          className='w-12 h-12 object-cover md:ml-10'
        />
        <p className='text-black'>PEDRO VENEGAS</p>
      </div>

      <div className='flex items-center md:mr-5'>
        <div>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className='cursor-pointer text-2xl'
          />
        </div>

        <div>
          <a href='#' className='transition-all ease-in duration-300'>
            <AiOutlineArrowUp />
          </a>
        </div>
      </div>
    </nav>
  );
};
