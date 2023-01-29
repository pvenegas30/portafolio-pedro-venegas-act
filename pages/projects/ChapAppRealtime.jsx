import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import novarq from "../../public/projects/chatapp.png";

export const ChatApp = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[100px] '>
        <Image width={200} height={100} src={novarq} alt='/' />
      </div>
    </div>
  );
};
