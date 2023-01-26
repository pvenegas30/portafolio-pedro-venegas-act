import React from "react";

export const Contacto = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full px-10 pb-[100px] lg:px-[140px]'>
      <div className='mt-[70px]'>
        <h2 className=' text-center text-3xl pt-10 pb-8 dark:text-white'>
          Contacto
        </h2>
      </div>

      <div className='bg-teal-600 p-10'>
        <form className='flex flex-col gap-y-5 '>
          <input
            className='px-4 py-2'
            type='text'
            name='user_name'
            placeholder='Name'
          />
          <input
            className='px-4 py-2'
            type='email'
            name='user_email'
            placeholder='Email'
          />
          <textarea
            className='px-4 py-2'
            name='message'
            placeholder='Message'
          />

          <input
            className='cursor-pointer my-10 bg-teal-600 text-white font-semibold tracking-wide py-3 px-4 rounded-3xl text-sm md:text-md md:px-5 dark:bg-teal-400 dark:text-black'
            type='submit'
            value='Send'
          />
        </form>
      </div>
    </div>
  );
};
