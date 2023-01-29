import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ContactImg from "../../public/03.png";
import Image from "next/image";

export const Contacto = () => {
  return (
    <div className='flex flex-col justify-center w-full h-full px-10 pb-[400px] lg:px-[140px]'>
      <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-14 w-full '>
          <p className='mt-16 mb-10 text-xl tracking-widest uppercase text-teal-800'>
            Contacto
          </p>

          <div className='grid lg:grid-cols-5 gap-8'>
            {/* left */}
            <div className='flex justify-center flex-col col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
              <div className='flex justify-center flex-col lg:p-4 h-full '>
                <div className='flex justify-center pb-10'>
                  <Image
                    className='w-[100px] h-[100px] rounded-xl hover:scale-105 ease-in duration-300'
                    src={ContactImg}
                    alt='/'
                  />
                </div>
                <div>
                  <h2 className='py-2 text-xl font-bold text-teal-800'>
                    Pedro Venegas
                  </h2>
                  <p className='text-md font-bold text-gray-600'>
                    Desarrollador Front-End
                  </p>

                  <p className='py-4 text-justify'>
                    Soy un desarrollador web que siempre se mantiene aprendiendo
                    cosas nuevas. Crecer como profesional es una de mis metas,
                    así que ninguna idea es tan descabellada como para que sea
                    imposible. ¿Qué tienes en mente?
                  </p>
                  <p className='text-right mr-[10px] py-4 italic text-gray-500 text-sm'>
                    {'"'}Establecer objetivos es el primer paso para convertir
                    lo invisible en lo visible{'"'}.
                  </p>
                  <p className='text-right mr-[10px] py-4 italic text-gray-500 text-sm'>
                    - Tony Robbins.
                  </p>
                </div>
                <div>
                  <p className='text-center pt-8 pb-4'>¡Contacta conmigo!</p>
                  <div className='flex items-center justify-center gap-x-10 py-4'>
                    <Link
                      href='https://www.linkedin.com/in/pedro-venegas-086bb8205'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                      </div>
                    </Link>
                    <Link
                      href='https://github.com/pvenegas30'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
              <div className='pt-10 p-2'>
                <form
                  action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                  method='POST'
                  encType='multipart/form-data'
                >
                  <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>Nombre</label>
                      <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='text'
                        name='name'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>Teléfono</label>
                      <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='text'
                        name='phone'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='email'
                      name='email'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Asunto</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='subject'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Mensaje</label>
                    <textarea
                      className='resize-none border-2 rounded-lg p-3 border-gray-300'
                      rows='7'
                      name='message'
                    ></textarea>
                  </div>

                  <div className="w-full flex justify-center">
                  <button className=' w-[40%] rounded-full p-4 text-black mt-4 bg-teal-400'>
                    Send Message
                  </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
