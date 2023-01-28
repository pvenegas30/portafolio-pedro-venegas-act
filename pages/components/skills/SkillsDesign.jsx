import Image from "next/image";
import React from "react";

import Photoshop from "../../../public/skills/photoshop.png";
import Illustrator from "../../../public/skills/Illustrator.png";
import Filmora from "../../../public/skills/Filmora.png";
import Figma from "../../../public/skills/Figma.png";

const SkillsDesign = () => {
  return (
    <div className='flex flex-wrap flex-col justify-center items-center gap-[10px] gap-y-[30px]'>
      <div
        title='Figma 90%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={Figma}
          alt='figma'
          className='w-[60px] h-[60px] object-contain'
        />
      </div>

      <div
        title='Photoshop 60%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={Photoshop}
          alt='photoshop'
          className='w-[60px] h-[60px] object-contain'
        />
      </div>

      <div
        title='Illustrator 50%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={Illustrator}
          alt='illustrator'
          className='w-[60px] h-[60px] object-contain'
        />
      </div>

      <div
        title='Filmora 90%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={Filmora}
          alt='filmora'
          className='w-[60px] h-[60px] object-contain'
        />
      </div>
    </div>
  );
};

export default SkillsDesign;
