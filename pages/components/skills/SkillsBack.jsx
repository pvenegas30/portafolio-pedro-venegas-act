import Image from "next/image";
import React from "react";

import Firebase from "../../../public/skills/Firebase.png";
import NextJS from "../../../public/skills/NextJS.png";
import NodeJS from "../../../public/skills/NodeJS.png";
import MongoDB from "../../../public/skills/MongoDB.png";

const SkillsBack = () => {
  return (
    <div className='flex flex-wrap justify-center gap-[10px]'>
      <div
        title='Firebase 50%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={Firebase}
          alt='firebase'
          className='w-[60px] h-[60px] object-contain'
        />
      </div>

      <div
        title='NextJS 70%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={NextJS}
          alt='nextjs'
          className='w-[60px] h-[60px] object-contain'
        />
      </div>

      <div
        title='NodeJS 50%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={NodeJS}
          alt='nodejs'
          className='w-[60px] h-[60px] object-contain'
        />
      </div>

      <div
        title='MongoDB 50%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={MongoDB}
          alt='mongoDB'
          className='w-[60px] h-[60px] object-contain'
        />
      </div>
    </div>
  );
};

export default SkillsBack;
