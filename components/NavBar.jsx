import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import NavLogo from "../public/logoBlue.png";
import NavLogoW from "../public/logoWhite.png";
import { useTranslation } from "react-i18next";
import UpButton from "./buttons/UpButton";
import Idioma from "./../pages/Idioma";

const NavBar = ({ darkOn }) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  // IDIOMA

  const { t, i18n } = useTranslation();

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className='bg-white flex justify-between items-center w-full h-full px-2 dark:bg-black transition-all duration-500 ease-in'>
        <div>
          <Link className='flex flex-row' href='/home'>
            <Image
              src={NavLogo}
              alt='NavLogo'
              title='Pedro Venegas'
              className='w-12 h-12 object-cover md:ml-6 dark:hidden'
            />

            <Image
              src={NavLogoW}
              alt='NavLogoW'
              title='Pedro Venegas'
              className='w-12 h-12 object-cover hidden md:ml-6 dark:block'
            />

            <span className='flex flex-col pl-3 font-semibold '>
              <p className='text-black dark:text-white hidden md:block'>
                PEDRO
              </p>
              <p className='text-black dark:text-white hidden md:block'>
                VENEGAS
              </p>
            </span>
          </Link>
        </div>
        {/* Text Bar */}
        <div className='flex justify-center items-center text-right dark:text-white'>
          <ul className='w-full hidden md:flex '>
            <li className=' md:text-lg md:my-0 my-7'>
              <Link
                className='text-xl text-black hover:text-teal-400 focus:text-teal-600 dark:hover:text-teal-200 dark:focus:text-teal-400 dark:text-white duration-500'
                href='/'
              >
                {t("navbar.home")}
              </Link>
            </li>
            <li className='ml-14 md:ml-5 md:text-lg md:my-0 my-7'>
              <Link
                className='text-xl text-black hover:text-teal-400 focus:text-teal-600 dark:hover:text-teal-200 dark:focus:text-teal-400 dark:text-white duration-500'
                href='/portofolio'
              >
                {t("navbar.portofolio")}
              </Link>
            </li>
            <li className='ml-14 md:ml-5 md:text-lg md:my-0 my-7'>
              <Link
                className='text-xl text-black hover:text-teal-400 focus:text-teal-600 dark:hover:text-teal-200 dark:focus:text-teal-400 dark:text-white duration-500'
                href='/services'
              >
                {t("navbar.services")}
              </Link>
            </li>
            <li className='ml-14 md:ml-5 md:text-lg md:my-0 my-7'>
              <Link
                className='text-xl text-black hover:text-teal-400 focus:text-teal-600 dark:hover:text-teal-200 dark:focus:text-teal-400 dark:text-white duration-500'
                href='/contact'
              >
                {t("navbar.contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* ICON DARKMODE */}
        <div className='flex items-center justify-center gap-x-5 md:mr-5'>
          <div
            className='flex items-center justify-center text-2xl'
            title='Modo Oscuro'
          >
            <BsFillMoonStarsFill
              onClick={darkOn}
              className='cursor-pointer hover:text-teal-600 dark:text-white transition-all duration-200 ease-in'
            />
          </div>

          <div>
            <Idioma />
          </div>
          {/* Hamburger Icon */}
          <div
            onClick={handleNav}
            className=' text-black md:hidden cursor-pointer dark:text-white'
          >
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-gray-900 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image
                src={NavLogo}
                alt='NavLogo'
                title='Pedro Venegas'
                className='w-12 h-12 object-cover md:ml-6 dark:hidden'
              />

              <Image
                src={NavLogoW}
                alt='NavLogoW'
                title='Pedro Venegas'
                className='w-12 h-12 object-cover hidden md:ml-6 dark:block'
              />
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  dark:bg-white dark:shadow-gray-800'
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          {/* LINKSNAV */}
          <div className='py-14 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 text-md font-bold tracking-widest dark:text-white'
                >
                  {t("navbar.home")}
                </li>
              </Link>
              <Link href='/portofolio'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 text-md font-bold tracking-widest dark:text-white'
                >
                  {t("navbar.portofolio")}
                </li>
              </Link>
              <Link href='/services'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 text-md font-bold tracking-widest dark:text-white'
                >
                  {t("navbar.services")}
                </li>
              </Link>
              <Link href='/contact'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 text-md font-bold tracking-widest dark:text-white'
                >
                  {t("navbar.contact")}
                </li>
              </Link>
            </ul>
            <div className='pt-[70px] flex flex-col justify-center items-center'>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <Link
                  href='https://www.linkedin.com/in/pedro-venegas-086bb8205'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-white dark:shadow-gray-800'>
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link
                  href='https://github.com/pvenegas30'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-white dark:shadow-gray-800'>
                    <FaGithub />
                  </div>
                </Link>
                <Link href='/contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-white dark:shadow-gray-800'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
              <p className='text-center font-medium text-md text-teal-600 dark:text-white'>
                Pedro Venegas ©2023
              </p>
            </div>
          </div>
        </div>
      </div>
      <UpButton />
    </div>
  );
};

export default NavBar;
