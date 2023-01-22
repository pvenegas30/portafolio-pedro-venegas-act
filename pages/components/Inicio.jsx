import React from "react";
import Image from "next/image";
import perfil from "../../public/perfil-home.jpg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Inicio = () => {
  return (
    <div className='w-full'>
      <div className='text-center px-14 pt-28 md:pt-40 md:px-10 md:flex md:flex-row-reverse md:justify-between lg:pt-32 lg:px-20'>
        <div className='md:mr-5 md:pt-8'>
          <h2 className='text-4xl py-2 text-teal-600 font-medium dark:text-teal-400 '>
            Pedro Venegas
          </h2>
          <h3 className='text-zinc-800 text-2xl py-2 font-semibold dark:text-white'>
            Desarrollador Web Full-Stack
          </h3>
          <p className='flex justify-center items-center text-justify text-lg py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl lg:text-2xl'>
            ¡Hola! Me considero una persona creativa, responsable y con
            iniciativa. Realicé mis estudios en varios cursos profesionales y
            siempre me encuentro aprendiendo para mejorar cada vez más mis
            habilidades.
          </p>
        </div>

        <div className='text-6xl flex justify-center gap-16 py-3 text-gray-600  dark:text-gray-400 md:px-10 md:text-5xl md:flex-col lg:text-7xl'>
          <a
            href='https://github.com/pvenegas30'
            target='_blank'
            rel='noreferrer'
            className='cursor-pointer hover:text-teal-600 ease-in duration-100'
          >
            <AiFillGithub title='GitHub Pedro Venegas' />
          </a>
          <a
            href='https://www.linkedin.com/in/pedro-venegas-086bb8205/'
            className='cursor-pointer hover:text-teal-600 ease-in duration-100'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillLinkedin title='LinkedIn Pedro Venegas' />
          </a>
        </div>

        <div className='flex justify-center items-center mx-auto w-56 h-56 mt-5 md:pt-5 md:h-72 md:w-72 md:mx-0 lg:h-[300] lg:w-[300]'>
          <Image
            src={perfil}
            alt='perfil'
            className='rounded-full object-cover '
          />
        </div>
      </div>
    </div>
  );
};
