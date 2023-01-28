import React from "react";
import Image from "next/image";
import content from "../../public/code.png";
import design from "../../public/design.png";
import creativity from "../../public/diseño.png";
import arq from "../../public/arq.png";
import Skills from "./skills/Skills";
import SkillsBack from "./skills/SkillsBack";
import SkillsDesign from "./skills/SkillsDesign";
import SkillsArq from "./skills/SkillsArq";
import ButtonPDF2 from "./ButtonPDF2";
import ButtonPDF from "./ButtonPDF";
import ButtonPDF3 from "./ButtonPDF3";

export const Servicios = () => {
  return (
    <section className='py-20 flex flex-wrap justify-center'>
      {/* DESARROLLADOR */}
      <div className='lg:flex gap-10 px-8 md:px-14'>
        <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-gray-100 flex-1'>
          <Image
            src={design}
            alt='design'
            width={100}
            height={100}
            className='mx-auto'
          />
          <h3 className='text-lg font-medium pt-8 pb-2'>Desarrollo web</h3>
          <p className='py-2'>
            Creo tu página web desde cero utilizando los lenguajes de
            programación más adecuados.
          </p>
          <h4 className='py-4 text-teal-600 font-bold'>Front-End</h4>

          <Skills />

          <h4 className='py-4 text-teal-600 font-bold mt-3'>Back-End</h4>

          <SkillsBack />

          <ButtonPDF />
        </div>

        {/* Creación de Contenido */}

        <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-gray-100 flex-1'>
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
          <h4 className='py-4 text-teal-600 font-bold'>
            Webs en las que he participado
          </h4>
          <ul className='pt-10 flex justify-center items-center flex-col text-teal-600'>
            <li className='mb-2'>
              <a
                href='https://tuapppara.com/autor/pedro'
                target='blank'
                className='hover:text-green-600'
              >
                TuAppPara
              </a>
            </li>
            <li className='mb-2'>
              <a
                href='https://andro4all.com/author/pedrovenegas'
                target='blank'
                className='hover:text-green-600'
              >
                Andro4All
              </a>
            </li>
            <li className='mb-2'>
              <a
                href='https://xombit.com/author/pedrovenegas'
                target='blank'
                className='hover:text-green-600'
              >
                Xombit
              </a>
            </li>
            <li className='mb-2'>
              <a
                href='https://alfabetajuega.com/author/pedro-venegas'
                target='blank'
                className='hover:text-green-600'
              >
                Alfa Beta Juega
              </a>
            </li>
            <li className='mb-2'>
              <a
                href='https://www.somosxbox.com/author/pvenegas'
                target='blank'
                className='hover:text-green-600'
              >
                SomosXbox
              </a>
            </li>
            <li className='mb-2'>
              <a
                href='https://androidphoria.com/author/pedro-venegas'
                target='blank'
                className='hover:text-green-600'
              >
                AndroidPhoria
              </a>
            </li>
            <li className='mb-2'>
              <a
                href='https://www.mundodeportivo.com/urbantecno/author/pedro-venegas'
                target='blank'
                className='hover:text-green-600'
              >
                UrbanTecno
              </a>
            </li>
          </ul>

          <div className='pt-[60px]'>
            <ButtonPDF2 />
          </div>
        </div>
        {/* DISEÑÓS */}
        <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-gray-100 flex-1'>
          <Image
            src={creativity}
            alt='creatibity'
            idth={100}
            height={100}
            className='mx-auto'
          />
          <h3 className='text-lg font-medium pt-8 pb-2 '>Diseño</h3>
          <p className='py-2'>
            Domino los principios de diseño para hacer trabajos de calidad
            utilizando los programas más adecuados para cumplir con objetivos
            Front-End.
          </p>
          <h4 className='py-6 text-teal-600 font-bold'>Programas de diseño</h4>
          <SkillsDesign />
        </div>
      </div>

      {/* ARQUITECTURA */}
      <div className='w-[85%] lg:w-[40%] text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100'>
        <Image
          src={arq}
          alt='arq'
          idth={100}
          height={100}
          className='mx-auto'
        />
        <h3 className='text-lg font-medium pt-8 pb-2 '>Arquitectura</h3>
        <p className='py-2'>
          Soy profesional en arquitectura, graduado de la Universidad José
          Antonio Páez. Estoy capacitado para crear diseños modernos con
          respecto a edificaciones de ámbito turístico, educativo, deportivo
          residencial y comercial.
        </p>

        <p className='py-2'>
          CEO de{" "}
          <a
            target='_blank'
            href='https://nova-architecture.netlify.app/'
            className='text-cyan-600 hover:text-green-700'
            rel='noreferrer'
          >
            Nova Architecture
          </a>
          , una nueva firma de arquitectos enfocados en arquitectura
          contemporánea.
        </p>
        <h4 className='py-4 text-teal-600 font-bold'>Programas de diseño</h4>

        <SkillsArq />
        <ButtonPDF3 />
      </div>
    </section>
  );
};
