import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const MoviesTime = () => {
  const t = useTranslations();
  return (
    <div className='2xl:container 2xl:m-auto w-full h-full'>
      <div className=' relative flex justify-center flex-col h-full md:h-[500px] w-full'>
        <div
          className=' w-full h-full rounded-2xl bg-center bg-cover duration-500'
          id='imgMovies'
        ></div>

        <div className='py-5 md:py-14 absolute w-full md:h-[80px] m-auto bg-black/70 opacity-5 z-10 text-xl md:text-2xl text-white font-bold text-center'>
          <h2 className='py-2'>MoviesTime</h2>
          <hr className=' bg-teal-500'></hr>
          <h3 className='py-2'>HTML | CSS3 | React JS | LocalStorage</h3>
        </div>
      </div>

      <div className=' pt-10 max-w-[1240px] z-10 mx-auto p-2 flex gap-8 py-8 px-20 flex-col md:flex-row'>
        <div className='col-span-4'>
          <h2 className='py-2 px-8 text-xl font-bold pb-6 text-teal-800 dark:text-teal-400'>
            {t("services.title")}
          </h2>
          <p className='text-black dark:text-white text-justify px-8'>
            {t("nova.description")}
          </p>

          <div className='flex justify-center items-center pt-10  gap-x-10'>
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
        <div className='dark:bg-gray-100 col-span-4 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-gray-800 rounded-xl py-4 px-8 mr-4'>
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
      </div>
      <Link
        href='/projects'
        className='flex flex-row text-left items-center w-[100%] py-10 mt-8 px-8'
      >
        <AiOutlineArrowLeft className='text-gray-700 dark:text-white pl-10 ' />
        <p className='text-gray-700 font-semibold tracking-wide p-3 rounded-3xl text-sm md:text-md	 md:px-5cursor-pointer  dark:text-white'>
          {t("go.back")}
        </p>
      </Link>
    </div>
  );
};
