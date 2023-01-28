import Image from "next/image";
import React from "react";
import Html from "../../../public/skills/HTML5.png";
import Css from "../../../public/skills/CSS3.png";
import Javascript from "../../../public/skills/Javascript.png";
import ReactImg from "../../../public/skills/React.png";
import Tailwind from "../../../public/skills/TailWindCSS.png";
import Sass from "../../../public/skills/SASS.png";
import StyledC from "../../../public/skills/Styled Components.png";
import TypeScript from "../../../public/skills/Typescript.png";
import RouterDom from "../../../public/skills/React Router Dom.png";
import Redux from "../../../public/skills/Redux.png";

const Skills = () => {
  return (
    <div className='flex flex-wrap justify-center gap-[10px]'>
      <div
        title='HTML5 100%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={Html}
          alt='html'
          className='w-[50px] h-[50px] object-contain'
        />
      </div>
      <div
        title='CSS3 100%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={Css}
          alt='css'
          className='w-[50px] h-[50px] object-contain'
        />
      </div>
      <div
        title='JavaScript 90%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={Javascript}
          alt='javascript'
          className='w-[50px] h-[50px] object-contain'
        />
      </div>
      <div
        title='React 90%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={ReactImg}
          alt='react'
          className='w-[60px] h-[60px] object-contain'
        />
      </div>
      <div
        title='Tailwind 100%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={Tailwind}
          alt='tailwind'
          className='w-[60px] h-[60px] object-contain'
        />
      </div>

      <div
        title='Sass 90%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={Sass}
          alt='sass'
          className='w-[60px] h-[60px] object-contain'
        />
      </div>

      <div
        title='Styled Components 90%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={StyledC}
          alt='styledComponents'
          className='w-[60px] h-[60px] object-contain'
        />
      </div>

      <div
        title='TypeScript 50%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={TypeScript}
          alt='typeScript'
          className='w-[60px] h-[60px] object-contain'
        />
      </div>

      <div
        title='React Router Dom 100%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={RouterDom}
          alt='reactRouterDom'
          className='w-[60px] h-[60px] object-contain'
        />
      </div>

      <div
        title='Redux 70%'
        className='flex justify-center items-center w-16 h-16 cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      >
        <Image
          src={Redux}
          alt='redux'
          className='w-[60px] h-[60px] object-contain'
        />
      </div>
    </div>
  );
};

export default Skills;
