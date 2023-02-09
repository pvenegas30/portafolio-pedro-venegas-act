import React, { useEffect } from "react";
import Image from "next/image";
import content from "../public/code.png";
import design from "../public/design.png";
import creativity from "../public/diseño.png";
import arq from "../public/arq.png";
import Skills from "./skills/Skills";
import SkillsBack from "./skills/SkillsBack";
import SkillsDesign from "./skills/SkillsDesign";
import SkillsArq from "./skills/SkillsArq";
import ButtonPDF2 from "./buttons/ButtonPDF2";
import ButtonPDF from "./buttons/ButtonPDF";
import ButtonPDF3 from "./buttons/ButtonPDF3";
import { useTranslations } from "next-intl";
import Aos from "aos";
import "aos/dist/aos.css";

export const Servicios = () => {
  const t = useTranslations();

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 800,
    });
  }, []);

  return (
    <section className='py-20 flex flex-wrap justify-center 2xl:container 2xl:m-auto'>
      {/* DESARROLLADOR */}
      <div className='lg:flex gap-10 px-8 md:px-14' data-aos='fade-down'>
        <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-gray-100 flex-1'>
          <Image
            src={design}
            alt='design'
            width={100}
            height={100}
            className='mx-auto'
          />
          <h3 className='text-lg font-medium pt-8 pb-2'>
            {t("services.title")}
          </h3>
          <p className='py-2'>{t("services.dev")}</p>
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
            {t("services.contenTitle")}
          </h3>
          <p className='py-2'>{t("services.content")}</p>
          <h4 className='py-4 text-teal-600 font-bold'>{t("services.webs")}</h4>
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
            width={100}
            height={100}
            className='mx-auto'
          />
          <h3 className='text-lg font-medium pt-8 pb-2 '>
            {t("services.designTitle")}
          </h3>
          <p className='py-2'>{t("services.design")}</p>
          <h4 className='py-6 text-teal-600 font-bold'>
            {t("services.designSkills")}
          </h4>
          <SkillsDesign />
        </div>
      </div>

      {/* ARQUITECTURA */}
      <div className='w-[85%] lg:w-[40%] text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100'>
        <Image
          src={arq}
          alt='arq'
          width={100}
          height={100}
          className='mx-auto'
        />
        <h3 className='text-lg font-medium pt-8 pb-2 '>
          {t("services.arqTitle")}
        </h3>
        <p className='py-2'>{t("services.arq")}</p>

        <p className='py-2'>
          {t("services.arqCeo")}{" "}
          <a
            target='_blank'
            href='https://nova-architecture.netlify.app/'
            className='text-cyan-600 hover:text-green-700'
            rel='noreferrer'
          >
            Nova Architecture
          </a>
          {t("services.arqPart")}
        </p>
        <h4 className='py-4 text-teal-600 font-bold'>
          {t("services.design.skills")}
        </h4>

        <SkillsArq />
        <ButtonPDF3 />
      </div>
    </section>
  );
};
