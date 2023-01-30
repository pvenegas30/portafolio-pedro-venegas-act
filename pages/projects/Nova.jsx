import Image from "next/image";
import React from "react";
import novarq from "../../public/projects/nova.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export const Nova = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className='w-full pt-20'>
      <div className='w-full h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1 w-full h-[50vh] object-cover'
          src={novarq}
          alt='/'
        />

        <div className='absolute top-[70%] max-w-[80%] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 font-bold text-2xl md:text-4xl lg:text-5xl '>
            Nova
          </h2>
          <h3 className='text-xl font-bold text-white'>{t("nova.type")}</h3>
        </div>
      </div>

      <div className='max-w-[1240px] z-10 mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 px-20'>
        <div className='col-span-4'>
          <h2 className='py-2 text-xl font-bold pb-6 text-teal-800 dark:text-teal-400'>
            {t("services.dev.title")}
          </h2>
          <p className='text-black dark:text-white text-justify'>
            {t("nova.description")}
          </p>

          <div className='flex justify-center items-center pt-10'>
            <Link
              href='https://github.com/pvenegas30'
              target='_blank'
              rel='noreferrer'
            >
              <button className='rounded-full bg-teal-600 px-8 py-2 mt-4 mr-8 text-white font-bold'>
                {t("cod")}
              </button>
            </Link>
            <Link
              href='https://nova-architecture.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='rounded-full bg-teal-600 px-8 py-2 mt-4 text-white font-bold'>
                Demo
              </button>
            </Link>
          </div>
        </div>
        <div className='dark:bg-gray-100 col-span-4 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-gray-800 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2 '>{t("tech.project")}</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600  py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TailWind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TailWind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Styled Components
              </p>
            </div>
          </div>
        </div>

        <Link
          href='/projects'
          className='flex flex-row justify-center items-center'
        >
          <AiOutlineArrowLeft className='text-gray-700 dark:text-white' />
          <p className='text-gray-700 font-semibold tracking-wide p-3 rounded-3xl text-sm md:text-md	 md:px-5cursor-pointer  dark:text-white'>
            {t("go.back")}
          </p>
        </Link>
      </div>
    </div>
  );
};
