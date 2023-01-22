import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import logo from "../../public/logoBlue.png";
import { AiOutlineArrowUp } from "react-icons/ai";

export const NavBar = ({ setDarkMode, darkMode }) => {
  return (
    <div>
      <nav
        id='nav'
        className='fixed w-full bg-white py-3 px-5 mb-3 flex justify-between dark:text-white dark:bg-black'
      >
        {/* LOGO NOMBRE */}
        <div className='flex flex-row justify-start'>
          <Image
            src={logo}
            alt='logo'
            title='Pedro Venegas'
            className='w-12 h-12 object-cover md:ml-10'
          />
          <div id='nameTitular' className='pl-3 flex flex-col font-semibold'>
            <p className='text-black'>PEDRO</p>
            <p className='text-black'>VENEGAS</p>
          </div>
        </div>

        <div>
          <ul className='flex items-center md:mr-5'>
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className='cursor-pointer text-2xl ease-in duration-100 hover:text-teal-600'
              />
            </li>
            <li className='ml-8 cursor-pointer text-2xl'>
              <a
                href='#'
                className='transition-all ease-in duration-100 hover:text-teal-600'
              >
                <AiOutlineArrowUp />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
