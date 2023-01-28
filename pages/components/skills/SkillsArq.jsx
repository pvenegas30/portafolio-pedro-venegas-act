import Image from "next/image";
import React from "react";

import Twinmotion from "../../../public/skills/twinmotion.png";
import AutoCAD from "../../../public/skills/autocad.png";
import SketchUp from "../../../public/skills/sketchup.png";
import Revit from "../../../public/skills/revit.png";

const SkillsArq = () => {
  return (
    <div className='flex flex-wrap flex-col justify-center items-center gap-[10px]'>
      <div
        title='Twinmotion 80%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={Twinmotion}
          alt='twinmotion'
          className='w-[60px] h-[60px] object-contain'
        />
      </div>

      <div
        title='AutoCAD 90%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={AutoCAD}
          alt='autocad'
          className='w-[60px] h-[60px] object-contain'
        />
      </div>

      <div
        title='SketchUp 80%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={SketchUp}
          alt='skechup'
          className='w-[60px] h-[60px] object-contain'
        />
      </div>

      <div
        title='Revit 80%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={Revit}
          alt='revit'
          className='w-[60px] h-[60px] object-contain'
        />
      </div>
    </div>
  );
};

export default SkillsArq;
