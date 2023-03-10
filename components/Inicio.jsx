import Image from "next/image";
import perfil from "../public/perfil-home.jpg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ButtonPDF from "./buttons/ButtonPDF";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Inicio = () => {
  const t = useTranslations();

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 800,
    });
  }, []);

  return (
    <div className='w-full container m-auto overflow-x-hidden'>
      <div className='text-center px-14 pt-28 md:pt-40 md:px-10 md:flex md:flex-row-reverse md:justify-between lg:pt-32 lg:px-20'>
        {/* Sobre Mi */}

        <div
          className='md:mr-5 md:pt-8'
          data-aos='fade-left'
          data-aos-anchor='#example-anchor'
          data-aos-offset='500'
          data-aos-duration='800'
        >
          <h2 className='text-3xl py-2 text-teal-600 font-medium dark:text-teal-400'>
            Pedro Venegas
          </h2>
          <h3 className='text-zinc-800 text-[20px] py-0 font-semibold dark:text-white'>
            {t("contact.developer")}
          </h3>
          <p className='flex justify-center items-center text-justify text-lg py-4 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-[22px]'>
            {t("contact.presentation")}
          </p>
        </div>

        {/* LinkedIn y GitHub */}

        <div
          data-aos='fade-down'
          data-aos-easing='linear'
          data-aos-duration='800'
          className='text-6xl flex justify-center gap-16 py-3 text-gray-600  dark:text-gray-400 md:px-10 md:text-5xl md:flex-col lg:text-7xl'
        >
          <a
            href='https://github.com/pvenegas30'
            target='_blank'
            rel='noreferrer'
            className='cursor-pointer hover:text-teal-600 ease-in duration-100'
          >
            <AiFillGithub title='GitHub Pedro Venegas' />
          </a>
          <a
            href='https://www.linkedin.com/in/pedro-venegas-086bb8205'
            className='cursor-pointer hover:text-teal-600 ease-in duration-100'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillLinkedin title='LinkedIn Pedro Venegas' />
          </a>
        </div>

        {/* Perfil img */}

        <div
          data-aos='fade-right'
          data-aos-anchor='#example-anchor'
          data-aos-offset='500'
          data-aos-duration='800'
          className='flex justify-center items-center mx-auto w-56 h-56 mt-5 md:pt-5 md:h-72 md:w-72 md:mx-0 lg:h-[300] lg:w-[300]'
        >
          <Image
            src={perfil}
            alt='perfil'
            className='rounded-full object-cover '
          />
        </div>
      </div>
      {/* Bot??n Download */}
      <div
        data-aos='fade-left'
        data-aos-anchor='#example-anchor'
        data-aos-offset='500'
        data-aos-duration='800'
        className='w-full flex justify-center items-center gap-x-5 md:justify-end md:pr-[12%] lg:pr-[18%] md:gap-x-10'
      >
        <ButtonPDF />

        <Link href='/contact'>
          <button className='cursor-pointer my-10 md:my-5 bg-teal-600 text-white font-semibold tracking-wide py-3 px-4 rounded-3xl text-sm md:text-md md:px-5 hover:bg-teal-700 active:bg-teal-800 dark:bg-teal-400 dark:text-black'>
            {t("contact.home")}
          </button>
        </Link>
      </div>
    </div>
  );
};
