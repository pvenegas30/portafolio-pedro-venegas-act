import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const UpButton = () => {
  return (
    <div
      className='top-[520px] flex justify-end items-end relative'
      title='Subir'
    >
      <a
        href='#'
        className='text-white right-5 rounded-full bg-teal-700 dark:bg-white absolute text-3xl hover:text-black dark:hover:text-white dark:text-black hover:bg-teal-400 dark:hover:bg-teal-700 transition-all duration-200 ease-in'
      >
        <AiOutlineArrowUp />
      </a>
    </div>
  );
};

export default UpButton;
