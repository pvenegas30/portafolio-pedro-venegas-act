import React from "react";
import Image from "next/image";
import content from "../../public/code.png";
import design from "../../public/design.png";
import creativity from "../../public/diseño.png";

export const Servicios = () => {
  return (
    <section className='py-20 w'>
      <div className='lg:flex gap-10 px-8 md:px-14'>
        <div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1'>
          <Image
            src={design}
            alt='design'
            width={100}
            height={100}
            className='mx-auto'
          />
          <h3 className='text-lg font-medium pt-8 pb-2  '>Desarrollo web</h3>
          <p className='py-2'>
            Creo tu página web o aplicación desde cero, utilizando los lenguajes
            de programación más adecuados y modernos.
          </p>
          <h4 className='py-4 text-teal-600'>Tecnologías dominadas</h4>
          <p className='text-gray-800 py-1'>HTML5</p>
          <p className='text-gray-800 py-1'>
            CSS3, Styled Components, SASS, TailWindCSS
          </p>
          <p className='text-gray-800 py-1'>Javascript, JQuery, Typescript</p>
          <p className='text-gray-800 py-1'>React & Redux</p>
          <p className='text-gray-800 py-1'>NodeJS, NextJS</p>
          <p className='text-gray-800 py-1'>MongoDB</p>
          <p className='text-gray-800 py-1'>Firebase</p>
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
          <Image
            src={content}
            alt='code'
            width={100}
            height={100}
            className='mx-auto'
          />
          <h3 className='text-lg font-medium pt-8 pb-2 '>
            Creación de Contenido
          </h3>
          <p className='py-2'>
            He trabajado para múltiples blogs de España como redactor y editor.
            Tengo más de 4 años de experiencia en el ámbito laboral.
          </p>
          <h4 className='py-4 text-teal-600'>Webs en las que he participado</h4>
          <ul className=' text-teal-600'>
            <li>
              <a href='https://tuapppara.com/autor/pedro' target='blank'>
                TuAppPara
              </a>
            </li>
            <li>
              <a
                href='https://andro4all.com/author/pedrovenegas'
                target='blank'
              >
                Andro4All
              </a>
            </li>
            <li>
              <a href='https://xombit.com/author/pedrovenegas' target='blank'>
                Xombit
              </a>
            </li>
            <li>
              <a
                href='https://alfabetajuega.com/author/pedro-venegas'
                target='blank'
              >
                Alfa Beta Juega
              </a>
            </li>
            <li>
              <a
                href='https://www.somosxbox.com/author/pvenegas'
                target='blank'
              >
                SomosXbox
              </a>
            </li>
            <li>
              <a
                href='https://androidphoria.com/author/pedro-venegas'
                target='blank'
              >
                AndroidPhoria
              </a>
            </li>
            <li>
              <a
                href='https://www.mundodeportivo.com/urbantecno/author/pedro-venegas'
                target='blank'
              >
                UrbanTecno
              </a>
            </li>
          </ul>
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
          <Image
            src={creativity}
            alt='creatibity'
            idth={100}
            height={100}
            className='mx-auto'
          />
          <h3 className='text-lg font-medium pt-8 pb-2 '>Diseño</h3>
          <p className='py-2'>
            Soy profesional en arquitectura, por lo que domino principios de
            diseños para hacer un desarrollo web de calidad utilizando los
            programas más adecuados para cumplir con tus objetivos Front-End.
          </p>
          <h4 className='py-4 text-teal-600'>Programas que domino</h4>
          <p className='text-gray-800 py-1'>Photoshop</p>
          <p className='text-gray-800 py-1'>Illustrator</p>
          <p className='text-gray-800 py-1'>Figma</p>
          <p className='text-gray-800 py-1'>SketchUp</p>
          <p className='text-gray-800 py-1'>Twinmotion - Unreal Engine</p>
        </div>
      </div>
    </section>
  );
};
