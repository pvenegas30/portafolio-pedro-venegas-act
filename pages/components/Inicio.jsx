import React from "react";
import Image from "next/image";
import perfil from "../../public/perfil-home.jpg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Inicio = () => {
  return (
    <div>
      <div className='text-center p-10 py-40 md:px-10 lg:px-20'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>
          Pedro Venegas
        </h2>
        <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>
          Desarrollador Web Full-Stack
        </h3>
        <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl'>
          ¡Hola! Me considero una persona creativa, responsable y con
          iniciativa. He obtenido mis conocimientos realizando varios cursos
          profesionales y siempre me encuentro aprendiendo para mejorar cada vez
          más mis habilidades.
        </p>
        <div className='text-6xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
          <AiFillGithub />
          <AiFillLinkedin />
        </div>

        <div className='mx-auto w-56 h-56 mt-5 md:h-96 md:w-96'>
          <Image
            src={perfil}
            alt='perfil'
            className='rounded-full object-cover'
          />
        </div>
      </div>
    </div>
  );
};
