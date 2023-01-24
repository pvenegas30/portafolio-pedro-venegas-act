import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import logo from "../../public/logoBlue.png";
import { AiOutlineArrowUp } from "react-icons/ai";

const Nav = ({ setDarkMode, darkMode }) => {
  let Links = [
    { name: "INICIO", link: "/inicio" },
    { name: "SERVICIOS", link: "/servicios" },
    { name: "PORTAFOLIO", link: "/portafolio" },
    { name: "CONTACTO", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 dark:bg-black'>
      <nav
        id='nav'
        className='fixed w-full bg-black py-3 px-5 mb-3 flex justify-between dark:text-white dark:bg-black'
        aria-label='navbar'
      >
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7 dark:bg-black'>
          {/* LOGO NOMBRE */}
          <div className='flex flex-row'>
            <div className='flex flex-row justify-start'>
              <Image
                src={logo}
                alt='logo'
                title='Pedro Venegas'
                className='w-12 h-12 object-cover md:ml-10'
              />
            </div>

            <div
              id='nameTitular'
              className=' text-gray-800 text-lg cursor-pointer pl-3 flex flex-col font-semibold font-[Poppins]'
            >
              <p className='text-black'>PEDRO</p>
              <p className='text-black'>VENEGAS</p>
            </div>
          </div>

          {/* LISTA DE PAGS */}

          <div>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white dark:bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-20 " : "top-[-490px]"
              }`}
            >
              {Links.map((link) => (
                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                  <a
                    href={link.link}
                    className='text-black dark:text-white hover:text-teal-600 duration-500'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ICONS NAVBAR */}
        <div className='flex justify-center items-center gap-x-3'>
          {/* DARKMODE*/}
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className='text-3xl cursor-pointer ease-in duration-100 hover:text-teal-600'
          />

          {/* UP */}
          <a
            href='#'
            className='text-4xl transition-all ease-in duration-100 hover:text-teal-600'
          >
            <AiOutlineArrowUp />
          </a>
          {/* ICON BAR */}
          <div
            onClick={() => setOpen(!open)}
            // className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
            className='flex items-center text-5xl md:hidden'
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
